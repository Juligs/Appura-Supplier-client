import axios, { AxiosInstance } from "axios";
import { BusinessData } from "../interfaces/business.intefaces";
import { ProductData } from "../interfaces/product.interfaces";

class Productservice {
  api: AxiosInstance;
  constructor() {
    this.api = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/product`,
    });
  }
  getProductsOfBusiness(business_id: BusinessData) {
    return this.api.get(`/business/${business_id}`);
  }
}

const productservice = new Productservice();
export default productservice;
