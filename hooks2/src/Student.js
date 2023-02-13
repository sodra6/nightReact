import React, { useState } from 'react';
import UpdateStudent from './UpdateStudent';

//학생 한명 데이터를 표시할 컴포넌트
function Student({student, onRemove, onDataChange, onSaveClick}) {

    //상태값에 따라 수정폼 display toggle
    const [swith, setSwith] = useState(0);

    const onUpdateClick = () => {
        if(swith ===0){
            setSwith(1);
        }
    }

    return (
        <div>
            <b>name : {student.name}</b>&nbsp; / &nbsp; 
            <b>age : {student.age}</b>&nbsp; / &nbsp; 
            <b>email : {student.email}</b>&nbsp; / &nbsp; 
            <button onClick={onUpdateClick}>변경</button>&nbsp; / &nbsp;
            <button onClick={() => onRemove(student.id)}>삭제</button>
            {
                swith === 1 && 
                <UpdateStudent student={student} onDataChange={onDataChange} onSaveClick={onSaveClick} setSwith={setSwith}/>    
            }
            <hr />
        </div>
    );
}

export default Student;