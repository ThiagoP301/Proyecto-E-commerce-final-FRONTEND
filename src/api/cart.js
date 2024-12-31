import axios from 'axios';
import ENVIROMENT from '../config/enviroment';

const API_URL = ENVIROMENT.URL_VITE

const token = sessionStorage.getItem("access-token")

export const getCart = async () => {
    const response = await axios.get(`${API_URL}/api/cart`, {  headers: {
        "Authorization": `Bearer ${token}`,
      },}); 
    return response.data
}

export const addToCart = async (productId, quantity) => {
        const response = await axios.post(
            `${API_URL}/api/cart/add`,
            { productId, quantity },   {  headers: {
                "Authorization": `Bearer ${token}`,
              },}
            )
        return response.data
    }


export const updateQuantity = async (productId, quantity) => {
    const url = `${API_URL}/api/cart/update`
    const response = await axios.put(url, { productId, quantity }, { headers: {Authorization: `Bearer ${token}`}})
    return response;
}

export const removeFromCart = async (productId) => {
    const url = `${API_URL}/api/cart/remove`
    const response = await axios.delete(url,{
        headers: {
          "Authorization": `Bearer ${token}`,
        },
        data: { 
          productId
        },
      });
    return response.data;
}

export const deleteCart = async () =>{
    const url = `${API_URL}/api/cart/delete-cart`
    const response = await axios.delete(url, {headers: {
        "Authorization": `Bearer ${token}`,
      }})
      return response
}


