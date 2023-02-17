import React from 'react';
import styles from './test.module.css';

//CSS Module : 컴포넌트가 많으면 className이 중복될 수 있는데, 그것을 방지하기 위해 사용하는 모듈
//외부 CSS 모듈 파일명 : 파일명.module.css
function Css4() {
    return (
        <div>
            <h1 className={styles.title01}>리액트 테스트1,</h1>
            <h2 className={styles.title02}>리액트 테스트2,</h2>
        </div>
    );
}

export default Css4;