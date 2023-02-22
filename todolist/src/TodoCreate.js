import React, { useState } from "react";
import "./todocreate.css";
import { MdAdd } from "react-icons/md";
import { useTodoDispatch, useTodoNextId } from "./TodoContext";

//새로운 할일을 등록하는 컴포넌트
function TodoCreate() {
  //input에 적히는 value값
  const [value, setValue] = useState("");
  //입력 form의 visible 여부
  const [open, setOpen] = useState(false);

  const dispatch = useTodoDispatch();
  const nextId = useTodoNextId();

  //버튼 클릭시 토글
  const onToggle = () => setOpen(!open);
  //입력 from의 데이터 변경
  const onChange = (e) => setValue(e.target.value);
  //Enter click onSubmit
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "CREATE",
      todo: { id: nextId.current, text: value, chk: false },
    });
    setValue("");
    setOpen(false);
    nextId.current += 1;
  };
  return (
    <>
      <div className={open ? "formWrap active" : "formWrap"}>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="할 일을 입력 후, Enter를 누르세요."
            value={value}
            onChange={onChange}
          />
        </form>
      </div>
      <div className="circleBox" onClick={onToggle}>
        <MdAdd />
      </div>
    </>
  );
}

export default TodoCreate;
