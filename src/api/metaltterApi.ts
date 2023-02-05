import axios, { AxiosHeaders } from 'axios'
import config from '@/config'

const metaltterApi = axios.create({
    baseURL: config.apiUrl,
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