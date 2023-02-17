import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import businesservice from "../../services/business.service";
import { BusinessData } from "../../interfaces/business.intefaces";

const BussinesHomePage: React.FC = () => {
  const { business_id } = useParams();
  const [businesess, setBusinesess] = useState<BusinessData[]>();

  useEffect(() => {
    businesservice
      .details(Number(business_id))
      .then(({ data }) => setBusinesess(data))
      .catch((err) => console.log(err));
  });

  return (
    <div>
      <h1>Detalles Shop</h1>
      <hr />
    </div>
  );
};

export default BussinesHomePage;
