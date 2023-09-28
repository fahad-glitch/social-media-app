import axios from "axios"

export default function getRequest(url) {
   
    const res= axios.get(url)
    .then((response)=>{
        console.log(response)
        return response
    })
    .catch((error)=>{
        console.log(error)
        return error
    })
    return res;
}