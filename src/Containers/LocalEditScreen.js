import React from 'react';
import LocalCreateForm from '../Components/LocalCreateForm';
import {useSelector, useDispatch} from 'react-redux';
import {EditTodo} from '../Actions/LocalAction';

const LocalEditScreen = ({navigation}) => {
  const Id = navigation.getParam('id');
  const dispatch = useDispatch();
  const list = useSelector(state => state.LocalReducer);

  const todos = list.find(todo => todo.id === Id);

  return (
    <LocalCreateForm
      initialValues={{title: todos.title, content: todos.content}}
      onSubmit={(title, content) => {
        dispatch(EditTodo(Id, title, content));
        navigation.pop();
      }}
    />
  );
};

export default LocalEditScreen;
