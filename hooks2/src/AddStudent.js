import React from 'react';

//학생데이터 추가폼
function AddStudent({name, age, email, onDataChange, onAdd}) {

    const styling = {
        width : '620px',
        margin : '20px',
        padding : '10px',
        border : '3px solid black'
    }
    return (
        <div style={styling}>
            <input type='text' name="name" value={name} onChange={onDataChange} placeholder='이름입력'/>&nbsp;&nbsp;
            <input type='text' name="age" value={age} onChange={onDataChange} placeholder='나이입력'/>&nbsp;&nbsp;
            <input type='text' name="email" value={email} onChange={onDataChange} placeholder='이메일입력'/>&nbsp;&nbsp;
            <button onClick={onAdd}>추가</button>
        </div>
    );
}

export default AddStudent;