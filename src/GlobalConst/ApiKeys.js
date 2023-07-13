const BASE_URL = "http://localhost:5000/";

// const GET = "get";
// const POST = "post";
// const PATCH = "Patch";
// const REMOVE = "Delete";

const apiConst = {
  send_otp_to_user_register: `${BASE_URL}user/send_otp_to_user`,
  signup: `${BASE_URL}user/signup`,
  login: `${BASE_URL}user/login`,
  send_otp_login: `${BASE_URL}user/send_otp_to_user_for_login`,
  add_complain: `${BASE_URL}complain/add`,
  getallplans: `${BASE_URL}plans/getallplans`,
  list: `${BASE_URL}category/list`,
  pro_list: `${BASE_URL}property/list`,
  search: `${BASE_URL}property/search`,
  pro_types: `${BASE_URL}propertyType/list/?categoryId`,
  askquery: `${BASE_URL}supportManagement/sendEnquiries`,
  addSlider: `${BASE_URL}slider/addSlider`,
  checkisSubscribed: `${BASE_URL}agent/checkisSubscribed/`,
};

export default apiConst;
