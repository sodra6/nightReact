import React from "react";
import "./App.css";
import TodoBox from "./TodoBox";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";
import TodoCreate from "./TodoCreate";
import { TodoProvider } from "./TodoContext"; //임포트 모듈화, 변수나 함수를 가져올땐 {}로 감싸서 import

//명령확인 구조
//1. TodoHeader : 할일 개수 관리
//2. TodoCreate : 할일 생성
//3. TodoList => TodoItem : 배열 관리, 배열 제거, 토글 기능
// 전부 전역관리해서 가져다 쓰고싶은 컴포넌트가 가져다 쓰도록 처리

//Todo관련 Context들을 모든 컴포넌특라 사용할 수 있도록 TodoProvider를 불러와서 감싸줌
function App() {
  return (
    <TodoProvider>
      <TodoBox>
        <TodoHeader />
        <TodoList />
        <TodoCreate />
      </TodoBox>
    </TodoProvider>
  );
}

export default App;
