import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { useSession } from "next-auth/client";
import { dbConnect, Product } from "../../pages/api";
import { dehydrate, QueryClient, useQuery } from "react-query";
import { DetailSeo } from "@components/elements/CommonSeo";
import Layout from "@components/layouts";
import {
  Benefit,
  ClubDetailInfo,
  Faq,
  Refund,
  WePlay,
  InfoMemberChart,
  InfoCard
} from "@components/pageComp/detailview";
import Review from "@components/pageComp/detailview/Review";
import Curriculum from "@components/pageComp/detailview/Curriculum";
import { IProduct } from "@src/typings/db";
import {
  Content,
  DetailViewWrap,
  EditTxt
} from "@components/pageComp/detailview/styles";
import { useProdDetail } from "@src/hooks/api/useProducts/useProductDetail";
import parse from "html-react-parser";
import LazyLoad from "react-lazyload";

export interface IDetail {
  item: IProduct;
}

const DetailView = ({ item }: IDetail) => {
  const [session] = useSession();
  const router = useRouter();
  const { _id } = router.query;

  const { data } = useQuery("detail", () => item);
  const { data: data2 } = useProdDetail(String(_id));

  const parseOptions = {
    replace: (domNode: any) => {
      if (domNode.name === "img") {
        const { src, alt } = domNode.attribs;
        return (
          <LazyLoad once>
            <img src={src} alt={alt} />
          </LazyLoad>
        );
      }
    }
  };

  return (
    <>
      <DetailSeo
        _id={String(_id)}
        imgurl={String(data?.imgurl)}
        title={String(data?.title)}
      />
      <Layout className="detail">
        <DetailViewWrap>
          {data && _id !== undefined && data2 !== undefined && (
            <>
              <InfoCard
                data={data2}
                _id={String(_id)}
                session={session}
                community={false}
              />

              <Content>
                <EditTxt>{parse(data?.body || "", parseOptions)}</EditTxt>
                {data.isvod ? (
                  <Curriculum data={data} />
                ) : (
                  <ClubDetailInfo item={data} />
                )}
                <InfoMemberChart />

                <Review item={data} id={String(_id)} />
                <WePlay />
                <Benefit />
                <Refund title={data.title} />
                <Faq />
              </Content>
            </>
          )}
        </DetailViewWrap>
      </Layout>
    </>
  );
};

export default DetailView;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { _id: "61de5b9276486851207e9847" } }],
    fallback: true // --> false 시 1,2,3외에는 404
  };
};

export const getStaticProps: GetStaticProps = async ctx => {
  await dbConnect();

  const _id = ctx.params?._id;
  const result = await Product.find(
    { _id },
    { createdAt: false, updatedAt: false }
  ).lean();

  const data = JSON.parse(JSON.stringify(result[0]));

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery("detail", () => data);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      item: data
    }
  };
};
