import businesservice from "../../services/business.service";
import { useState } from "react";
import {
  ProductData,
  ProductTypes,
  UnitProducts,
} from "../../interfaces/product.interfaces";
import { FormEventHandler } from "react";
import { useNavigate } from "react-router-dom";
import uploadServices from "../../services/upload.service";
import { AxiosResponse } from "axios";
import productservice from "../../services/product.service";
import { BusinessData } from "../../interfaces/business.intefaces";

interface ProductFormProps {
  business_id: string;
  fireFinalActions: () => void;
}



const ProductForm: React.FC<ProductFormProps> = ({
  fireFinalActions,
  business_id,
}) => {
  const navigate = useNavigate();
  const [productData, setProductData] = useState<ProductData>({
    name: "",
    description: "",
    productImg: "",
    inventory: 0,
    pricePerUnit: 0,
    categories: "",
    _id: "",
    unit: "",
  });
  interface UploadResponse {
    cloudinary_url: string;
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setProductData({ ...productData, [name]: value });
  };

  const handleOnSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setProductData({ ...productData, categories: value });
  };

  const handleOnSelectChangeUnit = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { value } = e.target;
    setProductData({ ...productData, unit: value });
  };

  const handleFormSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    console.log({ business_id });

    e.preventDefault();
    businesservice
      .createProduct(business_id, productData)
      .then(() => {
        fireFinalActions();
        // navigate({``/marketplace/details/${_id}`})
      })
      .catch((err) => console.log(err));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formData = new FormData();
    const selectedFile = e.target.files?.[0];
    formData.append("imageData", selectedFile as Blob);
    uploadServices
      .uploadimage(formData)
      .then((res: AxiosResponse<UploadResponse>) => {
        console.log({ res });
        setProductData({
          ...productData,
          productImg: res.data.cloudinary_url,
        });
      })
      .catch((err) => console.log(err));
  };

  const {
    name,
    description,
    productImg,
    pricePerUnit,
    inventory,
    categories,
    unit,
  } = productData;

  return (
    <>
      <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 sm:max-w-lg w-full p-10 bg-white rounded-xl z-10">
        <div className="text-center">
          <h2 className="mt-5 text-3xl font-bold text-gray-900">
            Let's add products to your shop!
          </h2>
        </div>
        <form
          onSubmit={handleFormSubmit}
          className="mt-8 space-y-3"
          action="#"
          method="POST"
        >
          <div className="grid grid-cols-1 space-y-2">
            <label className="text-sm font-bold text-gray-500 tracking-wide">
              Product Name
            </label>
            <input
              className="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
              type="text"
              value={name}
              onChange={handleInputChange}
              name="name"
              placeholder="Business Title"
            />
          </div>
          <div className="grid grid-cols-1 space-y-2">
            <label className="text-sm font-bold text-gray-500 tracking-wide">
              Price Per Unit
            </label>
            <input
              className="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
              type="text"
              value={pricePerUnit}
              onChange={handleInputChange}
              name="pricePerUnit"
              placeholder="pricePerUnit"
            />
          </div>
          <div className="grid grid-cols-1 space-y-2">
            <label className="text-sm font-bold text-gray-500 tracking-wide">
              Inventory
            </label>
            <input
              className="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
              type="text"
              value={inventory}
              onChange={handleInputChange}
              name="inventory"
              placeholder="inventory"
            />
          </div>
          <div className="grid grid-cols-1 space-y-2">
            <label className="text-sm font-bold text-gray-500 tracking-wide">
              Description
            </label>
            <input
              className="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
              type="text"
              value={description}
              onChange={handleInputChange}
              name="description"
              placeholder="About your business"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Category
            </label>

            <select
              id="categories"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={categories}
              onChange={handleOnSelectChange}
              name="categories"
            >
              <option selected>Choose a category </option>

              {ProductTypes.map((type: string, index: number) => (
                <option value={type}>{type}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Unit
            </label>

            <select
              id="unit"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={unit}
              onChange={handleOnSelectChangeUnit}
              name="unit"
            >
              <option selected>Choose a unit </option>

              {UnitProducts.map((type: string, index: number) => (
                <option value={type}>{type}</option>
              ))}
            </select>
          </div>

          <label className="text-sm font-bold text-gray-500 tracking-wide">
            Add Picture
          </label>

          <input
            type="file"
            onChange={handleFileUpload}
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            aria-describedby="user_avatar_help"
            id="user_avatar"
          />
          <div
            className="mt-1 text-sm text-gray-500 dark:text-gray-300"
            id="user_avatar_help"
          >
            A product picture is useful to showcase your product
          </div>

          <div>
            <button
              type="submit"
              className="my-5 w-full flex justify-center bg-blue-500 text-gray-100 p-4  rounded-full tracking-wide
               font-semibold  focus:outline-none focus:shadow-outline hover:bg-blue-600 shadow-lg cursor-pointer transition ease-in duration-300"

            >
              Add Product to Your Shop
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ProductForm;
