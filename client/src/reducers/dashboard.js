const defaultState = {
  services: []
}

const dashboardReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'GET_COMPANY':
      return {
        ...state,
        ...action.payload
      }
    case 'CREATE_SERVICE':
      return {
        ...state,
        services: [...state.services, action.payload]
      }
    default:
      return state;
  }
}

export default dashboardReducer;