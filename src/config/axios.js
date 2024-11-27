import axios from "axios"

const clienteAxios = axios.create({
   baseURL: "http://localhost:5027/api"
})

export default clienteAxios