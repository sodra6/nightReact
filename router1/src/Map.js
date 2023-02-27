import React, { useEffect } from "react";
import {
  Link,
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";

//파라미터(URL 파라미터) : 주소뒤에 작성하는 문자열
//리액트라우터는 파라미터를 통해서 상세페이지를 10개들 100개등 생성할 수 있다.
//useParams() : 현재 url의 모든 파라미터를 객체로 반환(리액트훅스가아니고 리액트라우터돔의 훅스)

//쿼리스트링 : 주소뒤에 ? 뒤에 값 key, value로된 문자열
//ex)host.pathname?key=value&key2=value2
//useLocation Hooks : 현재 url 정보를 가져오는 Hooks

function Map(props) {
  //배열의 index 번호는 0번부터 시작
  const storeDatas = [
    {
      id: 1,
      name: "강남에비뉴",
      addr: "서울특별시 서초구 서초대로77길 62, 강남역아이파크 B102~B105 (서초동)",
      new: "true",
    },
    {
      id: 2,
      name: "강남역신분당역사",
      addr: "서울특별시 강남구 강남대로 396 (역삼동)",
      new: "false",
    },
    {
      id: 3,
      name: "강남우성",
      addr: "서울특별시 강남구 강남대로 328 (역삼동)",
      new: "true",
    },
  ];

  //파라미터로 자동으로 새겨짐 1번부터
  const { storeId } = useParams(); //라우터가 갖고잇는 사용자 훅스

  const location = useLocation();
  const test = window.location;

  //useEffect를 통해서 주소정보 확인
  useEffect(() => {
    console.log(location);
    console.log(test);
  }, [location]);

  //useSearchParam Hooks, get(), set() 으로 구분
  const [searchParams, setSearchParams] = useSearchParams();
  const newParams = searchParams.get("new");

  //useNavigate Hooks : Link 컴포넌트를 사용하지 않고 다른 페이지로 이동하는 기술(뒤로가기, 앞으로가기 등)
  const navigate = useNavigate();

  return (
    <div>
      <h3 style={{ backgroundColor: "lightblue" }}>오시는 길 페이지~</h3>
      {/* 네비게이션 생성 */}
      <ul>
        {storeDatas.map((data, idx) => {
          return (
            <li key={data.id}>
              <Link to={"/map/" + (idx + 1) + "?new=" + data.new}>
                스토어{idx + 1}
              </Link>
            </li>
          );
        })}
      </ul>
      <h4>
        매장명 :{" "}
        {newParams === "true" && <span style={{ color: "red" }}>new</span>}{" "}
        {storeDatas[storeId - 1].name}
      </h4>
      <h4>주소 : {storeDatas[storeId - 1].addr}</h4>
      <hr />
      <h2>useNavigate 테스트</h2>
      <button onClick={() => navigate(-1)}>뒤로</button>
      <button onClick={() => navigate(+1)}>앞으로</button>
      <button onClick={() => navigate("/")}>루트가기</button>
      <button onClick={() => navigate("/", { replace: true })}>루트가기</button>
    </div>
  );
}

export default Map;
