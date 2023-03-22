//웹서버 데이터를 호출해오는 파일
import axios from "axios";

export const getMains = async () => {
  const res = await axios.get("http://localhost:4000/main");
  return res.data;
};
