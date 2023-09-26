import axios from 'axios';

const axiosInstances = axios.create({
    baseURL:'https://api.themoviedb.org/3/'
});
export default axiosInstances;