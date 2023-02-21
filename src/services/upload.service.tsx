import axios, { AxiosInstance, AxiosPromise } from "axios";

class UploadServices {
    private api: AxiosInstance
    constructor() {
        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/upload`
        })
    }


    uploadimage(imageForm: FormData): AxiosPromise {
        return this.api.post("/image", imageForm);
    }
}

const uploadServices = new UploadServices()

export default uploadServices


