import businesservice from "../../services/business.service"
import React, { useEffect } from "react";

const MarketPlacePage: React.FC = () => {
    useEffect(() => {

        businesservice
            .getBusinesess()
            .then(({ data }) => console.log(data))
            .catch(err => console.log(err))
    }, []);

    return (<h1>hey</h1>
    )
};

export default MarketPlacePage;

// Hook - una funcion qe tengo dentor de muchas que me permite acceder a funcionalidades de mi libreria 
// useEffect es un hook que me repreenta las tres fases por als que pasa un componente: 
// 1. montaje 2.Actualizacion 3. Desmontaje
