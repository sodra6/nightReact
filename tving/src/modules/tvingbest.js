//best데이터를 가져올 리덕스 모듈
//Promise를 통해서 사용하는 리덕스 모듈은 로딩중, 성공, 실패로 나눔
//유틸 파일을 빼서 중복되는 것은 처리

import * as tvingBestAPI from "../apis/tivingbest";

import {
  createPromiseThunk,
  createPromiseThunkById,
  reducerUtils,
  handleAsyncActions,
  handleAsyncActionsById,
} from "../libs/asyncUtils";

//1. 액션생성
//1_1. 데이터 전체 가져오는 액션
const GET_TVINGBESTS = "GET_TVINGBESTS"; //데이터 요청
const GET_TVINGBESTS_SUCCESS = "GET_TVINGBESTS_SUCCESS"; //요청 성공
const GET_TVINGBESTS_ERROR = "GET_TVINGBESTS_ERROR"; //요청 실패

//1_2. 데이터를 한개 가져오는 액션
const GET_TVINGBEST = "GET_TVINGBEST"; //데이터 요청
const GET_TVINGBEST_SUCCESS = "GET_TVINGBEST_SUCCESS"; //요청 성공
const GET_TVINGBEST_ERROR = "GET_TVINGBEST_ERROR"; //요청 실패

//2. 액션생성함수
export const getTvingBests = createPromiseThunk(
  GET_TVINGBESTS,
  tvingBestAPI.getTvingBests
);
export const getTvingBest = createPromiseThunkById(
  GET_TVINGBEST,
  tvingBestAPI.getTvingBestById
);

//3. 기본값 처리
const initialState = {
  tvingbests: reducerUtils(),
  tvingbest: reducerUtils(),
};

//4. 리듀서 함수
export default function tvingBests(state = initialState, action) {
  switch (action.type) {
    case GET_TVINGBESTS:
    case GET_TVINGBESTS_SUCCESS:
    case GET_TVINGBESTS_ERROR:
      return handleAsyncActions(
        GET_TVINGBESTS,
        "tvingbests",
        true
      )(state, action);
    case GET_TVINGBEST:
    case GET_TVINGBEST_SUCCESS:
    case GET_TVINGBEST_ERROR:
      return handleAsyncActionsById(
        GET_TVINGBEST,
        "tvingbest",
        true
      )(state, action);
    default:
      return state;
  }
}
