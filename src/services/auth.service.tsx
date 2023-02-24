import axios, { AxiosInstance } from "axios";
import { UserData } from "../interfaces/user.interface";

class AuthService {
  api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/auth`,
    });
  }

  signup(userData: UserData) {
    return this.api.post("/signup", userData);
  }

  login(userData: UserData) {
    return this.api.post("/login", userData);
  }

  verify = (token: string) => {
    return this.api.get("/verify", {
      headers: { authorization: `Bearer ${token}` },
    });
  };
}
const authService = new AuthService();

export default authService;
