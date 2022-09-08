import axios from 'axios';
import env from '../conf';

const instance = axios.create({
    baseURL: env.hostname,
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json',
        // 'Access-Control-Allow-Origin': '*',
    },
});

export default instance;
