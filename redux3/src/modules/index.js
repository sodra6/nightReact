import { combineReducers } from "redux";
import counter from "./counter";
import todoes from "./todoes";

//프로젝트에는 여러개의 Redux 모듈이 생김, 그걸을 하나로 합친 Reducer를 rootReducer라고 부름
//그걸 한번에 src폴더에 index.js로 연결 -> store하나에 module을 연결해야 하기 떄문\
//index.js로 만든 이유는 경로를 ./modules로 쓰기 위해

const rootReducer = combineReducers({
  counter,
  todoes,
});

export default rootReducer;
