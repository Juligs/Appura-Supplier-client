import businesservice from "../../services/business.service";
import React, { useEffect, useState } from "react";
import { BusinessData } from "../../interfaces/business.intefaces";
import BusinessList from "../../components/BusinessList/BusinessList";

const MarketPlacePage: React.FC = () => {
  const [businesess, setBusinesess] = useState<BusinessData[]>();

  interface SearchProps {
    title: string;
    content: string;
  }

  useEffect(() => {
    businesservice
      .getBusinesess()
      .then(({ data }) => setBusinesess(data))
      .catch((err) => console.log(err));
  }, []);

  const Search: React.FC<SearchProps> = ({ title, content }) => {
    return (

      <form className="flex items-center">
        <label htmlFor="simple-search" className="sr-only">{title}</label>
        <div className="shadow-lg shadow-dark-blue-20 relative w-5/6">
          <input type="text" id="simple-search" className="bg-gray-50 border border-gray-200 text-gray-200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={content} required />
        </div>
        <button type="submit" className="p-2.5 ml-2 text-sm font-medium  text-gray-400 bg-grey-700 rounded-lg border hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          <span className="sr-only">{title}</span>
        </button>
      </form>
    )

  }

  return !businesess ? (
    <h1>Loading</h1>
  ) : (


    <div>
      <div className="flex h-96 bg-light-bluish-grey m-0">
        <div className="p-20">
          <h1 className="font-medium pt-10 pb-6 font-lg leading-tight text-5xl mt-0 text-dark-blue">
            Welcome to
            <span className="font-bold"> APPURA</span>'s Market Place
          </h1>
          <p className="font-small leading-tight text-5sm mb-4 text-light-grey">
            Find Your Perfect B2B Partner: Discover the Best Service Providers for Your Business
          </p>
          <div className="mt-8">
            <Search title="Search" content="Search for businesses" />
          </div>
        </div>
        <div className="mb-200">
          <img className="absolute top-0 right-0 max-w-[32%] mb-4"
            src="/photos/Main/Veggie.png"
            alt="Main banner image"
          />
        </div>
      </div>
      <div className="pt-7">
        <BusinessList businesess={businesess} />
      </div>
    </div>
  );
};

export default MarketPlacePage;

// Hook - una funcion qe tengo dentor de muchas que me permite acceder a funcionalidades de mi libreria
// useEffect es un hook que me repreenta las tres fases por als que pasa un componente:
// 1. montaje 2.Actualizacion 3. Desmontaje
// Intento comment
