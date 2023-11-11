// import axios from "axios";
const axios = require("axios");
export const handler = async (event: any) => {
  const response = await axios.get("https://jsonplaceholder.typicode.com/todos/50");
  return response.data;
};
