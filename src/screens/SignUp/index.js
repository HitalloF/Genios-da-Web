import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Dimensions, useWindowDimensions } from 'react-native';
import { useTranslation } from 'react-i18next';

const SignUpScreen = ({ navigation }) => {
  const { t } = useTranslation();
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const dimensions = useWindowDimensions();
  const orientation = dimensions.width > dimensions.height ? 'landscape' : 'portrait';

  const containerStyles = [
    styles.container,
    orientation === 'landscape' ? styles.landscapeBackground : styles.portraitBackground,
  ];

  return (
    <View style={containerStyles}>
      <Text style={styles.title}>{t('signup')}</Text>
      <TextInput
        style={styles.input}
        placeholder={t('username')}
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder={t('password')}
        secureTextEntry={true}
        value={senha}
        onChangeText={setSenha}
      />
      <Button title={t('signup')} onPress={() => navigation.replace('Login')} />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  landscapeBackground: {
    backgroundColor: '#a9a9a9',
  },
  portraitBackground: {
    backgroundColor: '#dcdcdc',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: Dimensions.get('window').width - 40,
    height: 40,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
  },
});

export default SignUpScreen;
