import { getProductById } from "services/productServices.js"

export default function handler(request, response) {

    const {id} =request.query
    const product = getProductById(id)
    if (!product){
        response.status(404).json({status: "No such product"})
    }

    response.status(200).json(product)
}