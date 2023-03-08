//할일 관련 모듈 : action 타입, action 생성함수, reducer 생성

//action 타입 선언
//action의 이름을 접두사로 작성, 다른 module과 action명이 중복되는것을 방지
const ADD_TODO = "todoes/ADD_TODO";
const TOGGLE_TODO = "todoes/TOGGLE_TODO";

//action 생성 함수
let nextId = 1; //할일이 처음들어간다고 가정
export const addTodo = (text) => ({
  type: ADD_TODO,
  todo: {
    id: nextId++,
    text,
  },
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  id,
});

//초기상태 선언
const initialState = [
  //reducer의 초기상태는 꼭 객체타입일 필요는 없음
  //배열, 문자열, 숫자, 논리형 모두 상관없음
  /*
    {
      id: 1,
      text: "할일텍스트",
      check: false,
    },
   */
];

//reducer 함수 선언
export default function todoes(state = initialState, action) {
  switch (action.type) {
    case "ADD_TODO":
      console.log(state);
      return state.concat(action.todo);
    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.id //id가 일치하면
          ? { ...todo, check: !todo.check }
          : todo
      );

    default: //redux에서는 기본값을 state로처리
      return state;
  }
}
