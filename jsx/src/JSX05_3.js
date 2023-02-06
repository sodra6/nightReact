import React from 'react';

//3. if문 렌더링 - 즉시 실행함수에 작성해야 처리, 출력할 값 앞에 return 키워드 작성
function JSX05_3(props) {
    const test = prompt("점수입력",'0~100');
    /* 
        즉시실행 함수는 이름이 없음
        - ex
        (function(){})();
        (()=>{})();
    */
    return (
        <div>
            {
                (()=>{
                    if(test>=80) return <h1>합격</h1>
                    else return <h1>불합격</h1>
                })()
            }
        </div>
    );
}

export default JSX05_3;