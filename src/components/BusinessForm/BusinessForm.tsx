import businesservice from "../../services/business.service";
import { useState } from "react";
import { BusinessData } from "../../interfaces/business.intefaces";
import { FormEventHandler } from "react";
import { useNavigate } from "react-router-dom";
import uploadServices from "../../services/upload.service";
import { AxiosResponse } from "axios";

const BusinessForm: React.FC = () => {
  const navigate = useNavigate();
  const [businessData, setBusinessData] = useState<BusinessData>({
    name: "",
    description: "",
    location: {
      type: "",
      coordinates: [],
    },
    businessImg: "",
  });
  interface UploadResponse {
    cloudinary_url: string;

  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBusinessData({ ...businessData, [name]: value });
  };

  const handleFormSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    console.log({ businessData });
    e.preventDefault();
    businesservice
      .newBusiness(businessData)
      .then(() => {
        navigate("/marketplace");
        console.log("hola");
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
        console.log({ res })
        setBusinessData({ ...businessData, businessImg: res.data.cloudinary_url })
      })
      .catch(err => console.log(err));
  };




  const { name, description, location, businessImg } = businessData;

  return (
    <>
      <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 sm:max-w-lg w-full p-10 bg-white rounded-xl z-10">
        <div className="text-center">
          <h2 className="mt-5 text-3xl font-bold text-gray-900">
            Let's create a New Business!
          </h2>
          <p className="mt-2 text-sm text-gray-400">
            The first step to success starts here!
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
              Business Name
            </label>
            <input
              className="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
              type="text"
              value={name}
              onChange={handleInputChange}
              name="name"
              placeholder="Business Title"
            />
          </div>
          <div className="grid grid-cols-1 space-y-2">
            <label className="text-sm font-bold text-gray-500 tracking-wide">
              Description
            </label>
            <input
              className="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
              type="text"
              value={description}
              onChange={handleInputChange}
              name="description"
              placeholder="About your business"
            />
          </div>
          <div className="grid grid-cols-1 space-y-2">
            <label className="text-sm font-bold text-gray-500 tracking-wide">
              Location
            </label>
            <input
              className="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
              type="text"
              value={location.type}
              onChange={handleInputChange}
              name="location"
              placeholder="mail@gmail.com"
            />
          </div>




          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Upload file</label>
          <input type="file" onChange={handleFileUpload} className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="user_avatar_help" id="user_avatar" />
          <div className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="user_avatar_help">A profile picture is useful to confirm your are logged into your account</div>




          {/* <div className="grid grid-cols-1 space-y-2">
            <label className="text-sm font-bold text-gray-500 tracking-wide">
              Import Image
            </label>
            <div className="flex items-center justify-center w-full">
              <label className="flex flex-col rounded-lg border-4 border-dashed w-full h-60 p-10 group text-center">
                <div className="h-full w-full text-center flex flex-col items-center justify-center items-center  ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10 text-blue-400 group-hover:text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    />
                  </svg>


                  <p className="pointer-none text-gray-500 ">
                    <span className="text-sm">Drag and drop</span> files here{" "}
                    <br /> or{" "}
                    <p className="text-blue-600 hover:underline">
                      select a file
                    </p>{" "}
                    from your computer
                  </p>
                </div>

                <input type="file" onChange={handleFileUpload} className="hidden" value={businessImg} />
              </label>
            </div>
          </div> */}

          <div>
            <button
              type="submit"
              className="my-5 w-full flex justify-center bg-blue-500 text-gray-100 p-4  rounded-full tracking-wide
               font-semibold  focus:outline-none focus:shadow-outline hover:bg-blue-600 shadow-lg cursor-pointer transition ease-in duration-300"
            >
              Create Business
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default BusinessForm;
