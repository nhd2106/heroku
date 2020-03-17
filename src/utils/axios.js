import axios from "axios";

// Config global axios
// Sau này khi sử dụng axios sẽ import từ đây
export default axios.create({
  baseURL: "http://elearning0706.cybersoft.edu.vn/api/"
});
