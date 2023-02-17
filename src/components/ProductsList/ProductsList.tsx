import { ProductData } from "../../interfaces/product.interfaces";
import ProductCard from "../ProductCard/ProductCard"

export const ProductsList: React.FC<{ products: ProductData[] }> = ({
    products,
}) => {
    return (
        <div className=" grid grid-cols-1 md:grid-cols-4">
            <>
                {products.map((elm: ProductData) => (
                    <ProductCard key={elm._id} {...elm} />
                ))}
            </>
        </div>
    );
};



