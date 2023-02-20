import React from "react";
import "./todoitem.css";
//react-icons 라이브러리 중 아이콘 2개 불러옴
import { MdDone, MdDelete } from "react-icons/md";

//각각 할일 정보를 표시
//체크박스 + 할일 + hover
function TodoItem(props) {
  return (
    <div className="todoitembox">
      <div className="checkcircle">
        <MdDone />
      </div>
      <p>할일 구현</p>
      <div className="remove">
        <MdDelete />
      </div>
    </div>
  );
}

export default TodoItem;
