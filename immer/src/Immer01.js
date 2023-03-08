import React from "react";

//immer라이브러리를 쓰지않고 불변성을 지켜서 데이터 관리
function Immer01() {
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
  const nextState = {
    ...idols,
    bts: idols.bts.map((bt) =>
      bt.id === 2
        ? { ...bt, personal: bt.personal.concat({ pro3: "서진이네" }) }
        : bt
    ),
  };
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

export default Immer01;
