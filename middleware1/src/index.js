import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//스토어 생성함수 불러오기
import { createStore, applyMiddleware } from 'redux'; //가운데 줄 들어가도 틀린 코드 아님
import { Provider } from 'react-redux'; 
import rootReducer from './modules'; //폴더명만 호출해도 그 안의 index파일을 호출

//미들웨어 호출 - 우리가 만든 것은 호출X
//import testLogger from './middleware/testLogger';

//redux-logger 호출 : yarn add redux-logger설치해야 가능
import logger from 'redux-logger'; //미들웨어 추가

//크롬 redux개발자 도구 호출
import { composeWithDevTools } from 'redux-devtools-extension';


//스토어 생성 - 한 프로젝트당 스토어는 한개만 생성
//미들웨어는 여러 개 등록해서 사용가능
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger))
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();
