import axios from "axios";

// Create an instance of axios
const axiosInstance = axios.create ({
    baseURL: 'http://localhost:2004'
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
    config => {
        const token = localStorage.getItem('token');
        console.log('Token from interceptor: ', token)
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

export default axiosInstance;