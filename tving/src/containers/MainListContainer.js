import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMains } from '../modules/main';
import MainList from '../components/main/MainList';

//컨테이너 컴포넌트 : 리덕스 모듈에서 데이터를 받아 프레젠테이션 컴포넌트에 주는 컴포넌트
function MainListContainer() {
    //useSelector() : 리덕스모듈의 데이터를 조회하는 Hook
    const { data, loading, error } = useSelector(state => state.mains.mains);
    const dispatch = useDispatch();

    //컴포넌트 마운 후 메인이미지 목록 요청
    useEffect(() => {
        dispatch(getMains());
    },[dispatch]);

    if(loading && !data) return <div>로딩중...</div>;
    if(error) return <div>에러 발생!</div>;
    if(!data) return null;
    return <MainList mains={data} />
}

export default MainListContainer;