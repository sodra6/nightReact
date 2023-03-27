//메인이미지를 구현시킬 리덕스모듈

import * as mainAPI from '../apis/main';

//유틸함수 불러오기
import {
    createPromiseThunk,
    reducerUtils,
    handleAsyncActions
} from '../libs/asyncUtils';

//프로미스 규칙에 맞는 redux-thunk 생성시 3가지를 반드시 생성
//로딩중, 성공, 실패로 나눠서 제작

//액션 선언
const GET_MAINS = 'GET_MAINS'; //요청 시작
const GET_MAINS_SUCCESS = 'GET_MAINS_SUCCESS'; //요청 성공
const GET_MAINS_ERROR = 'GET_MAINS_ERROR'; //요청 실패

//액션 생성함수 - 유틸함수로 가져오기
export const getMains = createPromiseThunk(GET_MAINS, mainAPI.getMains);

//초기상태 구현 - 유틸에서 초기값 구현
const initialState = {
    mains: reducerUtils.initial()
}

//리듀서 - 유틸에서 함수 생성
export default function mains(state = initialState, action){
    switch (action.type){
        case GET_MAINS:
        case GET_MAINS_SUCCESS:
        case GET_MAINS_ERROR:
            return handleAsyncActions(GET_MAINS, 'mains', true)(state, action);
        default:
            return state;
    }
}