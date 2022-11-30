import React, {useEffect} from 'react';
import {View, StyleSheet, Text, FlatList, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from 'react-redux';
import {ToggleRemoteTodo} from '../Actions/RemoteAction';
import {GetRemoteTodo} from '../Actions/RemoteAction';

const RemoteListScreen = () => {
  const dispatch = useDispatch();
  const list = useSelector(state => state.RemoteReducer);

  useEffect(() => {
    dispatch(GetRemoteTodo());
  }, [dispatch]);

  return (
    <View>
      <Text style={styles.mainTextStyle}>Welcome to Remote Todo</Text>
      <FlatList
        data={list}
        keyExtractor={todos => todos.id}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              style={styles.toggleStyle}
              onPress={() => {
                dispatch(ToggleRemoteTodo(item.id));
              }}>
              {item.completed ? (
                <View style={styles.rowDone}>
                  <Text style={styles.text}>
                    {item.id}-{item.title}-(done)
                  </Text>
                </View>
              ) : (
                <View style={styles.rowNotDone}>
                  <Text style={styles.text}>
                    {item.id}-{item.title}
                  </Text>
                </View>
              )}
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

RemoteListScreen.navigationOptions = ({navigation}) => {
  return {
    title: 'Remote',
    tabBarIcon: <Icon name="remote" size={20} />,
    headerShown: true,
    headerRight: () => {
      return (
        <View style={styles.headerStyle}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Signin');
            }}>
            <Icon name="logout" size={30} />
          </TouchableOpacity>
        </View>
      );
    },
  };
};

const styles = StyleSheet.create({
  rowDone: {
    flexDirection: 'row',
    backgroundColor: '#D3D3D3',
    padding: 10,
    margin: 10,
  },
  rowNotDone: {
    flexDirection: 'row',
    backgroundColor: '#87CEEB',
    padding: 10,
    margin: 10,
  },
  text: {
    fontSize: 18,
    flex: 4,
    color: 'black',
  },
  icon: {
    fontSize: 25,
  },
  mainTextStyle: {
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 10,
    color: 'black',
  },
  toggleStyle: {
    flex: 1,
  },
  headerStyle: {
    marginRight: 13,
  },
});

export default RemoteListScreen;
