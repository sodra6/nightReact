import React from 'react';

//비구조화할당
function Props({name, age}) {
    //JSX문법
    //1. 최상위 태그로 닫아줘야함 <div></div>, <></>, <Fragment></Fragment>
    //2. 닫는 태그로 작업 ex) <시작태그></종료태그> <태그명/>
    //3. {} - 표현식 자바스크립트 문법 사용 가능
    //4. 표현식 내부에는 여러줄 주석만 사용 가능 /** */
    //5. 조건부 렌더링 : 삼항연산자, 짧은 조건문, if문은 즉시실행 함수로 실행
    //6. css문법을 객체방식으로 호출
    //7. 외부스타일시트의 클래스 호출시 <태그명 clssName="">
    
    //props : 부모컴포넌트가 자손컴포넌트에게 내려주는 값

  return (
    <div>
        <h3>환영합니다. {name} 님</h3>
        <h4>나이 : {age}</h4>
        <hr />
    </div>
  );
}

export default Props;
