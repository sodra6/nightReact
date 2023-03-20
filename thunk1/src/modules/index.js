//rootReducer : 여러개의 리덕스 모듈을 하나로 모아주는 역할
import {combineReducer} from 'redux';
import bts from './bts';

const rootReducer = combineReducer({bts});

export default rootReducer;