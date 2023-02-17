import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import businesservice from "../../services/business.service";
import { BusinessData } from "../../interfaces/business.intefaces";

const BussinesHomePage: React.FC = () => {
  const { business_id } = useParams<{ business_id: string | undefined }>();
  const [businesess, setBusinesess] = useState<BusinessData[]>();


  useEffect(() => {
    businesservice
      .details((business_id))
      .then(({ data }) => setBusinesess(data))
      .catch((err) => console.log(err));
  }, [business_id]);

  console.log(business_id)


  return (
    <div>
      <h1>Detalles Shop</h1>
      <hr />
    </div>
  );
};

export default BussinesHomePage;
