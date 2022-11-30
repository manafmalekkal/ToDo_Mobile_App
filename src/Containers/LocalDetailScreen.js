import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector} from 'react-redux';

const LocalDetailScreen = ({navigation}) => {
  const List = useSelector(state => state.LocalReducer);

  const Id = navigation.getParam('id');

  const todo = List.find(todos => todos.id === Id);

  return (
    <View style={styles.container}>
      <Text style={styles.headingStyle}>Title:</Text>
      <Text style={styles.textStyle}>{todo.title}</Text>
      <Text style={styles.headingStyle}>Description:</Text>
      <Text style={styles.textStyle}>{todo.content}</Text>
    </View>
  );
};

LocalDetailScreen.navigationOptions = ({navigation}) => {
  return {
    headerRight: () => (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('LocalEdit', {id: navigation.getParam('id')});
        }}>
        <Icon name="pencil" size={35} />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  headingStyle: {
    fontSize: 20,
    marginBottom: 10,
    color: 'black',
  },
  textStyle: {
    fontSize: 15,
    marginBottom: 30,
    marginLeft: 10,
    color: 'black',
  },
  container: {
    margin: 17,
  },
});

export default LocalDetailScreen;
