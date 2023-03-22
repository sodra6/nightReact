//메인이미지를 구현시킬 리덕스모듈
import * as mainApi from "../apis/main";
import {
  createPromiseThunk,
  handleAsyncActions,
  reducerUtil,
} from "../libs/asyncUtils";

//promise 규칙에 맞는 redux-thunk 생성시 3가지를 반드시 생성
//loading, success, fail로 나눠서 제작

//액션타입선언
const GET_MAINS = "main/GET_MAINS"; //요청 시작
const GET_MAINS_SUCCESS = "main/GET_MAINS_SUCCESS"; //요청 성공
const GET_MAINS_ERROR = "main/GET_MAINS_ERROR"; //요청 실패

//액션함수생성 - util에서 가져오기
export const getMains = createPromiseThunk(GET_MAINS, mainApi.getMains);

//초기값생성 - util에서 가져오기
const initialState = { main: reducerUtil.init() };

//리듀서생성 - util에서 가져오기
export default function mains(state = initialState, action) {
  switch (action.type) {
    case GET_MAINS:
    case GET_MAINS_SUCCESS:
    case GET_MAINS_ERROR:
      return handleAsyncActions(GET_MAINS, "mains", true)(state, action);
    default:
      return state;
  }
}
