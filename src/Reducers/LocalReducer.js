const initialState = [
  {
    id: 0,
    title: 'Initial Todo',
    content: 'Initial Todo description',
    completed: false,
  },
];

const LocalReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'Add_LocalTodo':
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          content: action.content,
          completed: false,
        },
      ];
    case 'toggle_LocalTodo':
      return state.map(todo =>
        todo.id === action.id ? {...todo, completed: !todo.completed} : todo,
      );
    case 'Delete_LocalTodo':
      return state.filter(todo => todo.id !== action.id);
    case 'edit_LocalTodo':
      return state.map(todo =>
        todo.id === action.id
          ? {
              ...todo,
              id: action.id,
              title: action.title,
              content: action.content,
            }
          : todo,
      );
    default:
      return state;
  }
};
export default LocalReducer;
