import React from 'react';
import {View, StyleSheet, Text, FlatList, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {DeleteTodo} from '../Actions/LocalAction';
import {ToggleTodo} from '../Actions/LocalAction';
import {useDispatch, useSelector} from 'react-redux';

const LocalListScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const list = useSelector(state => state.LocalReducer);

  return (
    <View>
      <Text style={styles.mainTextStyle}>Welcome to Local Todo App</Text>
      <FlatList
        data={list}
        keyExtractor={todos => todos.id}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('LocalDetail', {id: item.id});
              }}>
              {item.completed ? (
                <View style={styles.rowDone}>
                  <Text style={styles.text}>
                    {item.id}-{item.title}-(done)
                  </Text>
                  <TouchableOpacity
                    style={styles.toggleStyle}
                    onPress={() => {
                      dispatch(ToggleTodo(item.id));
                    }}>
                    <Icon name="checkmark-done-circle" style={styles.icon} />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.toggleStyle}
                    onPress={() => {
                      navigation.navigate('LocalEdit', {id: item.id});
                    }}>
                    <Icon name="ios-pencil" style={styles.icon} />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.deleteStyle}
                    onPress={() => {
                      dispatch(DeleteTodo(item.id));
                    }}>
                    <Icon name="trash-bin" style={styles.icon} />
                  </TouchableOpacity>
                </View>
              ) : (
                <View style={styles.rowNotDone}>
                  <Text style={styles.text}>
                    {item.id}-{item.title}
                  </Text>
                  <TouchableOpacity
                    style={styles.toggleStyle}
                    onPress={() => {
                      dispatch(ToggleTodo(item.id));
                    }}>
                    <Icon name="checkmark-done-circle" style={styles.icon} />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.toggleStyle}
                    onPress={() => {
                      navigation.navigate('LocalEdit', {id: item.id});
                    }}>
                    <Icon name="ios-pencil" style={styles.icon} />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.deleteStyle}
                    onPress={() => {
                      dispatch(DeleteTodo(item.id));
                    }}>
                    <Icon name="trash-bin" style={styles.icon} />
                  </TouchableOpacity>
                </View>
              )}
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

LocalListScreen.navigationOptions = ({navigation}) => {
  return {
    headerRight: () => {
      return (
        <View style={styles.headerStyle}>
          <TouchableOpacity
            style={styles.createStyle}
            onPress={() => {
              navigation.navigate('LocalCreate');
            }}>
            <Icon name="create" size={27} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Signin');
            }}>
            <Icon name="exit" size={30} />
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
  deleteStyle: {
    flex: 1,
  },
  toggleStyle: {
    flex: 1,
  },
  headerStyle: {
    flexDirection: 'row',
    marginRight: 13,
  },
  createStyle: {
    marginRight: 15,
  },
});

export default LocalListScreen;
