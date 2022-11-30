const initialRemoteState = [];

const RemoteReducer = (state = initialRemoteState, action) => {
  switch (action.type) {
    case 'Get_remoteTodo':
      return action.payload;
    case 'Toggle_remoteTodo':
      return state.map(todo =>
        todo.id === action.id ? {...todo, completed: !todo.completed} : todo,
      );
    default:
      return state;
  }
};
export default RemoteReducer;
