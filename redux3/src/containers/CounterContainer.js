import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease, setDiff } from '../modules/counter'; //액션함수 불러옴

//컨테이너 컴포넌트 : 리덕스의 스토어 상태를 조회하거나, action을 dispatch할 수 있는 컴포넌트
//보통 HTML요소는 사용하지 않고, 다른 프레젠테이셔널 컴포넌트를 불러와서 사용
//리덕스 창시자가 만들었던 관례고, 굳이 두개를 나눠서 작업하진 않아도 된다고 명시되어 있음

function CounterContainer() {
    /* useSelector : 리덕스의 스토어 데이터 조회하는 Hook - store.getState()와 결과는 동일 */
    const { number, diff } = useSelector(state => ({
        number: state.number,
        diff: state.diff
    }));

    //dispatch함수 만들기
    const dispatch = useDispatch();
    //Counter컴포넌트에 Props로 내려주기 위해 dispatch하는 함수를 생성
    const onIncrease = () => dispatch(increase());
    const onDecrease = () => dispatch(decrease());
    const onSetDiff = (diff) => dispatch(setDiff(diff));



    return (
        <div>
            <Counter
                number={number}
                diff={diff}
                onIncrease={onIncrease}
                onDecrease={onDecrease}
                onSetDiff={onSetDiff}
            />
        </div>
    );
}

export default CounterContainer;