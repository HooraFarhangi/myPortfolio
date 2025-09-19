import axios from "axios";

export default axios.create({
    baseURL:"https://api.rawg.io/api",
  params: {
    key: "3763f1014eb947e1868a6107705b83b9",
  },
});
