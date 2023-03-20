//미들웨어 생성
//미들웨어는 누구나 만들 수 있지만, 보통 잘 만들어진 미들웨어 라이브러리를 많이 씀

//콘솔창에 action과 state값을 출력하는 미들웨어 생성

//미들웨어 템플릿 코드 : 개발자 생성해 놓은 코드
/*
    const 미들웨어명 = store => next => action => {

    }
*/
/*
    function 미들웨어명(store){
        return function(next){
            return function(action){
                //리듀서 실행 이전 코드
                const 변수명 = next(action);
                //리듀서 실행 이후 코드
            }
        }
    }
*/

//next매개변수 : 액션을 다음 미들웨어에게 전달하는 함수. 
//next(action); 로 전달
//다음 미들웨어가 없다면 리듀서한테 액션 전달
//action : 현재 처리하고 있는 액션 객체

const testLogger = store => next => action => {
    console.log(action); //리듀서에 명령을 전달하기 전에 콘솔 출력

    const result = next(action); //다음 미들웨어 (혹은 리듀서)에 액션 전달

    //리듀서한테 명령이 전달된 후(데이터 변경)
    console.log('\t', store.getState()); //상태값을 들여쓰기 해서 호출

    return result; //여기서 반환하는 값은 dispatch 결과물
}

export default testLogger;