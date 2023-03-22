//여러모듈에서 같이 사용할 유틸함수

//promise에 기반한 THunk를 만들어주는 함수
export const createPromiseThunk = (type, promiseCreator) => {
  //type : GET_MAINS 같은 액션타입 이름을 가져올 매개변수

  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

  return (param) => async (dispatch) => {
    //데이터 요청 시작
    dispatch({ type, param });
    try {
      //결과물(state로 오는 데이터) 이름을 payload로 통일
      const payload = await promiseCreator(param);
      dispatch({ type: SUCCESS, payload }); //성공(state값 가져오기)
    } catch (err) {
      dispatch({ type: ERROR, payload: err, error: true }); //실패
    }
  };
};

//리듀서에서 사용할 여러 유틸함수 사용
export const reducerUtil = {
  //초기상태
  init: (initial = null) => ({
    loading: false,
    data: initial,
    error: null,
  }),
  //로딩중 상태
  loading: (prevState = null) => ({
    loading: true,
    data: prevState,
    err: null,
  }),
  //성공
  success: (payload) => ({
    loading: false,
    data: payload,
    err: null,
  }),
  //실패
  error: (error) => ({
    loading: false,
    data: null,
    error,
  }),
};

//비동기 관련 액션들을 처리하는 리듀서
export const handleAsyncActions = (type, key, keepData = false) => {
  //type, key(), keepData(재로딩 방지)
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

  return (state, action) => {
    switch (action.type) {
      case type: //로딩중
        return {
          ...state,
          [key]: reducerUtil.loading(keepData ? state[key].data : null),
        };
      case SUCCESS: //성공
        return {
          ...state,
          [key]: reducerUtil.success(action.payload),
        };
      case ERROR: //실패
        return {
          ...state,
          [key]: reducerUtil.error(action.payload),
        };
      default:
        return state;
    }
  };
};
