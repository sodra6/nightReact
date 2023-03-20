//1씩증가,1씩감소하는 프로그램 생성 - 액션, 액션생성함수, 리듀서를 저장하는 파일

//1. 액션 타입 : 명령의 타입을 지정 - 다른 리덕스모듈과 액션타입이 겹치는 것을 방지
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

//2. 액션 생성 함수 - type키를 꼭 작성해서 함수 구분
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

//3. 초깃값 지정 - 문자열, 숫자, 불, 객체, 배열 등 값으로 지정
const initialState = 0;

//4. 리듀서선언
export default function counter(state = initialState, action){
    switch (action.type){
        case INCREASE:
            return state + 1;
        case DECREASE:
            return state - 1;
        default:
            return state; //없는 명령이 들어가도 기존값으로 들어가게 처리
    }
}