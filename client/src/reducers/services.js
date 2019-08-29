const serviceReducer = (state = [], action) => {
  
  switch (action.type) {
    
    case 'GET_SERVICES':
      console.log('dis datate', state)
      return {
        ...state,
        ...action.payload
      }
    default:
      return state;
  }
}

export default serviceReducer;