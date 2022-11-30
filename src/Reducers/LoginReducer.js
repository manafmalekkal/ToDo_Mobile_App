const LoginReducer = (state = [], action) => {
  switch (action.type) {
    case 'LoginClick':
      return [
        ...state,
        {email: action.payload.email, password: action.payload.password},
      ];
    default:
      return state;
  }
};
export default LoginReducer;
