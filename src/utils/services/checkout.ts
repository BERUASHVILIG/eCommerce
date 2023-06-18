import axios from "axios";

export const getFinalProject = async () => {
  const response = await axios.post(`http://localhost:8080/products`, {
    keyword: "samsung",
  });
  return response.data;
};
