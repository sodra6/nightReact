import React, { useState } from "react";
import "./todocreate.css";
import { MdAdd } from "react-icons/md";
import { useTodoDispatch, useTodoNextId } from "./TodoContext";

//새로운 할일을 등록하는 컴포넌트
function TodoCreate() {
  //input에 적히는 value값
  const [value, setValue] = useState("");
  //입력 form의 visible 여부
  const [oepn, setOpen] = useState(false);

  const dispatch = useTodoDispatch();
  const nextId = useTodoNextId();
  return (
    <>
      <div className="formWrap">
        <form>
          <input type="text" placeholder="할 일을 입력 후, Enter를 누르세요." />
        </form>
      </div>
      <div className="circleBox">
        <MdAdd />
      </div>
    </>
  );
}

export default TodoCreate;
