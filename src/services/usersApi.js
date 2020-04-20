import Axios from 'axios';
Axios.defaults.baseURL = 'https://api.github.com';

export default {
  getUsersList() {
    return new Promise((resolve, reject) => {
      Axios
          .get('/users')
          .then(response => resolve(response.data.slice(0, 20)))
          .catch(err => reject({ title: err.message, message: err.response.data.message }))
    })
  },
  getSingleUser(user) {
    return new Promise((resolve, reject) => {
      Axios
          .get(`/users/${user}`)
          .then(response => resolve(response.data))
          .catch(err => reject({ title: err.message, message: err.response.data.message }))
    })
  }
};