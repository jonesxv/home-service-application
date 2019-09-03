const defaultState = {
  services: [],
  companies: [],
  categories: []
}
const serviceReducer = (state = defaultState, action) => {
  
  switch (action.type) {
    
    case 'GET_SERVICES':
      return {
        ...state,
        ...action.payload
      }
    case 'SEARCH_SERVICES':
      return {
        ...state,
        services: [...action.payload]
      }
    default:
      return state;
  }
}

export default serviceReducer;