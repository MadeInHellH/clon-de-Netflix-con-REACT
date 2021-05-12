import axios from "axios";
  
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/parametros",
})

export default instance