import React, { useCallback, useEffect, useState } from 'react';
import Room from './Room';

/**
 * 
 * useCallback() : 재사용가능한 함수를 담아둔다.
 * 문법 : useCallback(함수, 의존성배열);
 * - props가 변경될때 사용
 */

//버튼을 모아주는 토탈 스위치 컴포넌트
function Callback() {
    //각각 상태를 담는 state 선언
    const [bathLight, setBathLight] = useState(false);
    const [kitchenLight, setKitchenLight] = useState(false);
    const [livingLight, setLivingLight] = useState(false);
    const [mainLight, setMainLight] = useState(false);

    //if clicked button true/false toggle operation
/*
    const toggleBath = () => {
        setBathLight(!bathLight);//! 부정연산자 토글 효과(true면 false를 false면 true를 반환) 
    }

    const toggleKitchenLight = () => {
        setKitchenLight(!kitchenLight)
    }  

    const toggleLivingLight = () => {
        setLivingLight(!livingLight)
    }

    const toggleMainLight = () => {
        setMainLight(!mainLight)
    }
 */
    const toggleBath = useCallback(() => {
        setBathLight(!bathLight); //! : 부정연산자 - true면 false를, false면 true를 반환
    },[bathLight]);

    const toggleKitchen = useCallback(() => {
        setKitchenLight(!kitchenLight);
    },[kitchenLight]);

    const toggleLiving = useCallback(() => {
        setLivingLight(!livingLight);
    },[livingLight]);

    const toggleMain = useCallback(() => {
        setMainLight(!mainLight);
    },[mainLight]);

    return (
        <div>
            <Room name='bathroom' light={bathLight} toggle={toggleBath}/>            
            <Room name='kitchen' light={kitchenLight} toggle={toggleKitchen}/>            
            <Room name='livingRoom' light={livingLight} toggle={toggleLiving}/>            
            <Room name='mainRoom' light={mainLight} toggle={toggleMain}/>            
        </div>
    );
}

export default Callback;