import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, useWindowDimensions } from 'react-native';
import { useTranslation } from 'react-i18next';

const Inicial = ({ navigation }) => {
  const { t } = useTranslation();

  const dimensions = useWindowDimensions();
  const orientation = dimensions.width > dimensions.height ? 'landscape' : 'portrait';

  return (
    <View style={orientation === 'portrait' ? styles.containerPortrait : styles.containerLandscape}>
      <Text style={styles.welcomeText}>{t('welcome')}</Text>
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

export default Inicial;