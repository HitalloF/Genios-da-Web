import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, useWindowDimensions, Dimensions } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../context/LanguageContext';
const HomeScreen = ({ navigation }) => {
  const { changeLanguage } = useLanguage();
  const { t } = useTranslation();
  const dimensions = useWindowDimensions();
  const orientation = dimensions.width > dimensions.height ? 'landscape' : 'portrait';

  const containerStyles = [
    styles.container,
    orientation === 'landscape' ? styles.landscapeBackground : styles.portraitBackground,
  ];

  return (
    <View style={containerStyles}>
      <TouchableOpacity onPress={() => changeLanguage('en')}>
        <Image source={require('./en.png')} style={styles.flag} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => changeLanguage('pt')}>
        <Image source={require('./br.png')} style={styles.flag} />
      </TouchableOpacity>
      <Text style={styles.welcomeText}>{t('index')}</Text>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.buttonText}>{t('do_login')}</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('SignUp')}
      >
        <Text style={styles.buttonText}>{t('signup')}</Text>
      </TouchableOpacity>
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
  welcomeText: {
    fontSize: 22,
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 5,
    width: 200,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  flag: {
    width: 50,
    height: 30,
    margin: 10,
  },
});

export default HomeScreen;
