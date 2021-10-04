import { createAction, handleActions } from "redux-actions";
import produce from 'immer';

const DECIDETYPE = 'result/DECIDETYPE';
const INITIALIZE = 'result/INITIALIZE';

export const decideType = createAction(DECIDETYPE, resultType =>resultType
);

export const initialize_result = createAction(INITIALIZE);

const initState ={
  resultType: {},
  typeList:[
    {
      type:'ISFJ',
      picPath: '',
      header: '열정! 열정! 열정!',
      celebrity: 'ESTP 김영남과',
      text: [
        '타고난 해결사로써 문제를 해결하는 능력이 타의 추종을 불허하나 동시에 말썽꾸러기로써 문제를 유발하는 능력 또한 타의 추종을 불허한 스타일이에요.',
        '삶을 즐기며 살며, 스릴을 좋아합니다.',
        '매우 빠르게 생각과 행동을 하고 현실적이기 때문에 감정적 이거나 우유부단한 사람에 대해 답답해 하는 경향이 있습니다.',
        '무대의 중심에 서는 것과 관심을 즐깁니다.',
      ],
    },
    {
      type:'ISTJ',
      picPath: '',
      header: '어? 이쁘다',
      celebrity: 'ESFP 최준과',
      text: [
        '자유로운 영혼의 연예인, 사교적인 유형',
        '사교적이고 활동적이며 수용력이 강하고 친절하며 낙천적입니다.',
        '주위의 사람이나 일어나는 일에 대하여 관심이 많으며 사람이나 사물을 다루는 사실적인 상식이 풍부합니다.',
        '때로는 수다스럽고, 진지함이 결여되거나 마무리를 등한시하는 경향이 있습니다.',
        '어떤 조직체나 공동체에서 밝고 재미있는 분위기 조성 역할을 잘합니다.',
      ],
    },
    {
      type:'INFJ',
      picPath: '',
      header: '지금까지 열심히 했잖아 내가, 어?!',
      celebrity: 'ENTP 쿨제이와',
      text: [
        '뜨거운 논쟁을 즐기는 변론가, 발명가형',
        '본인의 신념을 굽히면서까지 타인과의 관계를 우선시하지 않기에 겉으로 차갑고 무심해 보일 수도 있습니다.',
        '남들과 차별화되기를 원하기에, 남들이 하는 것에 맞춰가는 분야의 업무를 싫어합니다.',
        '플러팅 멘트를 서슴없이 뱉지만, 정말 이성적으로 좋아하는 이 앞에서는 다소 수다스러워지거나 과묵해지는 모습을 보입니다.',
        '많은 관심사를 가지고 있지만, 금방 싫증을 내기도 합니다.',
      ],
    },
    {
      type:'INTJ',
      picPath: './이택조/이택조.jfif',
      header: '어른이 이야기하면 임마!',
      celebrity: 'ENFP 이택조와',
      text: [
        '재기발랄한 활동가, 스파크형',
        '감정이 얼굴에 잘 들어나며, 새로운 사람 만나기를 좋아합니다.',
        '감동을 잘하고 눈물도 잘 흘립니다. 작은 일에도 감정의 기복이 심하기도 합니다.',
        '돈 개념이 희박하여 돈을 모으기 힘들 수 있습니다.',
        '사람을 기쁘게 해주는 타고난 능력이 있습니다.',
      ],
    },
    {
      type:'ISTP',
      picPath: '',
      header: '야, 왔으면 인사를 해',
      celebrity: 'ESTJ 배용남과',
      text: [
        '엄격한 관리자, 사업가형',
        '현실적, 구체적이고 사실적이며 활동을 조직화하고 주도해 나가는 것을 좋아합니다.',
        '타고난 지도자로서 일의 목표를 설정하고, 지시하고 결정하고 이행하는 능력이 뛰어납니다.',
        '또 미래의 가능성보다 현재의 사실을 추구하기 때문에 현실적이며 실용적인 면이 강합니다.',
        '겉보기에 무척 철저하고 엄격해 보일 수 있지만 본인 주변에 있는 사람들에게는 의리와 배려를 보여줍니다.',
      ],
    },
    {
      type:'ISFP',
      picPath: '',
      header: '중고차 필요할 땐? 차차차 차진석!',
      celebrity: 'ESFJ 차진석과',
      text: [
        '사교적인 외교관, 친선도모형',
        '타인의 인정을 받는 것에 아주 민감합니다.',
        '공감 능력이 좋습니다. 하지만 진심으로 공감되지 않더라도 적당히 상대방의 기분에 맞춰주는 가식적인 공감도 잘 해줍니다.',
        '정이 굉장히 많습니다. 좋아하는 사람들에게 애정을 쏟으며 선물하는 것을 좋아합니다.',
        '과도한 친절이 타인을 피곤하게 만들 경우도 있습니다.',
      ],
    },
    {
      type:'INFP',
      picPath: '',
      header: '안녕하세요! 뉴라이프 팀드림 디스트리뷰터 방재호입니다.',
      celebrity: 'ENTJ 방재호와',
      text: [
        '대담한 통솔자, 지도자형',
        '열성이 많으며 자기 주장이 강하면서 단호하고 지도력과 통솔력이 있습니다.',
        '너무 완벽주의를 추구하기 때문에 남이 비집고 들어갈 틈이 없을 수 있습니다.',
        '가까운 사람에게 헌신적이지만, 멀어지면 뒤돌아보지 않는 냉정한 모습이 있어요.',
        '항상 계획하고 실행하며, 인기 있는 사람보다 능력 있는 사람으로 여겨지길 원해요.',
      ],
    },
    {
      type:'INTP',
      picPath: '',
      header: '야 왔으면 인사를 해',
      celebrity: 'ESTJ 배용남과',
      text: [
        '엄격한 관리자, 사업가형',
        '현실적, 구체적이고 사실적이며 활동을 조직화하고 주도해 나가는 것을 좋아합니다.',
        '타고난 지도자로서 일의 목표를 설정하고, 지시하고 결정하고 이행하는 능력이 뛰어납니다.',
        '또 미래의 가능성보다 현재의 사실을 추구하기 때문에 현실적이며 실용적인 면이 강합니다.',
        '겉보기에 무척 철저하고 엄격해 보일 수 있지만 본인 주변에 있는 사람들에게는 의리와 배려를 보여줍니다.',
      ],
    },
    {
      type:'ESTP',
      picPath: '',
      header: 'If You Marry Me, Cooking is My Job.',
      celebrity: 'ISFJ 배용길과',
      text: [
        '용감한 수호자, 실용적인 조력가',
        '조용하고 차분하며 따뜻하고 친근합니다. 책임감과 인내력 또한 매우 강합니다.',
        '눈치가 상당히 빠르기 때문에 상대의 성향과 분위기를 파악하고 그에 맞게 행동할 수 있습니다.',
        '공감 능력이 뛰어나며, 눈물도 많지만 남들 앞에서 잘 보이지는 않습니다.',
        '한번 마음을 연 상대에겐 다정하고 헌신적으로 대하지만 상대가 이것을 이용하거나 당연하게 여기면 아주 냉정해지는 경향이 있어요.',
      ],
    },
    {
      type:'ESFP',
      picPath: '',
      header: 'If You Marry Me, Cooking is My Job.',
      celebrity: 'ISFJ 배용길과',
      text: [
        '용감한 수호자, 실용적인 조력가',
        '조용하고 차분하며 따뜻하고 친근합니다. 책임감과 인내력 또한 매우 강합니다.',
        '눈치가 상당히 빠르기 때문에 상대의 성향과 분위기를 파악하고 그에 맞게 행동할 수 있습니다.',
        '공감 능력이 뛰어나며, 눈물도 많지만 남들 앞에서 잘 보이지는 않습니다.',
        '한번 마음을 연 상대에겐 다정하고 헌신적으로 대하지만 상대가 이것을 이용하거나 당연하게 여기면 아주 냉정해지는 경향이 있어요.',
      ],
    },
    {
      type:'ENFP',
      picPath: '',
      header: '재벌 처음 봐요?',
      celebrity: 'INTJ 이호창과',
      text: [
        '용의주도한 전략가형',
        '아무에게 시간과 에너지를 투자하는 편은 아니므로, 단순히 지인에게는 미지의 인물로 보여요.',
        '실적으로 불가능해 보이는 도전에 대하여 확고한 모습을 보이며, 이 점은 타인들 시각에서도 존경스러워 보일 때가 많습니다.',
        '직업 생활에 높은 우선순위를 두면서 인간관계나 가족에 소홀한 경우가 종종 있어요.',
        '전체적으로 연애 감각이 몹시 둔한 편에 속해요.',
      ],
    },
    {
      type:'ENTP',
      picPath: '',
      header: '자..그.. 만나서... 반갑습니다.',
      celebrity: 'INFJ 광용쌤과',
      text: [
        '통찰력 있는 선지자, 예언자형',
        '인내심이 많고 통찰력과 직관력이 뛰어나며 화합을 추구합니다.',
        '독창성과 내적 독립심이 강하며, 확고한 신념과 열정으로 자신의 영감을 구현시켜 나가는 정신적 지도자들이 많습니다.',
        '모든 성격유형 중 가장 정의 내리기 어려운 유형이며, 가장 알 수 없는 성격 유형입니다.',
        '몽환적이며 신비로운 것을 좋아합니다.',
      ],
    },
    {
      type:'ESTJ',
      picPath: '',
      header: 'skrr~ suction krr!',
      celebrity: 'ISTP 임플란티드 키드와',
      text: [
        '논리적인 실용주의자, 백과사전형',
        '틀에 박히고 통념적인 생활을 싫어합니다.',
        '관심분야가 아니면 쳐다 보지도 않습니다.',
        '겉으로는 완만해 보이지만, 속으로는 완고한 편입니다.',
        '고집이 세고 주관이 뚜렷합니다.',
      ],
    },
    {
      type:'ESFJ',
      picPath: '',
      header: '어, 왔니?',
      celebrity: 'ISFP 혁이형과',
      text: [
        '호기심 많은 예술가, 성인군자형',
        '말없이 다정하고 온화하며 사람들에게 친절하고 상대방을 잘 알게 될 때까지 내면의 모습이 잘 보이지 않습니다.',
        '자유로움 추구 성향이 강하며 자신을 리드하는 것을 좋아하지 않습니다.',
        '내향형이지만 성격이 외향적으로 보일 수 있는데, 새로운 사람을 만나는것이 새로운 것을 배울 기회라고 이해하기 때문에 다른 내향형 유형에 비해 대담한 편입니다.',
        '평소에는 아무 생각이 없던 것도 갑자기 마음이 가기 시작하면 과감하게 불도저처럼 밀고 나가는 편입니다..',
      ],
    },
    {
      type:'ENFJ',
      picPath: '',
      header: '어, 왔니?',
      celebrity: 'ISFP 혁이형과',
      text: [
        '호기심 많은 예술가, 성인군자형',
        '말없이 다정하고 온화하며 사람들에게 친절하고 상대방을 잘 알게 될 때까지 내면의 모습이 잘 보이지 않습니다.',
        '자유로움 추구 성향이 강하며 자신을 리드하는 것을 좋아하지 않습니다.',
        '내향형이지만 성격이 외향적으로 보일 수 있는데, 새로운 사람을 만나는것이 새로운 것을 배울 기회라고 이해하기 때문에 다른 내향형 유형에 비해 대담한 편입니다.',
        '평소에는 아무 생각이 없던 것도 갑자기 마음이 가기 시작하면 과감하게 불도저처럼 밀고 나가는 편입니다..',
      ],
    },
    {
      type:'ENTJ',
      picPath: '',
      header: '하이 에이치아이~ 매드몬스터! 제이호야~',
      celebrity: 'INFP 제이호와',
      text: [
        '열정적인 중재자, 잔 다르크형',
        '이상주의자로서, 자신이 지향하는 이상에 대해서는 정열적인 신념을 지니고 있습니다.',
        '각 개인이 꼭 보편적인 길을 선택할 필요 없이 각자만의 길을 찾아가야 한다고 믿습니다.',
        '이해심 많고 적응력이 좋으며, 대체로 관대하고 개방적입니다.',
        '본인의 사적 영역을 침해받는 것을 극도로 싫어합니다. 매우 독립적인 성격입니다.',
      ],
    },
  ],
};  


const result = handleActions({
  [DECIDETYPE]: (state, action)=>{
    const resultObj = state.typeList.find((list)=>{
      return list.type === action.payload;
    })    
    return produce(state, draft =>({...draft, resultType:resultObj}))
  },
  [INITIALIZE]: () => produce(initState, draft=>draft),
},
  initState,  
);

export default result;