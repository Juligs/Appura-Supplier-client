export interface ProductData {
    name: string;
    description: string;
    productImg: string;
    inventory?: number;
    categories: "Frozen" | "Canned Goods" | "Vegetables and fruit" | "Condiments & Spices" | "Cereal" | "Paper & Wrap" | "Garendening" | "Diary" | "Meat & Fish" | "Cleaning Supplies" | "Alcoholic Beverages" | "Baking Goods" | "Stationery" | "Construction Supplies" | "Kitchen Supplies" | "Appliances" | "Linens" | "General";
    pricePerUnit: number;

    _id: number
}

