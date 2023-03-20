//Promise를 기반한 Thunk를 만들어 주는 함수들을 작성할 예정

export const createPromise = (type, promiseCreator) => {
    const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

    return param => async dispatch => {
        dispatch({type, param})
        try {
            //결과물의 이름을 payload라는 이름으로 통일
            const payload = await promiseCreator(param);
            dispatch({type:SUCCESS, payload})//성공
        } catch (error) {
            dispatch({type:ERROR, payload})//실패
        }
    }
}

//reducer에서 사용할 수 있는 여러 유틸함수 생성
export const reducerUtils = {
    //초기상태지정
    initial : (initialData=null) => ({
        loading : false,
        data : initialData,
        error : null
    }),
    //로딩중상태
    loading : (prevState = null) => ({
        loading : true,
        data : prevState,
        error : null
    }),
    //성공
    success : (payload) =>({
        loading : false,
        data : payload,
        error : null
    }),
    //실패
    error : (e) => ({
        laoding :false,
        data: null,
        error: e
    })
}