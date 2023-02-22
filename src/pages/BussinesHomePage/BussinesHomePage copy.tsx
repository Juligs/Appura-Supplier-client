import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import businesservice from "../../services/business.service";
import { BusinessData } from "../../interfaces/business.intefaces";
import { ProductsList } from "../../components/ProductsList/ProductsList";
import { ProductData } from "../../interfaces/product.interfaces";
// import { BusinessList } from "../../components/BusinessList/BusinessList"
import ProductCard from "../../components/ProductCard/ProductCard";

interface BusinessPageProps {
  name?: string;
}

const BussinesHomePage: React.FC<BusinessPageProps> = () => {
  const { business_id } = useParams<{ business_id: string | undefined }>();
  const [business, setBusiness] = useState<BusinessData>();
  // const [products, setProducts] = useState<ProductData[]>()

  useEffect(() => {
    businesservice
      .details(business_id)
      .then(({ data }) => setBusiness(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div
        style={{ height: "200px" }}
        className="border-radius: 10px object-cover"
      >
        <img
          className="object-cover"
          src={business?.businessImg}
          style={{ width: "100%", height: "90%", objectFit: "cover" }}
        ></img>
      </div>
      {/* <div>
        <img src={business?.businessImg}></img>
      </div> */}

      <h1 className="font-medium leading-tight text-5xl mt-0 mb-2 text-dark-blue">
        {business?.name}
        {business?.description}
      </h1>

      <hr />
      <div>
        <div className=" grid grid-cols-1 md:grid-cols-4">
          {business?.productList?.map((product: ProductData) => (
            <div key={product._id}>
              <ProductCard key={product._id} {...product} />
            </div>
          ))}
        </div>
      </div>
    </div>


    

    
    
    
    
    
    
    
  );
};

export default BussinesHomePage;
