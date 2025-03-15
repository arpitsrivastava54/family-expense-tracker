import { axiosClient } from "./axios.service";
import helper from "@/lib/helper";

interface Login{
  email:string;
  password:string;
}

interface Register {
  name:string;
  email:string;
  password:string;
  familyCode?:string;
}

class AuthService {
  async login(obj:Login) {
    try {
      const response = await axiosClient.post("/api/auth/login", obj);
      helper.setLocalStorage("userId", response.data.user._id);
      return helper.successResponse(response.data);
    } catch (error:any) {
      return helper.errorResponse(error);
    }
  }

  async register(obj:Register) {
    try {
      const response = await axiosClient.post("/api/auth/register", obj);
      return helper.successResponse(response.data);
    } catch (error:any) {
      return helper.errorResponse(error);
    }
  }
}

const authService = new AuthService();
export default authService;