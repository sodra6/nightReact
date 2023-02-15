import React from 'react';
import './light.css';

//버튼 한개를 표시하는 컴포넌트
function Room({name, light, toggle}) {

    console.log({name, light});

    return (
        <div className='box'>
            <button onClick={toggle} className={light?'on':'off'}>{name}</button>            
        </div>
    );
}

//컴포넌트 리렌더링을 방지 : props가 바뀌지 않았다면 리렌더링을 방지  - useCallback 과 잘 사용
//useEffect, useMemo, useCallback, React.memo() => 성능 최적화를 위해 사용
export default React.memo(Room);