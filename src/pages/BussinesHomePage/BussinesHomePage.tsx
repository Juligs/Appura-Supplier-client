import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import businesservice from "../../services/business.service";
import { BusinessData } from "../../interfaces/business.intefaces";
// import { ProductsList } from "../../components/ProductsList/ProductsList"
// import { ProductData } from "../../interfaces/product.interfaces";
// import { BusinessList } from "../../components/BusinessList/BusinessList"



interface BusinessPageProps {
  name?: string
}

const BussinesHomePage: React.FC<BusinessPageProps> = () => {

  const { business_id } = useParams<{ business_id: string | undefined }>();
  const [business, setBusiness] = useState<BusinessData>();
  // const [products, setProducts] = useState<ProductData[]>()



  useEffect(() => {
    businesservice
      .details((business_id))
      .then(({ data }) => setBusiness(data))
      .catch((err) => console.log(err));
  }, []);




  return (
    <div>
      <h1>Detalles {business?.name}</h1>
      <hr />
      {/* <BusinessList businesess={business} /> */}


    </div>
  );
};

export default BussinesHomePage;
