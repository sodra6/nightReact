import React from 'react';

//학생 한명 데이터를 표시할 컴포넌트
function Student({student, onRemove}) {
    return (
        <div>
            <b>name : {student.name}</b>&nbsp; / &nbsp; 
            <b>age : {student.age}</b>&nbsp; / &nbsp; 
            <b>email : {student.email}</b>&nbsp; / &nbsp; 
            <button >변경</button>&nbsp; / &nbsp;
            <button onClick={() => onRemove(student.id)}>삭제</button>
            <hr />
        </div>
    );
}

export default Student;