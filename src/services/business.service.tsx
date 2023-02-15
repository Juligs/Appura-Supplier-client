import axios, { AxiosInstance } from 'axios'
import { BusinessData } from "../interfaces/business.intefaces"
import { ProductData } from '../interfaces/product.interfaces'

class Businesservice {
    api: AxiosInstance
    constructor() {

        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/business`
        })

    }
    getBusinesess() {
        return this.api.get('/getAllBusinesses')
    }

    details(business_id: number) {
        return this.api.get(`/details/${business_id}`)
    }

    createProduct(products_id: ProductData) {
        return this.api.post(`/createProduct/${products_id}`)
    }

    // productsOfBusiness(business_id: number) {

    //     return this.api.get(`/ofBusieness/${business_id}/`)

    // }

    // List of businesses created by user

    createdBusinesses(user_id: string) {
        return this.api.get(`/createdBusinesses/${user_id}`)
    }

    saveBusiness(businessData: BusinessData) {
        return this.api.post('/saveBusiness', businessData)
    }

    edit(businesses_id: number, updateUBusinesses: BusinessData) {
        return this.api.put(`/edit/${businesses_id}`, updateUBusinesses)
    }
}

const businesservice = new Businesservice()
export default businesservice

