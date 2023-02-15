import businesservice from "../../services/business.service";
import React, { useEffect, useState } from "react";
import { BusinessData } from "../../interfaces/business.intefaces";
import BusinessList from "../../components/NavBar/BusinessList/BusinessList";

const MarketPlacePage: React.FC = () => {
  const [businesess, setBusinesess] = useState<BusinessData[]>();

  useEffect(() => {
    businesservice
      .getBusinesess()
      .then(({ data }) => setBusinesess(data))
      .catch((err) => console.log(err));
  }, []);

  return !businesess ? (
    <h1>Loading</h1>
  ) : (
    <div>
      <h1 className="font-medium leading-tight text-5xl mt-0 mb-2 text-dark-blue">
        Market Place
      </h1>
      <hr />
      <BusinessList businesess={businesess} />
    </div>
  );
};

export default MarketPlacePage;

// Hook - una funcion qe tengo dentor de muchas que me permite acceder a funcionalidades de mi libreria
// useEffect es un hook que me repreenta las tres fases por als que pasa un componente:
// 1. montaje 2.Actualizacion 3. Desmontaje
// Intento comment
