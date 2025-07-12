import BrandAdminService from "../../services/Brand/BrandAdminService.js";

export const addBrand = async (req, res) => {

    try {

        const {name} = req.body
        
        if(!name){
            return res.status(400).json({ message: 'Brand name is required' });
        }

        const brandAdminService = new BrandAdminService()
        const createdBrand = await brandAdminService.addBrand(name)
        if(createdBrand.status != 200){
            return res.status(422).json({status: createdBrand.status, message: createdBrand.message });
        }

        return res.status(200).json({ status: createdBrand.status, message: createdBrand.message, data: createdBrand.data });
        
    } catch (error) {
        console.error('[BrandAdminController]: Error in addBrand:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}