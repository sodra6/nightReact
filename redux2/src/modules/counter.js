//Redux : 데이터를 관리하는 라이브러리
//1. props : 부모컴포넌트가 자손컴포넌트에게 내려주는 데이터
//2. state : 컴포넌트 자체가 사용하는 데이터
//3. context : 전역적으로 모든 자손컴포넌트에 전달하는 데이터
//4. redux : 서버에서 받은 데이터를 앱 전체에 전달하는 데이터

//Redux 주요 명칭
//1. Store : 데이터를 관리하는 장소(현재의 앱상태, reducer, 내장함수 등이 들어있는 저장소), 한앱당 한개만 생성
//2. connect() : 변경된 스토어의 값을 컴포넌트에 내려주는 함수(최근엔 redux Hooks를 통해서 사용)
//3. dspatch() : 컴포넌트가 action을 전달하는 함수
//4. Action : 값의 변화가 필요할때 주는 명령, 리듀서한테 명령을 전달
//5. Reducer : 변화를 일으키는 함수

//Redux module : Action 타입, Action 생성 함수, Reducer등의 js파일을 의미

//Action 타입 선언 - 다른 변수와 겹칠까봐 상수 처럼 대문자로 선언
//Action 이름앞에 보통 파일명을 기입하는것이 관례
//다른 액션의 모듈과 켭치는것을 방지하기 위해서
const SET_DIFF = "counter/SET_DIFF"; //증감될 숫자를 처리
const INCREASE = "counter/INCREASE"; //1씩 증가하는 명령
const DECREASE = "counter/DECREASE"; // 1씩 감소하느 명령

//Action 생성 함수 - export를 통해 각가 내보내기
/* 
    {
        type: "VALUE", //필수요소
        ex01 : "값1",
        ex02 : "값2",
        ex03 : "값3",
    }
*/
export const setDiff = (diff) => ({
  type: SET_DIFF,
  diff,
});
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

//state 초기상태 선언
const initialState = {
  number: 0, //버튼에 의해 증감할 숫자
  diff: 1, //증감할 숫자 상황
};

//reducer
export default function counter(state = initialState, action) {
  switch (action.type) {
    case SET_DIFF:
      return {
        ...state,
        diff: action.diff,
      };
    case INCREASE:
      return {
        ...state,
        number: state.number + state.diff,
      };
    case DECREASE:
      return {
        ...state,
        number: state.number - state.diff,
      };

    default:
      return state; //Redux는 기본값을 state값으로 배당
  }
}
