import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  BsArrowLeftShort,
  // BsSearch,
  BsArrowDownShort,
  BsFillPersonFill,
  BsCart4,
  BsEnvelope,
} from "react-icons/bs";
// import { FaUserAstronaut } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { AiOutlineShop, AiFillPlusCircle } from "react-icons/ai";
import { CiSettings, CiLogout } from "react-icons/ci";
import { MdCreate } from "react-icons/md";
import { BiLogIn } from "react-icons/bi";
// import { UserData } from "../../interfaces/user.interface";
import { AuthContext } from "../../contexts/auth.context";

interface Menu {
  title: string;
  icon?: JSX.Element;
  spacing?: boolean;
  submenu?: boolean;
  submenuItems?: SubmenuItem[];
  Linkto?: string;
}

interface SubmenuItem {
  title: string;
  icon?: JSX.Element;
  spacing?: boolean;
}

const Navbar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(true);
  const [submenuOpen, setsubmenuOpen] = useState<boolean>(false);

  const { user, logoutUser } = React.useContext(AuthContext);
  const Menus: Menu[] = [
    {
      title: "MarketPlace",
      spacing: true,
      icon: (
        <Link to="/marketplace">
          <AiOutlineShop />
        </Link>
      ),
    },
    ...(!user
      ? [
          {
            title: "Signup",
            spacing: true,
            icon: (
              <Link to="/signup">
                <MdCreate />
              </Link>
            ),
          },

          {
            title: "Login",
            icon: (
              <Link to="/login">
                <BiLogIn />
              </Link>
            ),
          },
        ]
      : [
          {
            title: "Profile",
            icon: (
              <Link to="/profile/:user_id">
                <BsFillPersonFill />
              </Link>
            ),
          },
          {
            title: "Shopping Cart",
            icon: (
              <Link to="/cart">
                <BsCart4 />
              </Link>
            ),
          },
          {
            title: "Messages",
            icon: (
              <Link to="/messages">
                <BsEnvelope />
              </Link>
            ),
          },

          {
            title: "My Shops",
            submenu: true,
            submenuItems: [
              { title: "Shop1" },
              { title: "Shop2" },
              { title: "Shop3" },
              {
                title: "Add Business",
                icon: (
                  <Link to="/newBusiness">
                    <AiFillPlusCircle />
                  </Link>
                ),
              },
            ],
          },

          {
            title: "Settings",
            icon: (
              <Link to="/settings">
                <CiSettings />
              </Link>
            ),
          },

          {
            title: "logout",
            icon: (
              <Link to="/login">
                <CiLogout onClick={logoutUser} />
              </Link>
            ),
          },
        ]),
  ];
  return (
    <div
      className={`flex min-h-screen bg-dark-blue duration-300 ${
        open ? "w-72" : "w-20"
      }`}
    >
      <div
        className={`h-full p-5 pt-8 duration-300 fixed ${
          open ? "w-72" : "w-20"
        }`}
      >
        <BsArrowLeftShort
          className={`bg-white text-dark-blue text-3xl rounded-full absolute -right-3 top-9 border-dark-blue cursor-pointer ${
            !open ? "rotate-180" : ""
          }
            `}
          onClick={() => setOpen(!open)}
        />
        <div className="inline-flex">
          <img
            src="/photos/Login/iconAppura.png"
            alt="logo-Appura"
            className={` w-11 -text-4xl rounded cursor-pointer block float-left mr-2 duration-500 ${
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
        <h1
          className={`text-base bg-transparent text-white focus:outline-none ${
            !open && "hidden"
          }`}
        >
          Welcome, {!user ? "guest" : user.username}
        </h1>
        <ul className="pt-7">
          {Menus.map((menu: Menu, index: number) => (
            <div key={index}>
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
              {menu.submenu && submenuOpen && open && menu.submenuItems && (
                <ul>
                  {menu.submenuItems.map((submenuItem, index) => (
                    <li
                      key={index}
                      className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 px-5 hover:bg-light-blue rounded-md mt-2"
                    >
                      {submenuItem.icon}
                      {submenuItem.title}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
