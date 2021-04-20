import http from "./http";

const URL = {
  essay: "/api/essay",
};

class api {
  static async getEssay(limit = "5", skip = "0") {
    return await http.GET(URL.essay, { limit, skip });
  }
  static async getEssayContent(id) {
    return await http.GET(URL.essay + "/" + id);
  }
}

export default api;
