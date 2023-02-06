import React from 'react';

//합격자 명단만 출력
function Condition2({name, score}) {
    return (
        <div>
            {
                score >= 80 && <h2> {name} : 합격 </h2>
            }
        </div>
    );
}

export default Condition2;