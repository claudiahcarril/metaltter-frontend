import axios, { AxiosHeaders } from 'axios'

const metaltterApi = axios.create({
    baseURL: 'http://localhost:3000/api',
    headers: {
        "Access-Control-Allow-Origin": "*"
      }
})

metaltterApi.interceptors.request.use((config) => {
    const token = localStorage.getItem('token') ?? ''
    if (token) {
        (config.headers as AxiosHeaders).set('Authorization', `Bearer ${token}`) 
    }

    return config
})

export default metaltterApi