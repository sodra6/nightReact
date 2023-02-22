import React from 'react';
import './todoheader.css'

//오늘 날짜요일표시, 할일이 몇개 남았는지 표시
function TodoHeader(props) {
    const today = new Date(); //오늘 날짜 시간을 담는 변수
    const week = ['일','월','화','수','목','금','토'];
    const dateString = {
        year : today.getFullYear(),
        month : today.getMonth()+1,
        date : today.getDate(),
        day : today.getDay()
    }
    const {year, month, date, day} = dateString;

    return (
        <div className='todoheader'>
            <h1>{year}년 {month}월 {date}일</h1>
            <h2>{week[day]}요일</h2>
            <p>할일 2개 남음</p>
        </div>
    );
}

export default TodoHeader;