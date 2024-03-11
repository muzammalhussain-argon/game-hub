import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: { key: "d8506b4b61a74a5ba082e58d3e13a10a" },
});
