import React, { useRef } from 'react';
import Bts from './Bts';

//useRef : 특정 DOM을 선택할 때 사용
//useRef 사용시 컴포넌트의 이전 상태값을 추적할 수 있다. => 리렌더링이 되더라도 값을 유지할 수 있기 때문

function App() {



  const bts = [
    {
        id: 'st001',
        name: '김남준',
        age: 28,
        email: 'rm@gmail.com'
      },
      {
        id: 'st002',
        name: '김석진',
        age: 30,
        email: 'jin@gmail.com'
      },
      {
        id: 'st003',
        name: '민윤기',
        age: 29,
        email: 'suga@gmail.com'
      },
      {
        id: 'st004',
        name: '정호석',
        age: 28,
        email: 'j-hope@gmail.com'
      },
      {
        id: 'st005',
        name: '박지민',
        age: 25,
        email: 'jm@gmail.com'
      },
      {
        id: 'st006',
        name: '김태형',
        age: 25,
        email: 'v@gmail.com'
      },
      {
        id: 'st007',
        name: '진정국',
        age: 23,
        email: 'jg@gmail.com'
      },
  ];

  //key(id)에 사용될 고정 변수를 선언
  const nextId = useRef(8); //현재 7명이니까 다음번엔 8번부터 들어갈 예정이라서(인자에 들어가는게 기본값)

  console.log(nextId);
  const onCreate = () => { 
    //새로운 배열 데이터를 추가해주는 함수
    
    //맨마지막에 번호 변경
    nextId.current += 1;
  }

  return (
    <div>
        <Bts bts={bts}/>
    </div>
  );
}

export default App;