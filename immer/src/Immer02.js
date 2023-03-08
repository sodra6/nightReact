import React from "react";
import produce from "immer"; //produce함수 불러오기

//immer라이브러리를 쓰지않고 불변성을 지켜서 데이터 관리
function Immer02() {
  const idols = {
    bts: [
      {
        id: 1,
        name: "김석진",
        debut: "2013년",
      },
      {
        id: 2,
        name: "김태형",
        debut: "2013년",
        personal: [
          {
            pro1: "꽃미남브로맨스",
            pro2: "화랑드라마",
          },
        ],
      },
    ],
    astro: "데이터 추가 예정",
  };

  //bts중 id가 2번 멤버에 새로운 이력을 추가 : { pro03: "서진이네" }
  const nextState = produce(idols, (draft) => {
    const bt2 = draft.bts.find((bt) => bt.id === 2);
    bt2.personal.push({ pro3: "서진이네" });
  });
  //immer를 사용하면 자바스크립트 연산자와 메서드를 그대로 사용해도 알아서 state값을 업데이트 해주는 라이브러리
  //장점은 코드의 가독성이 매우좋다는점
  //단점은 코드가 무거워짐(리렌더링속도가 매우 느림)

  //produce(데이터,draft) : 첫번째 매개변수는 수정하고 싶은 상태값, 두번째 매개변수는 어떻게 업데이트하고싶은지 함수로 정의
  //두번째 매개변수는 무조건 알아서 불변성을 지켜줌(자바스크립트 문법에만 맞으면 무적권)
  console.log(idols);
  console.log(nextState);
  return (
    <div>
      <h3>이름 : {nextState.bts[1].name}</h3>
      <h3>
        기존방송 : {nextState.bts[1].personal[0].pro1},
        {nextState.bts[1].personal[0].pro2}
      </h3>
      <h3>새방송 : {nextState.bts[1].personal[1].pro3}</h3>
    </div>
  );
}

export default Immer02;
