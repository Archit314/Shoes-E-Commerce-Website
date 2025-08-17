import {create} from "zustand"

export const useBrandStore = create((set) => ({

    isGettingBrands: false,
    brands: [],

    getBrands: async () => {
        set({isGettingBrands: true})
    }
}))