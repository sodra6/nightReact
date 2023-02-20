import React from "react";
import TodoItem from "./TodoItem";
import "./todolist.css";
//리스트를 묶어서 한번에 처리 - map
function TodoList() {
  return (
    <div className="todolistbox">
      <TodoItem />
    </div>
  );
}

export default TodoList;
