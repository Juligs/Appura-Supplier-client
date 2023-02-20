export interface BusinessData {
  name: string;
  decription: string;
  location: {
    type: string;
    coordinates: number[];
  };
  businessImg: string;
  owner: string;
  employees: string[];
  minOrderRequired: number;
  productList: [];
  _id: string;
}
