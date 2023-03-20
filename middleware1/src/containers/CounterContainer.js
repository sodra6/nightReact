import React from 'react';
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/counter';
import { useSelector, useDispatch } from 'react-redux';


//컨테이너 컴포넌트 : 실제적으로 모듈에서 데이터를 받아오는 컴포넌트, 가져온 데이터를 프리젠테이션 컴포넌트에 내려줌
function CounterContainer() {
    //1. state 데이터 조회
    const number = useSelector(state => state.counter);

    //2. dispatch - 액션생성함수 가져오기
    const dispatch = useDispatch();

    //3. 각각 명령을 담을 함수 생성
    const onIncrease = () => {
        dispatch(increase());
    }
    const onDecrease = () => {
        dispatch(decrease());
    }

    return (
        <div>
            <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
        </div>
    );
}

export default CounterContainer;