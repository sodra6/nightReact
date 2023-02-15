import React, {useEffect, useState} from 'react';

function Effect2(props) {
    //count, 2배 값이 자동으로 처리되는 컴포넌트
    const [count, setCount] = useState(0);
    const [double, setDouble] = useState(0);

    useEffect(()=>{setDouble(count*2)},[count]);

    return (
        <div>
            <p>count 값 : {count}</p>
            <button onClick={()=> setCount((c) => c+1)}>+</button>
            <p>count 두배 : {double}</p>
        </div>
    );
}

export default Effect2;