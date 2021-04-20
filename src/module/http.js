import axios from "./axios";

class http {
  static async GET(url, params) {
    return await axios({ url, method: "GET", params });
  }
}

export default http;
