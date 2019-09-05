import axios from '../axios/axios';

const _getDashboard = companyData => ({
  type: 'GET_COMPANY',
  payload: companyData
})

export const getCompany = id => {
  return dispatch => {
    return axios.get(`company/${id}`).then(result => {
      axios.get(`service/c/${id}`).then(services => {
        axios.get(`category`).then(category => {
          axios.get(`job?cid=${id}`).then(job => {
            dispatch(_getDashboard({
              ...result.data,
              categories: [...category.data],
              services: [...services.data],
              jobs: [...job.data]
            }));
          })
        })
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

const _editCompany = company => ({
  type: 'EDIT_COMPANY',
  payload: company
})

export const editCompany = (id, company) => {
  return dispatch => {
    return axios.patch(`company/${id}`, company).then(result => {
      dispatch(_editCompany(result.data));
    })
  }
}