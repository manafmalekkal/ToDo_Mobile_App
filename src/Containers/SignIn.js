import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from 'react-native-elements';
import {Input} from 'react-native-elements';
import {Button} from 'react-native-elements';
import Spacer from '../Components/Spacer';
import {useDispatch} from 'react-redux';
import {login} from '../Actions/AuthAction';

const SignIn = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const pressHandler = () => {
    if (email === 'manaf' && password === 'manaf') {
      // eslint-disable-next-line no-sequences
      dispatch(login(email, password)), navigation.navigate('Local');
    } else {
      // eslint-disable-next-line no-alert
      alert('please Enter valid Email & Password');
    }
  };

  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3>Login for Todo App</Text>
      </Spacer>
      <Spacer>
        <Input
          label="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Input
          label="Password"
          value={password}
          onChangeText={setPassword}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
        />
      </Spacer>

      <Spacer>
        <Button title="Sigin" onPress={pressHandler} />
      </Spacer>
    </View>
  );
};

SignIn.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    flex: 1,
    justifyContent: 'center',
    marginTop: 90,
    marginLeft: 42,
    position: 'absolute',
  },
});

export default SignIn;
