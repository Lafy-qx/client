import axios from "axios"

const URL: string = 'http://localhost:3000/'

const api = axios.create({
    baseURL: URL
})

export default api