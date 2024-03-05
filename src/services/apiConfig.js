import axios from 'axios'

const api = "https://backend-r44i0omvq-mylenaaraujo08s-projects.vercel.app"

export async function getFunction(){
    const response = await axios.get(`${api}`)
    response.data;
}