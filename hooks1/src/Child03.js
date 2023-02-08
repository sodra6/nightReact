import React from 'react';

//자손컴포넌트는 key값을 내려받을 수 없음
function Child03({name, age, email}) {
    return (
        <>
            <h4>이름 : {name}</h4>
            <h4>나이 : {age}</h4>
            <h4>메일 : {email}</h4>
            <hr/>
        </>
    );
}

export default Child03;