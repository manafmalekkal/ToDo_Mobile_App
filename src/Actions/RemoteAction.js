//import link from '../api/link';
import axios from 'axios';

export const GetRemoteTodo = () => async dispatch => {
  try {
    //const response = await link.get('/1');
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/todos',
    );
    dispatch({type: 'Get_remoteTodo', payload: response.data});
  } catch (err) {
    console.log(err);
  }
};

export const ToggleRemoteTodo = id => {
  return {
    type: 'Toggle_remoteTodo',
    id,
  };
};
