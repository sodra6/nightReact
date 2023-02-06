import React, { useState } from 'react';

function Submit(props) {
    const [name, setName] = useState('');

    const onDataChange = (e) => {
        setName(e.target.value);
    }

    const onDataSubmit = (e) => {
        //name값이 없다면 이벤트 금지, 상태값으로 분기처리 가능
        if(!name) e.preventDefault();
    }
    return (
        <form action="/#" onSubmit={onDataSubmit}>
            입력 : 
            <input 
                type='text'
                value={name}
                onChange={onDataChange}
            />
            <button type='submit'>Send Data</button>
        </form>
    );
}

export default Submit;