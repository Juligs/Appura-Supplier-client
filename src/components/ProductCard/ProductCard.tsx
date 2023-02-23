interface ProductCardProps {
  name: string;
  productImg: string;
  categories: string;
  pricePerUnit: number;
}
const ProductCard: React.FC<ProductCardProps> = ({
  name,
  productImg,
  pricePerUnit,
  categories,
}) => {
  return (
    <div className="bg-white shadow rounded mt-2.5 m-6 ">
      <div>
        <a href="#">
          <img
            className="rounded-t-lg businessCard w-[400px] object-cover"
            src={productImg}
            alt="product image"
          />
        </a>
        <div>
          <span className="uppercase text-xs bg-green-50 p-0.5 border-green-500 border rounded text-green-700 font-medium select-none">
            available
          </span>
        </div>
      </div>
      <div className="p-4 flex flex-col items-center">
        <p className="text-gray-400 font-light text-xs text-center">
          {categories}
        </p>
        <h1 className="text-gray-800 text-center mt-1">{name}</h1>

        <p className="text-center text-gray-800 mt-1">${pricePerUnit} </p>
        <div className="inline-flex items-center mt-2">
          <button className="bg-white rounded-l border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M20 12H4"
              />
            </svg>
          </button>
          <div className="bg-gray-100 border-t border-b border-gray-100 text-gray-600 hover:bg-gray-100 inline-flex items-center px-4 py-1 select-none">
            2
          </div>
          <button className="bg-white rounded-r border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 4v16m8-8H4"
              />
            </svg>
          </button>
        </div>

        <button className="py-2 px-4 bg-dark-blue text-white rounded hover:bg-blue-200 active:bg-blue-700 disabled:opacity-50 mt-4 w-full flex items-center justify-center">
          Add to cart
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
