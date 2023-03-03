import { useState, useContext } from "react";
import { FormEventHandler } from "react";
import { useNavigate } from "react-router-dom";
import { UserData } from "../../interfaces/user.interface";
import authService from "../../services/auth.service";
import { AuthContext } from "../../contexts/auth.context";

const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const [loginData, setloginData] = useState<UserData>({
    username: "",
    email: "",
    profileImg: "",
    password: "",
    bio: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setloginData({ ...loginData, [name]: value });
  };

  const { storeToken, authenticateUser } = useContext(AuthContext);

  const handleFormSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    console.log({ loginData });
    e.preventDefault();
    authService
      .login(loginData)
      .then(({ data }) => {
        const tokenFromServer = data.authToken;
        storeToken(tokenFromServer);
        authenticateUser();
        navigate("/marketplace");
        console.log("Esta creado", loginData);
      })
      .catch((err) => console.log(err));
  };

  const { email, password } = loginData;

  //  .login(signupData)
  //           .then(({ data }) => {
  //               const tokenFromServer = data.authToken
  //               storeToken(tokenFromServer)
  //               authenticateUser()
  //               setShowToast(true)
  //               setToastMessage('Sesión iniciada')
  //               navigate('/galeria')
  //           })
  //           .catch(err => console.log(err))
  //   }

  return (
    <>
      <div className="bg-white  sm:max-w-lg w-full p-10 bg-white rounded-xl z-10">
        <div className="text-center">
          <div className="flex flex-wrap justify-center">
            <div className="w-100%">
              <img src="/photos/Login/LoginLogo.png" alt="..." />
            </div>
          </div>
        </div>
        <form
          onSubmit={handleFormSubmit}
          className="mt-8 space-y-3"
          action="#"
          method="POST"
        >
          <div className="grid grid-cols-1 space-y-2">
            <label className="text-sm font-bold text-gray-500 tracking-wide">
              Email
            </label>
            <input
              className="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
              type="text"
              value={email}
              onChange={handleInputChange}
              name="email"
            />
          </div>
          <div className="grid grid-cols-1 space-y-2">
            <label className="text-sm font-bold text-gray-500 tracking-wide">
              Password
            </label>
            <input
              className="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
              type="password"
              value={password}
              onChange={handleInputChange}
              name="password"
            />
          </div>

          <div>
            <button
              type="submit"
              className="bg-dark-blue my-5 w-full flex justify-center text-gray-100 p-4  rounded-10 tracking-wide
               font-semibold  focus:outline-none focus:shadow-outline hover:bg-light-blue shadow-lg cursor-pointer transition ease-in duration-300"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
