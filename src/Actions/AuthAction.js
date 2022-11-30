export const login = (email, password) => {
  return {
    type: 'LoginClick',
    payload: {email, password},
  };
};
