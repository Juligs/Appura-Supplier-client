export interface ProductData {
  name: string;
  description: string;
  productImg: string;
  inventory?: number;

  categories: string;
  pricePerUnit: number;
  _id?: string;
  unit: string;
}

export const ProductTypes = [
  "Frozen",
  "Canned Goods",
  "Vegetables and fruit",
  "Condiments & Spices",
  "Cereal",
  "Paper & Wrap",
  "Garendening",
  "Diary",
  "Meat & Fish",
  "Cleaning Supplies",
  "Alcoholic Beverages",
  "Baking Goods",
  "Stationery",
  "Construction Supplies",
  "Kitchen Supplies",
  "Appliances",
  "Linens",
  "General",
];

export const UnitProducts = ["g", "mg", "kg", "mm"];
