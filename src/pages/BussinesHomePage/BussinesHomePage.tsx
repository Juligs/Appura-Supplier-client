import { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useParams } from "react-router-dom";
import businesservice from "../../services/business.service";
import { BusinessData } from "../../interfaces/business.intefaces";
import { ProductsList } from "../../components/ProductsList/ProductsList";
import { ProductData } from "../../interfaces/product.interfaces";
// import { BusinessList } from "../../components/BusinessList/BusinessList"
import ProductCard from "../../components/ProductCard/ProductCard";
import ProductForm from "../../components/ProductForm/ProductForm";

const BussinesHomePage: React.FC = () => {
  let [isOpen, setIsOpen] = useState(true);

  const fireFinalActions = () => {
    closeModal();
  };

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const { business_id } = useParams<{ business_id: string }>();
  const [business, setBusiness] = useState<BusinessData>();
  // const [products, setProducts] = useState<ProductData[]>()

  useEffect(() => {
    businesservice
      .details(business_id)
      .then(({ data }) => setBusiness(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
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

        <div className="flex">
          <div>
            <h1 className="font-medium leading-tight text-5xl mt-0 mb-2 text-dark-blue">
              {business?.name}
              {business?.description}
            </h1>

            <hr />
            <div>
              <div className="grid grid-cols-1 md:grid-cols-4">
                {business?.productList?.map((product: ProductData) => (
                  <div key={product._id}>
                    <ProductCard key={product._id} {...product} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div>
              <button
                type="button"
                onClick={openModal}
                className="rounded-md bg-black bg-opacity-100 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-100"
              >
                Add Products
              </button>
            </div>

            <Transition appear show={isOpen} as={Fragment}>
              <Dialog as="div" className="relative z-10" onClose={closeModal}>
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                  <div className="flex min-h-full items-center justify-center p-4 text-center">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0 scale-95"
                      enterTo="opacity-100 scale-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100 scale-100"
                      leaveTo="opacity-0 scale-95"
                    >
                      <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">

                        <div className="mt-2">
                          <ProductForm
                            fireFinalActions={fireFinalActions}
                            business_id={business_id ? business_id : ""}
                          />
                        </div>

                        <div className="mt-4">
                          <button
                            type="button"
                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            onClick={closeModal}
                          >

                          </button>
                        </div>
                      </Dialog.Panel>
                    </Transition.Child>
                  </div>
                </div>
              </Dialog>
            </Transition>
          </div>
        </div>
      </div>
    </>
  );
};

export default BussinesHomePage;
