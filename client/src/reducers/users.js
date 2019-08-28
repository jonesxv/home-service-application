const userReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_USERS':
      return {
        ...state,
        users: action.users
      };
      default:
        return state;
  }
};

export default userReducer;