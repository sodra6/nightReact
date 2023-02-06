import React from 'react'; //react plugin

/*
    컴포넌트 : 재사용 가능한 UI, 각각의 js파일
*/


/*
    함수컴포넌트 : 컴포넌트명의 첫글자는 대문자의 관례
    자손 컴포넌트
*/
function Header(props) {        
    return (
        <div>       
            <h1>Here is Header</h1>
        </div>
    );      
}

export default Header;