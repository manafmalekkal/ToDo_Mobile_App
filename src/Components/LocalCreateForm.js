import React, {useState} from 'react';
import {View, StyleSheet, Text, Button, TextInput} from 'react-native';

const LocalCreateForm = ({onSubmit, initialValues}) => {
  const [title, SetTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Enter Title:</Text>
      <TextInput
        value={title}
        onChangeText={text => {
          SetTitle(text);
        }}
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.inputStyle}
      />
      <Text style={styles.textStyle}>Enter description:</Text>
      <TextInput
        value={content}
        onChangeText={text => {
          setContent(text);
        }}
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.inputStyle}
      />
      <Button
        title="Save Todo"
        onPress={() => {
          onSubmit(title, content);
        }}
      />
    </View>
  );
};

LocalCreateForm.defaultProps = {
  initialValues: {
    title: '',
    content: '',
  },
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 18,
    marginTop: 20,
    marginBottom: 10,
    marginHorizontal: 10,
  },
  inputStyle: {
    borderColor: 'black',
    borderWidth: 2,
    marginHorizontal: 10,
    padding: 6,
    marginBottom: 20,
    height: 50,
  },
  container: {
    marginHorizontal: 10,
  },
});

export default LocalCreateForm;
