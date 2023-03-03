import axios, { AxiosInstance, AxiosRequestConfig, AxiosHeaders } from "axios";
import { BusinessData } from "../interfaces/business.intefaces";
import { ProductData } from "../interfaces/product.interfaces";

class Businesservice {
  api: AxiosInstance;
  constructor() {
    this.api = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/business`,
    });
    this.api.interceptors.request.use((config) => {

      const storedToken = localStorage.getItem("authToken");

      if (storedToken) {
        config.headers.Authorization = `Bearer ${storedToken}` as AxiosHeaders['Authorization'];
      }

      return config
    })
  }


  // // constructor() {

  // //   this.api = axios.create({
  // //     baseURL: `${process.env.REACT_APP_API_URL}/posts`
  // //   })
  //   this.api.interceptors.request.use((config) => {

  //     const storedToken = localStorage.getItem("authToken");

  //     if (storedToken) {
  //       config.headers = { Authorization: `Bearer ${storedToken}` }
  //     }

  //     return config
  //   })
  // }


  // //   constructor() {
  // //     this.api = axios.create({
  // //       baseURL: `${process.env.REACT_APP_API_URL}/business`,
  // //     });

  // //     this.api.interceptors.request.use((config: AxiosRequestConfig) => {
  // //       const storedToken = localStorage.getItem('authToken');

  // //       if (storedToken) {
  // //         config.headers.Authorization = `Bearer ${storedToken}` as AxiosHeaders['Authorization'];
  // //       }

  // //       return config;
  // //     });
  // //   }
  // }






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
