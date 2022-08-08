import axios from 'axios';
const APIURL="http://localhost:3001/products/";
export function getAllProduct(){
    return axios.get(APIURL);
}
export function delProduct(id){
    return axios.delete(`${APIURL}${id}`);
}