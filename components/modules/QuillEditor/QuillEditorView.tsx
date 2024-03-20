import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { observer } from "mobx-react";
import { QuillStore } from "@/../src/mobx/store";
import QuillEditor from "./QuillEditor";

interface Props {
  category: string;
}

function QuillEditorView({ category }: Props) {
  const [mountBody, setMountBody] = useState(false);

  function rerenderBody() {
    setMountBody(mb => !mb);
  }
  useEffect(() => {
    rerenderBody();
  }, []);

  const handleSelectTemplate = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      const loadTemplate = {
        nodata() {
          QuillStore.data = "";
          rerenderBody();
        },
        meet() {
          QuillStore.data = `<h2>지금까지 자기계발서는 다 소용없었다는 분들! 주목!</h2><p><br></p><p>"대박이었습니다!!!!! 100점 만점에 1500점 드리고 싶습니다."</p><p>"앞으로 제 커리어가 나름 성공한다면 봉준 님 덕이 클 거 같습니다!"</p><p>"커리어를 어떻게 발전시켜 나갈 지에 대한 방향성을 잡을 수 있어서 좋았습니다."</p><p><br></p><p>진짜 행복하고 탁월해질 수 있는 커리어를 준비하고 계신가요? 무엇을 할 때 가장 즐겁고 행복한가요? 나답게 산다는 것은 무엇일까요? 나를 한 문장으로 표현한다면?</p><p><br></p><p>살면서 꼭 한 번은 마주해야 할 질문입니다. 그러나 자기 자신을 잘 모른다면 이 질문에 답하기란 쉽지 않죠. 인생의 중요한 선택인 커리어를 준비하는 것은 생각보다 매우 긴 여정입니다. 단순히 전공을 선택하거나 첫 직장을 선택할 때 끝나지 않습니다.</p><p><br></p><p>그럼 커리어의 여정을 잘 준비하려면 어떻게 해야 할까요?</p><p><br></p><p>1. 내가 진짜 좋아하는 것은 무엇인지 2. 어떤 방식으로 일할 때, 탁월해질 수 있는지 3. 어떨 때 몰입하고, 만족감을 느끼는지 정확하게 파악하고 의도적으로 활용하는 것이 필요합니다.</p><p><br></p><p>하지만 일상에 치여 온전히 자신에게 집중할 시간이 없는 우리에게, 커리어의 여정을 다듬어 가기란 쉽지 않지요. 태니지먼트 대표 김봉준 클럽장님과 함께 #나다움 #커리어 #탁월함&amp;성장 #일의의미 #행복한직장생활 등에 대한 답을 찾아보아요!</p><p><br></p><h3>어떤 사람들과 함께 하나요?</h3><p><br></p><ol><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span> 진짜 자신이 좋아하고 잘하는 일에 관심이 많은 사람들</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span> 자신에 대한 막연하게 아는 것을 떠나 자신에 대해 진지하게 탐구할 사람들</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span> 강점을 기반으로 자신의 커리어를 한 단계 한 단계 구체적으로 설계하고 싶은 사람들</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span> 일에 대한 의미를 스스로 정의하고 만족스러운 커리어를 준비하고 싶은 사람들</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span> 자신만의 강점으로 탁월한 일잘러가 되고 싶은 사람들</li></ol><p><br></p><hr class="hr" style="width:100%;border-bottom:1px solid #f3f3f6;"><h2><br></h2><h2>클럽장 김봉준 님은</h2><h2 class="ql-align-center"><img src="https://cultureplace.s3-ap-northeast-2.amazonaws.com/notice/2110291110_c4ee11aa-ec58-4dc2-8921-a9d9955f6e7c.김봉준님.jpeg" width="136"></h2><p><br></p><ol><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span> 개인의 강점을 진단하고 개발할 수 있는 커리어 컨설팅 및 기업HR 컨설팅을 제공하는 태니지먼트를&nbsp;운영하고 있습니다.</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span> 개인의 강점을 진단하는 TANAGEMENT Wheel©을 개발했습니다.</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span> SKT, 카카오, 대학내일, 클래스101 등 50개 기업/공공기관/대학에서 강점 개발 및 리더십 강의를 진행하고 있습니다.&nbsp;</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span> 이랜드에서 그룹 인재개발 팀장을 하면서 인재 육성 및 커리어 코칭을 주로 진행하였습니다. 또한 조직의 강점개발 및 몰입도 향상 프로젝트를 진행하였습니다.</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span> 강점 기반의 커리어 개발 및 조직 운영에 대한 책 <a href="https://book.naver.com/bookdb/book_detail.nhn?bid=15876319" target="_blank" style="color: rgb(23, 120, 181); background-color: transparent;"> 『강점 발견』</a> 을 썼습니다.</li></ol><p><br></p><hr class="hr" style="width:100%;border-bottom:1px solid #f3f3f6;"><p><br></p><h2>첫 모임의 읽을거리는?</h2><p><br></p><p class="ql-align-center"><img src="https://cultureplace.s3-ap-northeast-2.amazonaws.com/notice/2110291110_0100022299885-00.jpeg" width="200"></p><p class="ql-align-center"><a href="https://search.daum.net/search?w=bookpage&amp;bookId=5145586&amp;q=%EA%B0%95%EC%A0%90+%EB%B0%9C%EA%B2%AC" target="_blank" style="color: rgb(30, 63, 255); background-color: transparent;"> 강점 발견</a></p><p class="ql-align-center">김봉준, 장영학</p><p class="ql-align-center"><br></p><p>우리는 저마다 타고난 강점이 있습니다. 이것을 제대로 발견하고 적절히 노력하면 탁월한 성취와 성과를 거머쥘 수 있는데요. 이처럼 중요한 강점에 대해 우리는 제대로 알고 있는 걸까요?</p><p><br></p><p><span class="ql-size-small" style="color: rgb(136, 136, 136);"> ※첫 책 이후 함께 읽을 거리는 멤버들의 논의와 투표를 통해 선정됩니다. 클럽장 클럽이나 일부 클럽의 경우, 읽을거리가 정해져 있는 클럽이 있을 수 있습니다.</span></p><p><br></p><hr class="hr" style="width:100%;border-bottom:1px solid #f3f3f6;"><p><br></p><h2>앞으로 4개월 동안 우리 클럽은 이런 걸 할 거예요.</h2><p><br></p><p class="ql-align-center"><img src="https://cultureplace.s3-ap-northeast-2.amazonaws.com/notice/2110291110_book.png" width="366"></p><p><br></p><h3>두 번째 모임</h3><p>📖 이항심, 『시그니처』</p><p>이항심 진로심리 전문가가 이 책에서 말하는 '시그니처'는 남과 다른 나만의 고유성, 강점을 뜻합니다. 저자가 직접 기업인 등 리더들을 인터뷰해 그들의 '시그니처'는 무엇인지 알아 보았습니다.</p><p><br></p><h3>세 번째 모임</h3><p>📖&nbsp;피터 드러커, 『자기경영노트』</p><p>일 잘하는 사람은 타고나는 것이 아니라 만들어진다? 지식근로자를 위한 변화와 혁신의 5가지 법칙!</p><p><br></p><h3>네 번째 모임</h3><p>📖 최인철, 『굿 라이프』</p><p>우리가 가지고 있던 행복에 관한 오해들을 바로잡고,&nbsp;각자가 가지고 있는 행복 프레임을 들여다보고, 나아가 자신의 삶에 대해 각자가 가지고 있는 인생 프레임을 스스로 점검해 봅시다.</p><p><br></p><hr class="hr" style="width:100%;border-bottom:1px solid #f3f3f6;"><p class="ql-align-center"><br></p><p><span class="ql-size-small" style="color: #ff8400"> 우린 이렇게 달라질 거예요</span></p><h2>나 자신을 제대로 알고, 쓸 줄 알게 됩니다.</h2><p><br></p><ol><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span> 나 자신을 제대로 파악하게 됩니다.</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span> 자신이 어떤 사람인지 알아야 본인이 하는 일부터 업무 환경, 일하는 방식까지 빠르게 정의내릴 수 있고, 진짜 만족감을 찾을 수 있습니다.</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span> 지금까지 수많은 자기계발 관련 책이나 강연을 들어도 해소가 되지 않았던 분들이라면, 나다운 강점에서 시작하여 커리어를 찾아가는 여정을 함께 떠나 보시죠!</li></ol>`;
          rerenderBody();
        },
        notice() {
          QuillStore.data = `<h2>컬쳐플레이스는 어떻게 진행되나요? - 클럽 멤버십 신청부터 첫 모임 전까지</h2><p><br></p><h3>1. 클럽 신청하기</h3><p>장소, 일정, 주제 등을 고려하여 원하는 클럽을 신청합니다. 평소 독서량이 많지 않거나, 가볍게 컬쳐플레이스 한번 해보고 싶은 입문자라면? 커뮤니티성이 짙은 [무경계] 클럽, 가볍게 읽을 수 있는 문학을 읽는 [문] 클럽, 영화와 책을 함께 보는 [북씨] 클럽을 추천해요. 지적 욕구가 강하고, 전문가와 함께 치열하게 읽고 토론하고 싶다면? '클럽장 있는 클럽'을 추천합니다!</p><p>👉<a href="https://trevari.co.kr/blog/show?id=91c27fd4-ebab-4e43-a588-f48ce919d91f" target="_blank" style="color: rgb(23, 120, 181); background-color: transparent;"> 나에게 맞는 클럽 찾아보기</a></p><p><br></p><h3>2. 책 읽기!</h3><p>클럽 신청을 완료했다면? 첫 책을 읽어주세요. 모임 일은 생각보다 빨리 다가오니, 부지런히 읽어봅시다! 첫 책은 각 클럽 상세페이지에서 확인하실 수 있어요.</p><p><br></p><h3>3. 단톡방에서 인사 나누기</h3><p><img src="https://image.trevari.co.kr/file/6c1b9ebf-e142-4ec9-b3f7-5c671b1a11a0.%EC%B9%B4%ED%86%A1%EC%B0%BD.png"></p><p><br></p><p>첫 모임 5일 전, 카카오톡 단체 채팅방에 초대해드립니다. 앞으로 함께 할 멤버들과 반갑게 인사해주세요! 단톡방에서는 멤버들과 자유롭게 대화를 나누거나, 모임 주제와 관련된 정보를 공유하기도 해요. 파트너가 모임 공지와 다양한 혜택도 공지하고 있으니 참고해주세요.</p><p><br></p><p><br></p><h2>매달 무엇을 할까요?</h2><p><br></p><h3>1. 책 읽기</h3><p>한 달에 한 권, 정해진 책을 함께 읽어요. 평소 책을 잘 읽지 않았더라도 너무 걱정하지 마세요! 컬쳐플레이스에서 함께 읽으면 더 쉽고 재밌게 읽을 수 있을 거예요.</p><p><br></p><p>💬<span style="background-color: rgb(255, 235, 204);"> 집단 지성의 힘!</span></p><p>저는 책을 읽다가 막힌다 싶으면 단톡방에 얘기해요. 그러면 다른 멤버들이 공감해주시면서 책의 재밌는 포인트를 알려주거나 이해를 도와주는 영상 등을 공유해주더라고요! 🙌</p><p><br></p><h3>2. 독후감 쓰기</h3><p>모임 2일 전까지 독후감을 써요. 안 쓰면 모임에 올 수 없어요. 정말로요! 원칙을 지켜나가기 위해 노력하는 컬쳐플레이스를 이해해주세요. 독후감 제출 기한은 문자를 통해 알려드리고 있어요.&nbsp;독후감을 쓴 사람들만 모인다는 게 얼마나 양질의 토론을 끌어내는지 경험해보세요.</p><p><br></p><p>💬<span style="background-color: rgb(255, 235, 204);"> 독후감 작성 TIP</span></p><p>400자 분량의 독후감 쓰기! 생각보다 어렵지 않아요. 책 주제를 요약하거나, 책을 읽고 난 소감을 써도 금방 채울 수 있어요. 책의 첫인상과 끝 인상도 정리해볼까요? 책의 어떤 부분에 공감했고, 어떤 부분에서 갸우뚱했는지도 적어준다면 더 풍부한 토론이 될 거예요.</p><ol><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span> 독후감 제출: 모임 일 2일 전 23:59:59 까지</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span> 독후감 분량: 공백 제외 400자 ([씀] 클럽은 1,000자)</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span> 제출 위치: [컬쳐플레이스 홈페이지&gt; 마이페이지 &gt; 클럽 &gt; 독후감 읽고, 쓰기]</li></ol><p><br></p><h3>3. 모임 참석하기</h3><p><img src="https://image.trevari.co.kr/file/d9ff72a3-08a8-4d7c-ae01-5284e42ae41f.200%25%20%EC%A6%90%EA%B8%B0%EA%B8%B0%20%EB%AA%A8%EC%9E%84%20%EC%82%AC%EC%A7%84%28%EC%82%AC%EC%9D%B4%EC%A6%88%20%EC%A1%B0%EC%A0%95%29.jpg"></p><p><br></p><p>다 같이 모여 책과 독후감에 관해 대화해요. 때로는 치열하게 때로는 재밌게! 어떤 말을 해야 할지 모르겠더라도 너무 걱정하지 마세요! 책에 관한 구체적인 질문이 포함된 발제문을 파트너가 미리 준비해준답니다.</p><p><br></p><p>💬<span style="background-color: rgb(255, 235, 204);"> 북토크 수칙 미리 보기</span></p><ol><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span> 우리는 ‘독백’이 아닌 ‘대화’를 하기 위해 이 자리에 모였습니다.</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span> 나이와 지위와 친분을 잊고 서로를 ‘님’이라 부릅니다.</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span> 좋은 대화는 잘 설득하는 사람이 아니라 ‘잘 설득당하는 사람’이 만듭니다.</li><li data-list="bullet" class="ql-align-justify"><span class="ql-ui" contenteditable="false"></span> 우리는 무엇이든 말할 수 있지만, 아무렇게나 말할 수는 없습니다.</li></ol><p><br></p><h3>4. 번개 참석하기</h3><p><img src="https://image.trevari.co.kr/file/05b07fe2-a86d-425a-8325-c8d71e302746.200%25%20%EC%A6%90%EA%B8%B0%EA%B8%B0%20%EB%B2%88%EA%B0%9C%20%EC%82%AC%EC%A7%84%28%EC%82%AC%EC%9D%B4%EC%A6%88%20%EC%A1%B0%EC%A0%95%29.jpg"></p><p><br></p><p>마음이 맞을 때 영화 관람, 맛집 탐방, 전시회 관람, 러닝 등 다양한 번개를 함께해요.&nbsp;그냥 주말에 혼자 저녁 먹기 싫을 때, 단톡방에서 번개 메이트를 구해봅시다! 멤버들과 더 친해지고 싶다면 번개 참석 추천! 친해질수록 재밌어요.</p><p>* 사회적 거리 두기 규정에 따라 번개 진행 여부를 결정합니다. 우리 안전하게 친해져요!</p><p><br></p><p><br></p><h2>첫 컬쳐플레이스, 걱정되신다고요?</h2><p><br></p><h3>1. 멤버를 도와주는 파트너</h3><p>모든 클럽에는 멤버를 도와주는 파트너가 있답니다. 쉽게 말해, 클럽 운영을 담당하는 사람이에요. 컬쳐플레이스에서 소정의 활동비와 교육을 받게 됩니다. 원래는 다들 컬쳐플레이스 멤버였다는 사실! 컬쳐플레이스와 같은 곳을 바라봐주시는 멋진 분들로 모셨답니다. 컬쳐플레이스를 하며 어려운 점이 있다면 단톡방에서 파트너님을 찾아주세요!</p><p><br></p><p>멤버로 한 시즌만 경험하면 파트너에 지원을 할 수 있습니다. 멋진 분들로 계속 모시고 있으니 많은 관심 부탁드려요!</p><p>👉<a href="https://www.notion.so/87893b0e875946578204b085fe1ff434" target="_blank" style="color: rgb(23, 120, 181); background-color: transparent;"> 파트너 지원하기</a></p><p><br></p><h3>2. 모임에서 무슨 얘기를 하지?</h3><p>모임 때 무슨 얘기를 할까 걱정되시나요? 걱정하지 마세요! 모든 모임에는 의미 있고 깊이 있는 모임을 위해 그날의 이야깃거리나 질문을 정리한 발제문이 준비되어 있습니다. 모임방에 도착하면 발제자와 파트너가 함께 만든 발제문이 놓여 있을 거예요.</p><p><br></p><p>발제문이 완성되면 모임 당일이나 전날 단톡방에 공유해드립니다. 미리 읽어보고 무슨 이야기를 할지 생각을 정리해본다면 그날 모임의 만족도를 높일 수 있어요. 개인적으로 컬쳐플레이스를 찐하게 경험하고 싶다면 발제자를 꼭 해봐야 합니다. 함께 나눌 주제를 생각하며 읽는 책은 의미가 남다르더라고요.</p><p><br></p><p>💬<span style="background-color: rgb(255, 235, 204);"> 발제문 미리 보기</span></p><ol><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span> 정말 불가항력적인 사랑, 운명적 사랑, 거부할 수 없는 사랑이 있을까요?</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span> 남아선호사상이 여성에게 그리고 남성에게 미친 영향은 무엇일까요?</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span> 감염병과 도시가 공존하기 위해서는 어떤 변화가 필요할까요?</li><li data-list="bullet" class="ql-align-justify"><span class="ql-ui" contenteditable="false"></span> 책 속의 등장인물들은 저마다의 가치에 따라 행동합니다. 나는 어떤 등장인물과 가장 유사한 가치관을 가지고 있나요? 왜 그렇게 생각하나요?</li></ol><p><br></p><p><br></p><h2>컬쳐플레이스 200% 즐기기</h2><p><br></p><h3>1. 이벤트</h3><p><img src="https://image.trevari.co.kr/file/a9508fc5-898e-4b31-81d4-d26eb1c5f41e.%EB%82%98%EB%A5%BC%20%EB%A7%A4%EB%A0%A5%EC%A0%81%EC%9C%BC%EB%A1%9C%20%ED%8C%94%EC%95%84%EB%B4%85%EC%8B%9C%EB%8B%A4%20%285%29.jpg"></p><p><br></p><p>새로운 관점과 취향을 소개해드립니다.&nbsp;위스키 시음회, 북토크, 조향 클래스, 음악 살롱, 글쓰기 특강, 맥주 만들기, 러닝 크루, 댄스 클래스 등 다양한 경험을 해요. 다른 클럽 멤버들도 만나고, 각 분야 전문가도 만날 수 있는 기회! 놓치지 마세요. 지금은 COVID-19로 많이 못 열고 있지만, 상황이 다시 좋아지면 열고 싶은 이벤트들이 가득해요!&nbsp;조금만 기다려주세요!</p><p>👉<a href="https://trevari.co.kr/events" target="_blank" style="color: rgb(23, 120, 181); background-color: transparent;"> 컬쳐플레이스 이벤트 보기</a></p><p><br></p><h3>2. 놀러가기</h3><p>내 클럽도 좋지만 다른 클럽도 궁금하다면? 컬쳐플레이스 멤버라면 다른 클럽 모임에 놀러 갈 수 있어요. 놀러가고 싶은 모임에서 정한 책을 읽고, 누구보다 빠르게 독후감을 제출하면 돼요. 하지만 원활한 토론을 위해 부득이하게 규모를 조정하고 있으니 놀러가기 룰을 꼭 확인해주세요!</p><p>👉<a href="https://trevari.co.kr/cs?tab=faq&amp;category=%EB%86%80%EB%9F%AC%EA%B0%80%EA%B8%B0&amp;id=9ce6dbc1-c93c-4b52-b724-bca930c18c62" target="_blank" style="color: rgb(23, 120, 181); background-color: transparent;"> 놀러가기 룰 확인하기</a></p><p><br></p><p>💬<span style="background-color: rgb(255, 235, 204);"> 놀러가기 TIP</span></p><ol><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span> 첫 모임을 제외하고, 가장 먼저 놀러가기 독후감을 제출한다면 놀러가기 성공!</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span> 만약 첫 번째로 독후감을 못 썼더라도, 해당 모임 날 클럽 멤버가 15명 이하로 온다면 놀러가기 성공!</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span> 모임 날, 해당 클럽의 멤버가 15명 이상 올 경우에는 놀러가기가 안된답니다.</li></ol><h3><strong style="color: black;"> 3. 아지트</strong></h3><p>컬쳐플레이스 멤버를 위한 공간이에요. 아지트는 강남, 안국에 있어요. 강남 아지트에는 모임 전 쉴 수 있는 라운지도 마련되어 있습니다. 오직 멤버분들에게만 제공되는 알짜 혜택, 아지트 대관! 아지트 공간을 대관해서 멤버들과의 스터디, 보드게임 번개나 파티 장소로 사용할 수도 있었요!</p><p>* 현재 COVID-19 확산 방지와 사회적 거리두기 방역 조치 준수를 위해 대관 서비스를 잠시 중단했습니다. 사회적 거리두기가 1단계로 하향되면 아지트 대관을 재개할 예정입니다.</p><p><br></p><h3>4. 제휴</h3><p>컬쳐플레이스 멤버라면 누구나 다양한 할인 혜택 등을 받을 수 있어요. 새로운 브랜드나 서비스를 경험할 수 있는 기회! YES24 북클럽부터 플레이스 캠프 제주, 윌라 까지 총 20개의 제휴를 준비했어요.</p><p>👉<a href="https://trevari.co.kr/benefit" target="_blank" style="color: rgb(23, 120, 181); background-color: transparent;"> 제휴 혜택 보기</a></p><p><br></p><p><br></p><h2>컬쳐플레이스에서&nbsp;더 나은 우리가 되어요</h2><p>컬쳐플레이스는 취향과 가치관으로 연결된 사람들이 모여 더 나은 우리를 만들어가고 있어요. 컬쳐플레이스와 함께한 멤버분들이 남겨주신 후기를 살펴보세요!</p><p><br></p><blockquote>"친한 친구들 사이에선 오글거린다며 구박받아왔던 얘기가 이곳에선 매우 자연스러웠다." - 20.05 [문-옐로] 멤버 최다연 님</blockquote><blockquote>"모임을 통해서 변화하는 내가 나쁘지 않다. 많은 사람들과 함께하는 모임이지만, 컬쳐플레이스 안에서는 나를 제대로 마주하게 된다." - 20.01 [문-그린] 멤버 남궁희 님</blockquote><blockquote>"‘죽음이란 무엇인가, 어떻게 살아야 하는가' 이런 얘기하기 어렵잖아요? 그런데 컬쳐플레이스에서는 책을 매개로 이런 대화를 하는 게 가능하니까요." - 20.05 [체험독서-바리] 멤버 강대혁 님</blockquote><p><br></p><h3>지금까지</h3><p>컬쳐플레이스 누적 멤버 50,376명</p><p>컬쳐플레이스에 제출된 독후감 123,434편</p><p>컬쳐플레이스에서 열린 독서모임 10,611회</p><p>컬쳐플레이스에서 함께 나눈 대화 1,887,120분</p><p>(2021년 5월 기준)</p><p><br></p><p>2021년에도 컬쳐플레이스와 함께 읽고, 쓰고, 대화하며 친해져요!</p>`;
          rerenderBody();
        },
        event() {
          QuillStore.data = `<h2><strong style="color: rgb(255, 121, 0);">이벤트 소개</strong></h2><h3 class="ql-align-center"><strong style="color: inherit;" class="ql-size-large">나다운 커리어를 만드는 과정을 공유합니다!</strong></h3><p class="ql-align-center"><br></p><p>충고, 조언, 정보가 넘쳐 나는 시대이지만, 나만의 것은 아직 무엇인지 모르겠다! 달려갈 에너지가 고갈됐다! 업무의 기본기를 탄탄하게 쌓고 싶다!</p><p><br></p><p>우리는 일을 하며, 삶을 살아가며 야심과 두려움을 동시에 갖고 있습니다. 잘 하고 싶은 마음이 굴뚝같으면서도 '지금 제대로 하고 있나?'라는 생각에 겁이 덜컥 나곤 하죠.</p><p><br></p><p>여기 뉴욕에서 자신의 이름을 건 브랜드 'YUNA YANG'을 10년 넘게 운영하며 20차례 뉴욕패션위크에 컬렉션을 선보인 크리에이티브 디렉터가 있습니다. 바로 유나양 님입니다.</p><p><br></p><p>왠지 너무 화려한, 나와는 다른 세상의 이야기 같다고요? 아니오!</p><p><br></p><p>정글과 같은 뉴욕에서 하이엔드 브랜드를 키워내면서 미국 최고 패션지 &lt;Women's Wear Daily&gt; 한국 디자이너 최초 커버스토리 장식하고, 모델이자 테슬라 CEO 일론 머스크의 어머니인 메이 머스크가 극찬한 디자이너가 됐지만 유나양 님도 시작은 여러분과 비슷했고, 일하는 과정에서 맞닥뜨리는 어려움도 크게 다르지 않습니다.</p><p><br></p><p><img src="https://image.trevari.co.kr/file/6c4660ce-2e0d-43db-a49b-3f11845b34ea.%ED%8C%90%EB%A7%A4%ED%8E%98%EC%9D%B4%EC%A7%803_%EC%84%9C%EB%AA%85.png"></p><p><br></p><p>대학에서 서양화를 전공하고 패션의 'ABC'도 모른 채 유학을 떠났지만 우연하게, 운명처럼 그 길로 들어섰어요. 가슴 뛰는 일을 찾았으니 열심히 일했죠. 늘 쉽지만은 않습니다. 매일이 새로운 도전이죠. 독창적인 디자인을 해내고, 브랜드를 관리 경영하며, 마케팅 전략을 기획하고, 스타트업처럼 투자자를 미팅하고, 원단 등 재료를 다루는 생산 라인과 협업 합니다. 채용을 하고, 에이전트나 백화점 등과 커뮤니케이션도 해야하죠.</p><p><br></p><p>꼭 패션업계가 아니라도 크리에이팅, 브랜딩, 마케팅, 커뮤니케이션, 투자, 채용 등 업무 현장에서 필요한 탄탄한 기본기와 노하우를 알고 싶지 않으신가요? 가슴 뛰는 일을 찾고, 그 길을 향해 갈 용기가 필요하지 않으신가요?</p><p><br></p><p><br></p><h3 class="ql-align-center"><strong style="color: inherit;" class="ql-size-large">"오직 10명만을 위한 대화"</strong></h3><p class="ql-align-center"><br></p><p>여러분의 고민을 털어놓고 유나양 님의 거침없지만 애정어린 조언을 들어보세요! 책에서 영감을 얻는다는 유나양 님이 직접 추천한 책을 함께 읽고 토론하면서 각자 인생의 런웨이를 만들 실마리를 찾아볼 수 있을 겁니다.</p><p><br></p><p>유나양 님은 이렇게 말합니다. "자신을 아는 것이 가장 중요해요. 내가 뭘 잘 할 수 있는지 모르고 정신없이 사는데 이건 너무 위험해요."</p><p><br></p><p>최근 펴낸 &lt;<a href="https://search.daum.net/search?w=bookpage&amp;bookId=5678861&amp;tab=introduction&amp;DA=LB2&amp;q=%ED%94%BC%EC%96%B4%EB%A6%AC%EC%8A%A4%20%EC%B1%85" target="_blank" style="background-color: transparent; color: rgb(23, 120, 181);">피어리스(fearless)</a>&gt;라는 에세이 제목처럼 '두려움없이', 나만의 길을 뚜벅뚜벅 걸어가며 세상에 없는 카테고리를 만들어낸 유나양 님과 대화를 나눠보세요. 영감을 얻게 되실 겁니다.</p><p><br></p><p><img src="https://image.trevari.co.kr/file/bccae979-f6cf-4588-ae67-59a1e16a4035.%ED%8C%90%EB%A7%A4%ED%8E%98%EC%9D%B4%EC%A7%804_%EC%84%9C%EB%AA%85.png"></p><p><img src="https://image.trevari.co.kr/file/480e2e74-59f8-4382-acf6-c04c94f54bec.%ED%8C%90%EB%A7%A4%ED%8E%98%EC%9D%B4%EC%A7%805_%EC%84%9C%EB%AA%85%20%EC%88%98%EC%A0%95.png"></p><p><br></p><h3><strong style="color: rgb(255, 121, 0);">이런 분들께 추천드려요</strong></h3><ol> <li data-list="bullet">나를 '갈아 넣지 않고' 나만의 길을 만들고 싶은 분</li><li data-list="bullet">가슴 뛰는 일을 선택하고 그 일에서 나만의 '무엇'을 만들어내고 싶은 분 </li><li data-list="bullet">어떤 기준으로 커리어를 선택해야 할지 망설이고 계신 분</li><li data-list="bullet">전공이 100% 적성에 맞지 않아 새로운 일을 시작하고 싶은 분</li><li data-list="bullet">일의 기본기를 배우고, 업계의 현장에서부터 최고 의사결정라인까지 쭉 간접 경험해 보고 싶은 분</li><li data-list="bullet">패션업이 아니더라도 브랜딩, 마케팅, 창업과 투자 등 비즈니스 꿀팁을 얻고 싶은 분</li><li data-list="bullet">평범을 비범으로 바꿔 내고 싶은 분</li></ol><p><br></p><p><br></p><p>유나양 님과의 만남에 앞서 궁금한 점이 있다면&nbsp;아래 링크에 남겨주세요!</p><p><strong>👉</strong><a href="https://bit.ly/2VNS6Ay" target="_blank" style="background-color: transparent; color: rgb(23, 120, 181);">https://bit.ly/2VNS6Ay</a></p><p><br></p><hr class="hr" style="width:100%;border-bottom:1px solid #f3f3f6;"><p><br></p><h3><strong style="color: rgb(255, 121, 0);">호스트</strong></h3><p><br></p><p><img src="https://image.trevari.co.kr/file/ed4fd332-286f-4672-a214-e41bb86f89b3.%EC%9C%A0%EB%82%98%EC%96%91_%EC%9E%91%EA%B0%80%EB%8B%98_%ED%94%84%EB%A1%9C%ED%95%84_2.jpg"></p><p><br></p><p><strong>유나양님</strong></p><p>이화여대 서양화과를 졸업한 뒤 이탈리아 밀라노에 어학연수를 갔다가 운명처럼 패션으로 방향을 튼다. 인스티튜트 마랑고니 디자인 코스를 밟고, 영국 런던 센트럴 세인트 마틴스에서 여성복을 전공했다.</p><p><br></p><p>유럽 명품 브랜드들을 거치며 경력을 쌓은 뒤 2010년 자신의 이름을 건 브랜드 'YUNA YANG'을 뉴욕에서 론칭한다. 발음하기 모호한 '유나'라는 아시아 이름으로 비즈니스를 한다고 했을 때 주변에선 하나같이 영어 이름을 쓰라며 만류했다. 오기가 생겨 'YUNA YANG'을 고집했다. 지금은 '이상한 동양 아이'가 아니라 "아시아에서 성장하고 유럽에서 훈련받은 유럽파 뉴욕 베이스 디자이너"라는 이색적 경력의 디자이너로 소개된다.</p><p><br></p><p>디자인 뿐만 아니라 브랜드 관리, 기획, 전략 등을 총괄하기에 스스로를 '크리에이티브 디렉터'로 소개한다. 현재 패션 강국인 미국, 일본, 유럽 등에서 럭셔리 브랜드로 각광받고 있다.</p><p><br></p><p>20세기 폭스사와 리즈 위더스푼, 로버트 패틴슨 주연의 영화 &lt;워터 포 앨리펀트&gt; 홍보의상, 조지루커스 필름 등 미국 엔터테인먼트 업계와 협업했다. 톱모델이자 일론 머스크의 어머니 메이 머스크, 그래미상 수상 가수 캐리 언더우드, 유명 저널리스트 앤 커리, 에미상 수상 배우 안나 건, 전설의 슈퍼 모델 캐롤 알트, &lt;블랙팬서&gt; &lt;워킹데드&gt;의 다나이 구리라, 다비 스탠치필드, 브리타니 스노우, 줄리언 허프 등이 그의 팬이다.</p><p><br></p><h3><strong style="color: rgb(255, 121, 0);">프로그램</strong></h3><p><br></p><p><strong>📍 본 이벤트는 1부 함께 듣는 세션과 2부 클럽장과 대화하는 세션으로 나누어 줌 웨비나로 진행됩니다. 어디서든 편하게 즐겨보세요.</strong></p><p><br></p><p><strong>📍 1부에서는 유나양 님의 경험과 노하우가 담긴 강연에 이어 채팅을 통한 Q&amp;A가, 2부에서는 참여 멤버 수를 줄여 유나양 님이 선정한 책을 바탕으로 보다 밀도있는 독서 토론이 진행됩니다.&nbsp;</strong><strong style="color: rgb(255, 153, 0);">좀 더 쫀쫀한 대화와 깊이 있는 인사이트를 나눠 보시려면 현재 보고 계신 페이지에서 신청하세요!</strong></p><p><br></p><p><strong>📍 1부 듣는 세션만 참여하고 싶으시다면</strong><strong style="color: rgb(255, 153, 0);">👉</strong><a href="https://trevari.co.kr/events/show?eventID=a0727b16-9e00-4138-8914-16db32a9df55" target="_blank" style="background-color: transparent; color: rgb(255, 153, 0);"><strong>여기</strong></a><strong>를 클릭하세요!</strong></p><p><br></p><p><br></p><p>📚&nbsp;<strong>진행순서</strong></p><p><br></p><p>1부 함께 듣는 세션 (1시간 30분)</p><p><br></p><p>19:40 ~ 19:50&nbsp;&nbsp;|&nbsp;유나양 님 소개</p><p>19:50 ~&nbsp;20:40&nbsp;&nbsp;| 유나양 님 강연 (feat. 에세이 &lt;피어리스&gt;)</p><p>20:40 ~ 21:10&nbsp;| 라이브 채팅 Q&amp;A</p><p><br></p><p>2부 클럽장과 대화하는 세션 (1시간 30분)</p><p><br></p><p>21:20 ~ 22:50 |&nbsp;유나양 님 추천 도서를 바탕으로 한 독서 토론</p><p><br></p><p><br></p><p><strong>📍이 책은 어떠신가요?</strong></p><p>2부에서는 유나양 님에게 영감을 준 책들에 대해 이야기를 나눕니다. 추천 도서를 꼭 읽지 않아도 세션에 참석할 수 있습니다.</p><p><br></p><p>📙 데이비드 색스 『사장의 탄생</p><p>추천이유❓ 데이비드 색스의 전작 『아날로그의 반격』을 읽으면서 저의 비전과 비슷한 부분이 많아 영감을 많이 받았는데, 『사장의 탄생』은 스타트업이나 창업을 꿈꾸는 분들에게 좋은 지침서가 될 수 있을 것 같아요. 제가 생각하는 것처럼 사장은 타고나는 것이 아닌 누구나 될수 있는 것이라는 관점도 마음에 듭니다. 결국엔 회사를 창업하고 브랜드의 탄생시키고 하는 모든 과정에 가장 중요한 것은&nbsp;사람이니까요.</p><p><br></p><p>📙 파울로 코엘료 『연금술사</p><p>추천이유❓ 인생은 자아를 찾아가는 여정. 저의 인생도 연금술사의 양치기 산티아고와 다르지 않습니다.&nbsp;위기를 극복하고 안주하고 싶은 마음을 억누르고 다시 도전하고&nbsp;우리 모두의 인생은 어쩌면 산티아고의 인생과 닮아있는 것은 아닐까요?&nbsp;1-2년에 한 번씩 꼭 다시 읽어보고 마음을 다잡아 봅니다.</p><p><br></p><p>📙 진중권 『미학 오디세이』 1~3</p><p>추천이유❓ 대학시절 읽은 책들중 영감을 준 책입니다.&nbsp;지금도 가끔 다시 읽는데 이미 알고 있는 미술가들을 새로운 관점으로 해석한 점이 신선하고 창조적인 일을 하는 사람으로서 영감을 많이 받았습니다. 미술에 관심 있는 분들, 눈에 보이지는 않는 것에서 영감을 받고 싶은 분들에게 권합니다.</p><p><br></p><hr class="hr" style="width:100%;border-bottom:1px solid #f3f3f6;"><p><br></p><h3><strong style="color: rgb(255, 121, 0);">위치</strong></h3><p><br></p><p><a href="https://zoom.us/download" target="_blank" style="background-color: transparent; color: rgb(23, 120, 181);">온라인(Zoom)</a></p><p>Zoom으로 진행됩니다.</p><p><br></p><h3><strong style="color: rgb(255, 121, 0);">공지사항</strong></h3><p><br></p><h4><strong style="color: inherit;">이벤트 신청 오픈</strong></h4><ol> <li data-list="bullet"> 8월 17일 화요일 오후 3시</li></ol><p><br></p><h4><strong style="color: inherit;">비멤버 신청</strong></h4><ol> <li data-list="bullet"> 컬쳐플레이스 홈페이지 회원가입 후 비멤버가로 신청하실 수 있습니다.</li></ol><p><br></p><h4><strong style="color: inherit;">안내</strong></h4><ol> <li data-list="bullet"> 이벤트 진행 관련 안내는 가입시 등록해주신 휴대전화 번호로 문자 안내해드리겠습니다. 마이페이지를 통해서 등록된 번호를 확인해주세요.</li><li data-list="bullet">이벤트에 참여하실 수 있는 줌 웨비나 접속 정보는 9월 8일 문자로 전달됩니다.</li><li data-list="bullet">모바일로 참여하실 경우 줌(Zoom) 앱을 미리 설치하시면 더 쉽게 접속하실 수 있습니다.</li><li data-list="bullet"> 이벤트 당일, 접속 오류 등의 이유로 고객 지원이 필요한 경우 다음 카카오채널 링크 (<a href="https://bit.ly/2QzozIB" target="_blank" style="background-color: transparent; color: rgb(0, 71, 178);">https://bit.ly/2QzozIB</a>)로 문의해 주세요. </li></ol><p><br></p><h4><strong style="color: inherit;">환불 기한</strong></h4><ol> <li data-list="bullet">모임 5일 전 오후 11시 59분까지 100% 환불, 이후에는 양도만 가능합니다.</li><li data-list="bullet"> 환불은 컬쳐플레이스 홈페이지의 '마이페이지' - '이벤트' 탭에서 하실 수 있습니다.</li><li data-list="bullet"> 모임의 참석 여부는 환불과 무관합니다.</li></ol><p><br></p><h4><strong style="color: inherit;">문의</strong></h4><ol> <li data-list="bullet"> 컬쳐플레이스 고객센터(contact@trevari.co.kr)로 메일을 보내주세요.</li><li data-list="bullet">이벤트를 양도하신 경우, 위 메일로 1) 이벤트 이름 2) 양도하시는 분의 성함과 연락처 3) 양도받으신 분의 성함과 연락처를 보내주세요.</li></ol>`;
          rerenderBody();
        }
      };

      switch (e.target.value) {
        case "선택안함":
          loadTemplate.nodata();
          break;
        case "모임":
          loadTemplate.meet();
          break;
        case "공지":
          loadTemplate.notice();
          break;
        case "이벤트":
          loadTemplate.event();
          break;
        default:
          break;
      }
    },
    []
  );

  return (
    <>
      {(category === "상품등록" || category === "공지사항") && (
        <div className="area_template_select">
          <p>템플릿 선택 : </p>
          <select onChange={handleSelectTemplate}>
            <option value="선택안함">선택안함</option>
            <option value="모임">모임</option>
            <option value="공지">공지</option>
            <option value="이벤트">이벤트</option>
          </select>
        </div>
      )}
      <QuillEditor mountBody={mountBody} />
    </>
  );
}
export default observer(QuillEditorView);
