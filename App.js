/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import store from './src/Store/Store';
import {Provider} from 'react-redux';
import {createAppContainer} from 'react-navigation';
import {createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import SignIn from './src/Containers/SignIn';
import LocalListScreen from './src/Containers/LocalListScreen';
import LocalCreateScreen from './src/Containers/LocalCreateScreen';
import LocalEditScreen from './src/Containers/LocalEditScreen';
import LocalDetailScreen from './src/Containers/LocalDetailScreen';
import RemoteListScreen from './src/Containers/RemoteListScreen';
import Icon from 'react-native-vector-icons/FontAwesome';

const Local_Todo = createStackNavigator({
  Local: LocalListScreen,
  LocalDetail: LocalDetailScreen,
  LocalCreate: LocalCreateScreen,
  LocalEdit: LocalEditScreen,
});
Local_Todo.navigationOptions = {
  title: 'Local Todo',
  tabBarIcon: <Icon name="list-ul" size={20} />,
};

const switchNavigator = createSwitchNavigator({
  Signin: SignIn,
  MainFlow: createBottomTabNavigator({
    Local_Todo,
    Remote: RemoteListScreen,
  }),
});
const TodoApp = createAppContainer(switchNavigator);
export default () => {
  return (
    <Provider store={store}>
      <TodoApp />
    </Provider>
  );
};
