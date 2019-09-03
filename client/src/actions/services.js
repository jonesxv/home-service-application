import axios from '../axios/axios';

const _getServices = services => ({
  type: 'GET_SERVICES',
  payload: services
})

export const getServices = () => {
  return dispatch => {
    return axios.get('service').then(serviceData => {
      axios.get('company').then(companyData => {
        axios.get('category').then(catData => {
          dispatch(_getServices(
            {
              services: [...serviceData.data],
              companies: [...companyData.data],
              categories: [...catData.data]
            }
          ))
        })
      })
    })
  }
}

const _searchServices = services => ({
  type: 'SEARCH_SERVICES',
  payload: services
})

export const searchServices = ({ company, category }) => {
  const companyQuery = company.length > 0 ? `comp=${company}` : "";
  const categoryQuery = category.length > 0 ? `cat=${category}` : "";
  const query = companyQuery.length > 0 && categoryQuery.length > 0 ? `?${companyQuery}&${categoryQuery}` : companyQuery.length > 0 ? `?${companyQuery}` : categoryQuery.length > 0 ? `?${categoryQuery}` : "";
  
  return dispatch => {
    return axios.get(`service${query}`).then(result => {
      dispatch(_searchServices(result.data))
    })
  }
}