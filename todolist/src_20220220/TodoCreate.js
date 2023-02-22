import React from "react";
import { MdAdd } from "react-icons/md";
import "./todocreate.css";

function TodoCreate(props) {
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
