import React from "react";
import { useState } from "react";
import {
  BsArrowLeftShort,
  BsSearch,
  BsArrowDownShort,
  BsFillPersonFill,
  BsCart4,
  BsEnvelope,
} from "react-icons/bs";
import { FaUserAstronaut } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { AiOutlineShop } from "react-icons/ai";
import { CiSettings } from "react-icons/ci";
const Navbar = () => {
  const [open, setOpen] = useState(true);
  const [submenuOpen, setsubmenuOpen] = useState(false);

  const Menus = [
    { title: "MarketPlace", spacing: true, icon: <AiOutlineShop /> },
    { title: "Profile", icon: <BsFillPersonFill /> },
    { title: "Orders", icon: <BsCart4 /> },
    { title: "Messages", icon: <BsEnvelope /> },
    {
      title: "My Shops",
      submenu: true,
      submenuItems: [
        { title: "Shop1" },
        { title: "Shop2" },
        { title: "Shop3" },
      ],
    },
    { title: "Settings", spacing: true, icon: <CiSettings /> },
  ];
  return (
    <div className="flex">
      <div
        className={`bg-dark-blue h-screen p-5 pt-8 ${
          open ? "w-72" : "w-20"
        } duration-300 relative`}
      >
        <BsArrowLeftShort
          className={`bg-white text-dark-blue text-3xl rounded-full absolute -right-3 top-9 border-dark-blue cursor-pointer ${
            !open && "rotate-180"
          }
          `}
          onClick={() => setOpen(!open)}
        />
        <div className="inline-flex">
          <FaUserAstronaut
            className={`bg-white text-4xl rounded cursor-pointer block float-left mr-2 duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-2xl duration-300 ${
              !open && "scale-0"
            }`}
          >
            Appura
          </h1>
        </div>
        <div
          className={`flex items-center rounded-md bg-light-blue mt-6  ${
            !open ? "px-2.5" : "py-4"
          } py-2`}
        >
          <BsSearch
            className={`text-white text-lg block float-left cursor-pointer ${
              open && "mr-2 ml-4"
            }`}
          />
          <input
            type={"search"}
            placeholder="Search"
            className={`text-base bg-transparent w-full text-white focus:outline-none ${
              !open && "hidden"
            }`}
          />
        </div>
        <ul className="pt-7">
          {Menus.map((menu, index) => (
            <>
              <li
                key={index}
                className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-blue rounded-md mt-2 ${
                  menu.spacing ? "mt-9" : "mt-2"
                }`}
              >
                <span className="text-2xl block float-left">
                  {menu.icon ? menu.icon : <MdDashboard />}
                </span>
                <span
                  className={`text-base font-medium flex-1 duration-200 ${
                    !open && "hidden"
                  }`}
                >
                  {menu.title}
                </span>
                {menu.submenu && open && (
                  <BsArrowDownShort
                    className={`${submenuOpen && "rotate-180"}`}
                    onClick={() => setsubmenuOpen(!submenuOpen)}
                  />
                )}
              </li>

              {menu.submenu && submenuOpen && open && (
                <ul>
                  {menu.submenuItems.map((submenuItem, index) => (
                    <li
                      key={index}
                      className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 px-5 hover:bg-light-blue rounded-md mt-2"
                    >
                      {submenuItem.title}
                    </li>
                  ))}
                </ul>
              )}
            </>
          ))}
        </ul>
      </div>
      <div className="p-7">Home Page</div>
    </div>
  );
};

export default Navbar;
