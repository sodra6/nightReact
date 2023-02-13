import React, { useRef, useState } from 'react';
import AddStudent from './AddStudent';
import Student from './Student';

function StudentList() {
    //기존 학생 데이터를 담는 배열 -> 변화가 되는 state로 변경
    const [students, setStudents] = useState([//처음 기본값을 지정
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
    ]);

    //다음 key값을 지정하는 변수 선언
    const nextId = useRef(4);

    //데이터 추가 입력폼에서 사용할 state 관리
    const [inputs, setInputs] = useState({
        name : '',
        age : '',
        email : '',
    });

    //비구조화할당 - state값을 각각 변수에 담기
    const {name, age, email} = inputs;

    //데이터가 변경되는 setState를 처리하는 함수선언
    const onDataChange = (e) => {
        //e.target.name과 e.target.value를 각각 비구조화할당 처리
        const {name, value}= e.target;

        //state변경
        setInputs({
            ...inputs, //기존에 안바뀌는 값을 가져오는 나머지 패턴
            [name] : value //객체 내부에서 밖의 변수를 속성명으로 사용할때는 [변수명] 사용
        });
    }

    //배열값을 추가하는 state함수 선언
    //데이터 추가 방법1 : setState([...기본배열명, 추가값]);
    //데이터 추가 방법2 : setState(배열변수명.concat(새로추가될값));
    const onAdd = () => {
        //새로운 학생 데이터를 담는 객체생성
        //es6문법 속성명과 값이 같으면 속성명만 작성
        const student = {
            id : 'st00'+nextId.current,
            name,
            age,
            email 
        }
        //setStudents([...students, student]);
        setStudents(students.concat(student));


        //입력상자들 값은 다시 비우기
        setInputs({name : '', age:'', email:''});
        nextId.current += 1;//다음학생을 추가할 수도 있으니 id값 1 증가
    }

    //데이터 삭제, filter() : 배열 값 중에 조건에 맞는 배열만 반환하는 메서드
    const onRemove = (id) => {
        //id 매개변수가 아닌 데이터만 추출 새로운 배열 생성
        setStudents(students.filter(student => student.id !== id));
    }    
    return (
        <div>
            <AddStudent 
                name={name} age={age} email={email} onDataChange={onDataChange} onAdd={onAdd}
            />
            {students.map((student)=><Student key={student.id} student={student} onRemove={onRemove}/>)}            
        </div>
    );
}

export default StudentList;