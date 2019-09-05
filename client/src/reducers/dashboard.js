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
    case 'UPDATE_COMPANY':
      return {
        ...state,
        name: action.payload.name,
        imageUrl: action.payload.imageUrl
      }
    default:
      return state;
  }
}

export default dashboardReducer;