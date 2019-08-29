import axios from '../axios/axios';

const _getServices = services => ({
  type: 'GET_SERVICES',
  payload: services
})

export const getServices = () => {
  return dispatch => {
    return axios.get('service').then(result => {
      const services = [];
      
      result.data.forEach(service => {
        services.push(service);
      })
      console.log(services);
      
      dispatch(_getServices(services));
    })
  }
}