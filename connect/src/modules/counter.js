//리덕스(Redux) : 데이터를 관리하는 라이브러리
//1. props : 부모컴포넌트가 자손컴포넌트에 내려주는 값
//2. state : 컴포넌트 자체가 사용하는 값
//3. context : 전역적으로 모든 자손컴포넌트에 전달하는 데이터
//4. redux : 서버에서 받은 데이터를 앱전체에 전달

//리덕스 중요 명칭
//1. Store : 현재의 앱상태, 리듀서, 내장함수이 들어있는 저장장소(한 앱당 한개만 생성)
//2. connect() : 변경된 스토어값을 컴포넌트에 내려주는 함수(최근에는 Hooks를 통해서 사용)
//3. dispatch() : 컴포넌트가 action을 전달하는 함수
//4. Action : 값의 변화가 필요할 때 발생시키는 명령, 리듀서한테 명령을 전달
//5. Reducer : 변화를 일으키는 함수


//리덕스모듈 : 액션타입, 액션생성함수, 리듀서등의 js파일을 의미


//액션타입선언 - 다른 변수와 겹치는 것을 방지하기 위해 상수처럼 대문자 처리
//액션이름 앞에 파일을 넣는 것이 관례
//다른 액션의 모듈과 겹치는 것을 방지
const SET_DIFF = 'counter/SET_DIFF'; //증가될 숫자를 처리
const INCREASE = 'counter/INCREASE'; //1씩 증가하는 명령
const DECREASE = 'counter/DECREASE'; //1씩 감소하는 명령

//액션생성함수 - export를 통해 각각 내보냄
/*
    {
        type: "VALUE", //필수요소
        ex01: "값1",
        ex02: "값2"
    }
*/
export const setDiff = diff => ({
    type: SET_DIFF, 
    diff
});
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

//state 초기 상태 선언
const initialState = {
    number: 0, //버튼에 의해 증감할 숫자
    diff: 1 //증감할 숫자 상황 - 1씩 증가, 2씩 증가
}

//reducer
export default function counter(state = initialState, action){
    switch (action.type) {
        case SET_DIFF:
            return {
                ...state,
                diff: action.diff
            }
        case INCREASE:
            return {
                ...state,
                number: state.number + state.diff
            }
        case DECREASE:
            return {
                ...state,
                number: state.number - state.diff
            }
        default:
            return state; //리덕스는 기본값을 state로 배당
    }
}