import businesservice from "../../services/business.service";
import { useState } from "react";
import { FormEventHandler } from "react";
import { useNavigate } from "react-router-dom";
import uploadServices from "../../services/upload.service";
import { AxiosResponse } from "axios";
import { UserData, RoleTypes } from "../../interfaces/user.interface";
import authService from "../../services/auth.service";

const SignupForm: React.FC = () => {
    const navigate = useNavigate();
    const [signupData, setSignupData] = useState<UserData>({
        username: "",
        email: "",
        profileImg: "",
        password: "",
        bio: "",


    });

    interface UploadResponse {
        cloudinary_url: string;
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setSignupData({ ...signupData, [name]: value });
    };

    const handleFormSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        console.log({ signupData });
        e.preventDefault();
        authService
            .signup(signupData)
            .then(() => {
                // navigate("/login");
                console.log("Esta creado", signupData);
            })
            .catch((err) => console.log(err));

    };

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const formData = new FormData();
        const selectedFile = e.target.files?.[0];
        formData.append("imageData", selectedFile as Blob);
        uploadServices
            .uploadimage(formData)
            .then((res: AxiosResponse<UploadResponse>) => {
                console.log({ res });
                setSignupData({
                    ...signupData,
                    profileImg: res.data.cloudinary_url,
                });
            })
            .catch((err) => console.log(err));
    };

    const { username, email, profileImg, password, bio } = signupData;

    return (
        <>
            <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 sm:max-w-lg w-full p-10 bg-white rounded-xl z-10">
                <div className="text-center">
                    <h2 className="mt-5 text-3xl font-bold text-gray-900">
                        Sign-Up
                    </h2>
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
                            Username
                        </label>
                        <input
                            className="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                            type="text"
                            value={username}
                            onChange={handleInputChange}
                            name="username"
                            placeholder="Username"
                        />
                    </div>
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
                    <div className="grid grid-cols-1 space-y-2">
                        <label className="text-sm font-bold text-gray-500 tracking-wide">
                            Add a small Bio!
                        </label>
                        <input
                            className="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                            type="text"
                            value={bio}
                            onChange={handleInputChange}
                            name="bio"
                        />
                    </div>

                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
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
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="my-5 w-full flex justify-center bg-blue-500 text-gray-100 p-4  rounded-full tracking-wide
               font-semibold  focus:outline-none focus:shadow-outline hover:bg-blue-600 shadow-lg cursor-pointer transition ease-in duration-300"
                        >
                            Sign-Up
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default SignupForm;
