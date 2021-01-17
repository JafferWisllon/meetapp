/* eslint-disable import/no-unresolved */
/* eslint-disable no-use-before-define */
import React from 'react';
import {
  Button,
  View,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';

const SignUp: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../assets/images/logo.png')}
      />

      <TextInput
        style={styles.input}
        placeholder="Seu nome completo"
        placeholderTextColor="#ccc"
      />
      <TextInput
        style={styles.input}
        placeholder="Digite seu e-mail"
        placeholderTextColor="#ccc"
      />

      <TextInput
        style={styles.input}
        placeholder="Sua senha secreta"
        placeholderTextColor="#ccc"
      />

      <View style={styles.button}>
        <Button
          onPress={() => console.log('entrar')}
          title="Entrar"
          color="#e5556e"
        />
      </View>

      <TouchableOpacity>
        <Text style={styles.link}>Ja tenho login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    marginTop: 50,
    marginBottom: 42,
  },
  input: {
    height: 50,
    width: '90%',
    borderWidth: 0,
    fontSize: 18,
    paddingRight: 15,
    paddingLeft: 15,
    color: '#cccccc',
  },
  button: {
    marginTop: 15,
    height: 50,
    width: '90%',
    borderRadius: 4,
    borderWidth: 0,
    color: '#fff',
    fontSize: 18,
    fontWeight: '400',
  },
  link: {
    color: '#ffffff',
    marginTop: 30,
    fontWeight: '300',
    opacity: 0.7,
  },
});

export default SignUp;
