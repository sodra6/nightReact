//bts데이터를 관리할 리덕스 모듈

//Promise를 다루는 리덕스 모듈을 다룰 땐 다음 사항을 고려
//1. Promise의 시작, 성공, 실패했을때, 다른 액션을 디스패치해줘야함
//2. 각 Promise마다 thunk함수를 만들어 줘야함
//3. reducer에서 액션에 따라 로딩중, 결과 에러 상태를 변경해 줘야함

import * as btsAPI from '../api/bts';// api/bts.js의 모든함수를 불러옴
//import * as 대신할 이름 from '경로'; //모든 함수를 대신할 이름 작성
import { reducerUtils, createPromise } from '../lib/asyncUtils';

//액션타입작성
//방탄소년단 여러명 조회하기
const GET_BTS = 'GET_BTS'; //데이터 요청 시작
const GET_BTS_SUCCESS = 'GET_BTS_SUCCESS'; //데이터 요청 성공
const GET_BTS_ERROR = 'GET_BTS_ERROR'; //데이터 요청 실패

//방탄소년단 한명 조회하기
const GET_BT = 'GET_BT'; //데이터 요청 시작
const GET_BT_SUCCESS = 'GET_BT_SUCCESS'; //데이터 요청 성공
const GET_BT_ERROR = 'GET_BT_ERROR'; //데이터 요청 실패

//액션생성함수 작성
//thunk를 사용할 떄, 꼭 모든 액션들에 대한 액션생성함수를 만들진 않는다.
/* 
export const getBts = () => async dispatch => {
    dispatch({type:GET_BTS}); //요청 시작
    try {
       const bts = await btsAPI.getBts();//API호출
       dispatch({type:GET_BTS_SUCCESS, bts})//성공
    } catch (e) {
        dispatch({type:GET_BTS_ERROR,error:e})//실패
    }
}

export const getBt = (id) => async dispatch => {
    dispatch({type:GET_BT}); //요청 시작
    try {
       const bt = await btsAPI.getBtId(id);//API호출
       dispatch({type:GET_BT_SUCCESS, bt})//성공
    } catch (e) {
        dispatch({type:GET_BT_ERROR,error:e})//실패
    }
} 
*/

//위에 코드를 아래처럼 작성가능
export const getBts = createPromise(GET_BTS, btsAPI.getBts); 

export const getBt = createPromise(GET_BT, btsAPI.getBtId);

//초기값 배당
//반복되는 코드를 initial() 함수를 사용해서 리팩토링
const initialState = {
/*
    bts : {
        loading: false,
        data: null,
        error : null
    },
    bt : {
        loading: false,
        data: null,
        error : null
    } 
*/

    //위에 코드를 아래처럼 작성가능
    bts : reducerUtils.initial(),
    bt : reducerUtils.initial()
}

//reducer 생성
export default function bts(state=initialState, action){
/*
    switch (action.type) {
        case GET_BTS:
            return{
                ...state,
                data:{
                    loading:true,
                    data:null,
                    error:null
                }
            }        
        case GET_BTS_SUCCESS:
            return{
                ...state,
                data:{
                    loading:false,
                    data:action.dts,
                    error:null
                }
            }        
        case GET_BTS_ERROR:
            return{
                ...state,
                data:{
                    loading:false,
                    data:null,
                    error:action.error
                }
            }        
        case GET_BT:
            return{
                ...bt,
                data:{
                    loading:true,
                    data:null,
                    error:null
                }
            }        
        case GET_BT_SUCCESS:
            return{
                ...bt,
                data:{
                    loading:false,
                    data:action.dt,
                    error:null
                }
            }        
        case GET_BT_ERROR:
            return{
                ...bt,
                data:{
                    loading:false,
                    data:null,
                    error:action.error
                }
            }         
*/
    switch (action.type) {
        case GET_BTS:
            return{
                ...state,
                bts : reducerUtils.loading()
            }  
            case GET_BTS_SUCCESS:
                return{
                    ...state,
                    bts: reducerUtils.success(action.payload)
                }        
                case GET_BTS_ERROR:
                    return{
                        ...state,
                        bts: reducerUtils.success(action.console.error)
                } 
                case GET_BT:
                    return{
                        ...state,
                        bt:reducerUtils.loading()
                    }        
                case GET_BT_SUCCESS:
                    return{
                        ...state,
                        bt:reducerUtils.success(action.payload)
                    }        
                    case GET_BT_ERROR:
                        return{
                            ...state,
                            bt:reducerUtils.success(action.error)
                    }                                          
        default: 
            return state;
    }
}