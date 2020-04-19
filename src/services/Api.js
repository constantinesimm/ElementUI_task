import Axios from 'axios';

export default () => {
    return Axios.create({
        baseURL: '',
        withCredentials: false,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
}