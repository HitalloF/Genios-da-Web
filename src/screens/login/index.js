import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Dimensions, useWindowDimensions } from 'react-native';
import { useTranslation } from 'react-i18next';

const LoginScreen = ({ navigation }) => {
  const { t } = useTranslation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dimensions = useWindowDimensions();
  const orientation = dimensions.width > dimensions.height ? 'landscape' : 'portrait';

  const containerStyles = [
    styles.container,
    orientation === 'landscape' ? styles.landscapeBackground : styles.portraitBackground,
  ];

  return (
    <View style={containerStyles}>
      <Text style={styles.title}>{t('login')}</Text>
      <TextInput
        style={styles.input}
        placeholder={t('login')}
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder={t('password')}
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <Button title={t('login')} onPress={() => navigation.replace('About')} />
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

export default LoginScreen;
