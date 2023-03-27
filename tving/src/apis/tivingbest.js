//웹서버 데이터를 호출해오는 파일
import axios from "axios";

//best데이터 전체 리스트를 호출해오는 함수
export const getTvingBests = async () => {
  const response = await axios.get("http://localhost:4000/tvingbest");
  return response.data;
};

//best데이터를 각각 호출하는 api
export const getTvingBestById = async (id) => {
  const response = await axios.get(`http://localhost:4000/tvingbest/${id}`);
  return response.data;
};
