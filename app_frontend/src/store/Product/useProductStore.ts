import { create } from "zustand";
import { axiosInstance } from "../../lib/axios";

type ProductStoreResponse = {
    status: number,
    message: string,
    data: []
}

interface ProductStore {
    isGettingProducts: boolean,
    products: any[],
    getProducts: () => Promise<ProductStoreResponse>
}

export const useProductStore = create<ProductStore>((set) => ({

    isGettingProducts: false,
    products: [],

    getProducts: async (page: number = 1, maxRows: number = 5) => {

        set({isGettingProducts: true})

        try {
            
            const gotCategories = await axiosInstance.get(`/user/product/list?page=${page}&maxRows=${maxRows}`)

            set({isGettingProducts: false, products: gotCategories.data.data})

            return { status: gotCategories.data.status, message: gotCategories.data.message, data: gotCategories.data.data}
        } catch (error: any) {
            console.error(error)
            set({isGettingProducts: false, products: []})
            
            if(error.status == 422){
                return {status: error.response.data.status, message: error.response.data.message, data: error.response.data.data}
            }
            
            return {status: 500, message: error.message, data: [] }
        }
    }
}))