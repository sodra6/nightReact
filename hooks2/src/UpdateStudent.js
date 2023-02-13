import React from 'react';

function UpdateStudent({student, onDataChange, onSaveClick, setSwith}) {
    const styling = {
        width : '640px',
        margin : '20px',
        padding : '10px',
        border : '3px solid green'
    }

    //변경폼 숨기기
    const onSwithChange = () => {
        setSwith(0);
    }

    return (
        <div style={styling}>
            <input type='text' name="name" placeholder='이름입력' onChange={onDataChange}/>&nbsp;&nbsp;
            <input type='text' name="age" placeholder='나이입력' onChange={onDataChange}/>&nbsp;&nbsp;
            <input type='text' name="email" placeholder='이메일입력' onChange={onDataChange}/>&nbsp;&nbsp;
            <button onClick={() => {
                onSaveClick(student.id);
                onSwithChange();
            }}>저장</button>            
        </div>
    );
}

export default UpdateStudent;