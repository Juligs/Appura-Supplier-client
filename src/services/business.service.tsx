import axios, { AxiosInstance } from "axios";
import { BusinessData } from "../interfaces/business.intefaces";
import { ProductData } from "../interfaces/product.interfaces";

class Businesservice {
  api: AxiosInstance;
  constructor() {
    this.api = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/business`,
    });
    this.api.interceptors.request.use((config) => {
      const storedToken =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2U1MmY3MmMwYzA2YzliN2FmNmNiYmQiLCJlbWFpbCI6InNhbnRpMTIzQGdtYWlsLmNvbSIsInVzZXJuYW1lIjoic2FudGkiLCJwcm9maWxlSW1nIjoiaHR0cHM6Ly9pLnBpbmltZy5jb20vNzM2eC8zZC9jZC80YS8zZGNkNGFmNWJjOWUwNmQzNjMwNTk4NDczMGFiNzg4OC5qcGciLCJpYXQiOjE2NzY5ODczNDgsImV4cCI6MTY3NzAwODk0OH0.AhZNuA-KjBjnY_tvpmyMrXDlofKacznsXhG-tXXxnFc";

      if (storedToken) {
        config.headers.Authorization = `Bearer ${storedToken}`;
      }

      return config;
    });
  }
  getBusinesess() {
    return this.api.get("/getAllBusinesses");
  }

  details(business_id: string | undefined) {
    return this.api.get(`/details/${business_id}`);
  }

  createProduct(business_id: string, productData: ProductData) {
    return this.api.post(`/createProduct/${business_id}`, productData);
  }

  // productsOfBusiness(business_id: number) {

  //     return this.api.get(`/ofBusieness/${business_id}/`)

  // }

  // List of businesses created by user

  createdBusinesses(user_id: string) {
    return this.api.get(`/createdBusinesses/${user_id}`);
  }

  newBusiness(businessData: BusinessData) {
    return this.api.post("/newBusiness", businessData);
  }

  edit(business_id: string, updateUBusinesses: BusinessData) {
    return this.api.put(`/edit/${business_id}`, updateUBusinesses);
  }
}

const businesservice = new Businesservice();
export default businesservice;
