//루트 리듀서 : 여러 리듀서 모듈을 하나로 모아줌
import { combineReducers } from "redux";

//연결할 모듈 불러오기
import mains from "./main";

const rootReducer = combineReducers({ mains });

export default rootReducer;
