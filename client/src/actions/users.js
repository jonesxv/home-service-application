import axios from '../axios/axios';

const _getUsers = users => ({
  type: 'GET_USERS',
  users
});

export const getUsers = () => {
  return dispatch => {
    return axios.get('users').then(result => {
      const users = [];

      result.data.forEach(item => {
        users.push(item);
      })

      dispatch(_getUsers(users));
    })
  }
}

const _addUser = (user) => ({
  type: 'ADD_USER',
  user
})

export const addUser = (userData = {
  first_name: '',
  last_name: '',
  email: '',
  password: ''
}) => {
  return dispatch => {
    const user = {...userData};
    return axios.post('user', user).then(result => {
      dispatch(_addUser(result.data));
    })
  }
}