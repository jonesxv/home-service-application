const dashboardReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_COMPANY':
      return {
        ...state,
        ...action.payload
      }
  
    default:
      return state;
  }
}

export default dashboardReducer;