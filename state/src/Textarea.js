import React, { useState } from 'react';

function Textarea(props) {
    //여러줄 입력상자(textarea)의 값관리
    //1. HTML문법
    //<textarea>텍스트컨텐츠</textarea>
    //2. JSX문법 - 단일태그 가능
    //<textarea value="값" />

    //상태값 선언
    const [data, setData] = useState('내용을 입력하세요');

    //상태값의 변경을 담는 함수를 선언
    const onChangeData = (e) =>{
        setData(e.target.value);
    }

    const onResetData = ()=>{
        setData('내용을 입력하세요');
    }
    return (
        <form>
            <textarea 
                onChange={onChangeData}
                row="10"
                value={data}
                autoFocus 
            />
            {/* 조건부 렌더링 */}
            {data === '내용을 입력하세요' || <h3>값 : {data}</h3>}
            <hr />
            {data === '내용을 입력하세요' || <button onClick={onResetData} type='button'>DATA RESET</button>}
        </form>
    );
}

export default Textarea;