import React, { useState } from 'react';

function Select(props) {
    //select value값 관리
    //1. HTML문법
    /**
     * 
     *  <select>
     *      <option value="값">텍스트</option>
     *  </select>
     *  
     *  JS
     *  const select = document.querySelect('select');
     *  select.value; 
     */

    //2. JSX문법
    /**
     *  <select value={상태변수}>
     *      <option vlaue="값">텍스트</option>
     *  </select>
     * 
     */

    let [menu, setMenu] = useState('');

    //값을 변경하는 함수

    const onDataChange = (e) => {
        setMenu(e.target.value);
    }

    return (
        <form>
            <h3>저녁메뉴를 고르세요.</h3>
            <select 
                value={menu}
                onChange={onDataChange}
            >
                <option value="치킨">치킨</option>
                <option value="파전">파전</option>
                <option value="곱창">곱창</option>
                <option value="삼겹살">삼겹살</option>
            </select>
            <h4>선택메뉴 : {menu}</h4>
        </form>
    );
}

export default Select;