import React from 'react';
import LocalCreateForm from '../Components/LocalCreateForm';
import {AddTodo} from '../Actions/LocalAction';
import {useDispatch} from 'react-redux';

const LocalCreateScreen = ({navigation}) => {
  const dispatch = useDispatch();

  return (
    <LocalCreateForm
      onSubmit={(title, content) => {
        // eslint-disable-next-line no-sequences
        dispatch(AddTodo(title, content)), navigation.navigate('Local');
      }}
    />
  );
};

export default LocalCreateScreen;
