import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

//스타일 컴포넌트 이름 지정 - 첫글자를 대문자로 작성
const HeaderBlock = styled.header`
    position: fixed; top: 0; left: 0; z-index: 5000;
    width: 100%; height: 90px; padding: 0 60px;
    display: flex; align-items: center;
    h1{ margin-right: 50px; }
    h1 img{ 
        position: relative; top: 5px;
        height: 40px; 
    }
    ul{ display: flex; }
    li{ font-size: 20px; margin-right: 40px; }
    li:first-child a::before{
        content: url('https://www.tving.com/img/icon_menu_live.svg');
        position: relative; top: 3px;
        margin-right: 10px;
    }
`;


//header영역 프리젠테이셔널 컴포넌트
function Header() {
    return (
        <HeaderBlock>
            <h1><Link to="/"><img src="https://www.tving.com/img/tving-new-logo-pc.svg" alt="티빙로고" /></Link></h1>
            <ul>
                <li><Link to="/live">실시간</Link></li>
                <li><Link to="/tv">TV프로그램</Link></li>
                <li><Link to="/movie">영화</Link></li>
                <li><Link to="/paramount">파라마운트</Link></li>
            </ul>
        </HeaderBlock>
    );
}

export default Header;