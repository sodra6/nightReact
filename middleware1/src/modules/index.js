//rootReducer : 여러 리듀서를 하나로 모아주는 파일
//modules폴더의 진입점으로 사용하기 위해 index.js로 저장

//리덕스모듈 : 리덕스의 액션, 액션생성함수, 리듀서까지 모두 담겨 있는 파일

import { combineReducers } from "redux"; //여러 모듈을 사용할 수 있게 해주는 함수
import counter from "./counter";

const rootReducer = combineReducers({ counter });

export default rootReducer;