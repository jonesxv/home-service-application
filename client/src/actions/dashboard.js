import axios from '../axios/axios';

const _getDashboard = companyData => ({
  type: 'GET_COMPANY',
  payload: companyData
})

export const getCompany = id => {
  return dispatch => {
    return axios.get(`company/${id}`).then(result => {
      console.log(result)
      dispatch(_getDashboard(result));
    })
  }
}