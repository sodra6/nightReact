import React from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import Counter from "../components/Counter";
import { increase, decrease, setDiff } from "../modules/counter"; //액션함수 불러옴

//컨테이너 컴포넌트 : 리덕스의 스토어 상태를 조회하거나, action을 dispatch할 수 있는 컴포넌트
//보통 HTML요소는 사용하지 않고, 다른 프레젠테이셔널 컴포넌트를 불러와서 사용
//리덕스 창시자가 만들었던 관례고, 굳이 두개를 나눠서 작업하진 않아도 된다고 명시되어 있음

function CounterContainer() {
  /* useSelector : 리덕스의 스토어 데이터 조회하는 Hook - store.getState()와 결과는 동일 */
  /* useSelector : store의 상태값(state)를 반환해주는 역할, store값이 바뀌면 컴포넌트를 리렌더링 처리 */
  //useSelector(state선택, equalityFn)
  //equalityFn : 이전값과 다음값을 비교하여 true가 나오면 리렌더링을 하지않고 false가 나오면 리렌더링
  //상태값은 counter.js와 todoes.js에서도 호출
  /*   const { number, diff } = useSelector((state) => ({
    //state중 module명을 정확히 선택해야 한다
    number: state.counter.number,
    diff: state.counter.diff,
  })); */

  //최적화 작업1 : 여러번 useSelector를 처리하면 리렌더링이 자주되는걸 방지할수 있음
  //const number = useSelector((state) => state.counter.number);
  //const diff = useSelector((state) => state.counter.diff);

  //최적화 작업2 : shallowEqual 함수 추가(react-redux 내장함수)
  const { number, diff } = useSelector(
    (state) => ({
      number: state.counter.number,
      diff: state.counter.diff,
    }),
    shallowEqual
  );

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
