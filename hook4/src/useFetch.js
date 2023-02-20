//react를 import한 코드는 삭제
import { useEffect, useState } from "react";

//CUSTOM HOOK를 만들때에는 [ useOOO.js ] 로 파일명을 제작
function useFetch(url) {
    const [data, setData] = useState(null);

    useEffect(()=>{
        fetch(url)
        .then((res) => res.json())
        .then((data) => setData(data))
    },[])

    return [data];//데이터를 반환
}

export default useFetch;