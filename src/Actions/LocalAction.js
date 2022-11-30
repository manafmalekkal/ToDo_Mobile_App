let nextId = 1;
export const AddTodo = (title, content) => {
  return {
    type: 'Add_LocalTodo',
    id: nextId++,
    title,
    content,
  };
};

export const ToggleTodo = id => {
  return {
    type: 'toggle_LocalTodo',
    id,
  };
};

export const DeleteTodo = id => {
  return {
    type: 'Delete_LocalTodo',
    id,
  };
};

export const EditTodo = (id, title, content) => {
  return {
    type: 'edit_LocalTodo',
    id,
    title,
    content,
  };
};
