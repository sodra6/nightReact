//여러 모듈에서 같이 사용할 유틸함수 선언하는 파일

//Promise에 기반한 Thunk를 만들어주는 함수
export const createPromiseThunk = (type, promiseCreator) => {
  //type : GET_MAINS 같은 액션 앞 이름 가져올 매개변수

  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

  return (param) => async (dispatch) => {
    //요청시작
    dispatch({ type, param });
    try {
      //결과물(state로 오는 데이터)이름을 payload로 통일
      const payload = await promiseCreator(param);
      dispatch({ type: SUCCESS, payload }); //성공(state값 가져오기)
    } catch (e) {
      //e : 에러 객체
      dispatch({ type: ERROR, payload: e, error: true }); //실패
    }
  };
};

//리듀서에서 사용할 여러 유틸 함수
export const reducerUtils = {
  //초기상태
  initial: (initialData = null) => ({
    loading: false,
    data: initialData,
    error: null,
  }),
  //로딩중 상태
  loading: (prevState = null) => ({
    loading: true,
    data: prevState,
    error: null,
  }),
  //성공 상태
  success: (payload) => ({
    loading: false,
    data: payload,
    error: null,
  }),
  //실패 상태
  error: (error) => ({
    loading: false,
    data: null,
    error: error,
  }),
};

//비동기 관련 액션들을 처리하는 리듀서 함수
export const handleAsyncActions = (type, key, keepData = false) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

  return (state, action) => {
    switch (action.type) {
      case type: //로딩중일 때
        return {
          ...state,
          [key]: reducerUtils.loading(keepData ? state[key].data : null),
        };
      case SUCCESS: //성공했을 때
        return {
          ...state,
          [key]: reducerUtils.success(action.payload),
        };
      case ERROR: //실패했을 때
        return {
          ...state,
          [key]: reducerUtils.error(action.payload),
        };
      default:
        return state;
    }
  };
};

/* ================================================================================================== */

//ID별로 확인하는 함수 생성
const defaultIdSelector = (param) => param;
export const createPromiseThunkById = (
  type,
  promiseCreator,
  idSelector = defaultIdSelector
) => {
  //type : GET_MAINS 같은 액션 앞 이름 가져올 매개변수

  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

  return (param) => async (dispatch) => {
    const id = idSelector(param);

    //요청시작
    dispatch({ type, meta: id });
    try {
      //결과물(state로 오는 데이터)이름을 payload로 통일
      const payload = await promiseCreator(param);
      dispatch({ type: SUCCESS, payload, meta: id }); //성공(state값 가져오기)
    } catch (e) {
      //e : 에러 객체
      dispatch({ type: ERROR, payload: e, error: true, meta: id }); //실패
    }
  };
};

export const handleAsyncActionsById = (type, key, keepData = false) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

  return (state, action) => {
    const id = action.meta;

    switch (action.type) {
      case type: //로딩중일 때
        return {
          ...state,
          [key]: {
            ...state[key],
            [id]: reducerUtils.loading(
              //state[key][id]가 만들어져 있지 않을 수 있어서 유효성 검사하고 시작
              keepData ? state[key][id].data && state[key][id] : null
            ),
          },
        };
      case SUCCESS: //성공했을 때
        return {
          ...state,
          [key]: {
            ...state,
            [key]: {
              ...state[key],
              [id]: reducerUtils.success(action.payload),
            },
          },
        };
      case ERROR: //실패했을 때
        return {
          ...state,
          [key]: {
            ...state[key],
            [id]: reducerUtils.error(action.payload),
          },
        };
      default:
        return state;
    }
  };
};
