//웹서버 데이터를 호출해오는 파일
import axios from "axios";

//데이터 전체 리스트를 호출해오는 함수
export const getMains = async () => {
  const response = await axios.get("http://localhost:4000/main");
  return response.data;
};
