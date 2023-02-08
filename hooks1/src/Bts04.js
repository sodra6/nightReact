import React from 'react';
import Child04 from './Child04';

function Bts04(props) {

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

    return (
        <div>
            { bts.map(bt => <Child04 key={bt.id} bt={bt}/> )}
        </div>
    );
}

export default Bts04;