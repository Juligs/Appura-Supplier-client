import businesservice from "../../services/business.service";
import { useState, useContext } from "react";
import { FormEventHandler } from "react";
import { useNavigate } from "react-router-dom";
import uploadServices from "../../services/upload.service";
import { AxiosResponse } from "axios";
import { UserData, RoleTypes } from "../../interfaces/user.interface";
import authService from "../../services/auth.service";

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

    const handleFormSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        console.log({ loginData });
        e.preventDefault();
        authService
            .login(loginData)
            .then(() => {
                navigate("/marketplace");
                console.log("Esta creado", loginData);
            })
            .catch((err) => console.log(err));

    };

    // const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     const formData = new FormData();
    //     const selectedFile = e.target.files?.[0];
    //     formData.append("imageData", selectedFile as Blob);
    //     uploadServices
    //         .uploadimage(formData)
    //         .then((res: AxiosResponse<UploadResponse>) => {
    //             console.log({ res });
    //             setloginData({
    //                 ...loginData,
    //                 profileImg: res.data.cloudinary_url,
    //             });
    //         })
    //         .catch((err) => console.log(err));
    // };

    const { username, email, password } = loginData;

    return (
        <>
            <div>
                <div className=" bg-white sm:max-w-lg w-full p-10 bg-white rounded-xl z-10">
                    <div className="text-center">
                        <h2 className="mt-5 text-3xl font-bold text-gray-900">
                            Login
                        </h2>

                        <div className="flex flex-wrap justify-center">
                            <div className="w-6/12 sm:w-4/12 px-4">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Logos.svg/1200px-Logos.svg.png" alt="..." className="shadow rounded-full max-w-full h-auto align-middle border-none" />
                            </div>
                        </div>


                        <p className="mt-2 text-sm text-gray-400">
                            Welcome to APPURA
                        </p>
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

                        {/* <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Upload file
                    </label>
                    <input
                        type="file"
                        onChange={handleFileUpload}
                        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                        aria-describedby="user_avatar_help"
                        id="user_avatar"
                    />
                    <div
                        className="mt-1 text-sm text-gray-500 dark:text-gray-300"
                        id="user_avatar_help"
                    >
                        A profile picture is useful to confirm your are logged into your
                        account
                    </div> */}

                        <div>
                            <button
                                type="submit"
                                className="my-5 w-full flex justify-center bg-dark-blue text-gray-100 p-4 tracking-wide
               font-semibold  focus:outline-none focus:shadow-outline hover:bg-blue-600 shadow-lg cursor-pointer transition ease-in duration-300"
                            >
                                Log in
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default LoginForm;
