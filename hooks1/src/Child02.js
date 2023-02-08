import React from 'react';

//자손컴포넌트는 key값을 내려받을 수 없음
function Child02({name, num}) {
    return (
        <li>
            멤버{num}: {name}
        </li>
    );
}

export default Child02;