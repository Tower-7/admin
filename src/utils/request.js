import axios from 'axios'

let baseURL = process.env.NODE_ENV==='development'?'/api/admin':'/admin'
const instance = axios.create({
    baseURL: baseURL,
    timeout: 5000
})

instance.interceptors.request.use(function(config){
    return config
},function(err) {
    return Promise.reject(err)
})

instance.interceptors.response.use(function(response) {
    return response.data;
},function(err) {
    return Promise.reject(err)
})

export default instance