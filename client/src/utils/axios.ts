import axios, { AxiosError } from 'axios';
import { getUserFromLocalStorage } from './localStorage';
import { clearStore } from '../features/user/userSlice';

const customFetch = axios.create({
    baseURL: 'http://localhost:5000/api/v1/'
});

customFetch.interceptors.request.use(config => {
    const user = getUserFromLocalStorage();
    if (user) {
        config.headers['authorization'] = `Bearer ${user.token}`;
    }
    return config;
});

export const checkForUnauthorizedResponse = (
    error: AxiosError,
    thunkAPI: any
) => {
    if (error.response?.status === 401) {
        thunkAPI.dispatch(clearStore(''));
        return thunkAPI.rejectWithValue('Unauthorized! Logging Out...');
    }
    return thunkAPI.rejectWithValue(
        (error.response?.data as { msg: string }).msg
    );
};

export default customFetch;
