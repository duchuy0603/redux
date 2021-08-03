import axios from "axios";

export default axios.create({
  baseURL: "https://60f5887f18254c00176dff17.mockapi.io/pro",
  headers: {
    "Content-Type": "application/json"
  }
});
