import React from "react";
import Todoes from "../components/Todoes";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, toggleTodo } from "../modules/todoes";

function TodoesContainer() {
  //useSelector()
  const todoes = useSelector((state) => state.todoes);

  //useDispatch 처리
  const dispatch = useDispatch();
  const onCreate = (text) => dispatch(addTodo(text));
  const onToggle = (id) => dispatch(toggleTodo(id));

  return (
    <div>
      <Todoes todoes={todoes} onCreate={onCreate} onToggle={onToggle} />
    </div>
  );
}

export default TodoesContainer;
