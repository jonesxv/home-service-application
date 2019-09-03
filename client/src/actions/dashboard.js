import axios from '../axios/axios';

const _getDashboard = companyData => ({
  type: 'GET_COMPANY',
  payload: companyData
})

export const getCompany = id => {
  return dispatch => {
    return axios.get(`company/${id}`).then(result => {
      axios.get(`service/c/${id}`).then(services => {
        dispatch(_getDashboard({
          ...result.data,
          services: [...services.data]
          }));
      })
    })
  }
}

const _createService = service => ({
  type: 'CREATE_SERVICE',
  payload: service
})

export const createService = service => {
  return dispatch => {
    return axios.post(`service`, service).then(result => {
      dispatch(_createService(result.data));
    })
  }
}