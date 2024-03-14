import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';

const Inicial = ({ navigation }) => {
  const { t } = useTranslation();

  const dimensions = useWindowDimensions();
  const orientation = dimensions.width > dimensions.height ? 'landscape' : 'portrait';

  const containerStyles = [
    styles.container,
    orientation === 'landscape' ? styles.landscapeBackground : styles.portraitBackground,
  ];
  
  return (
    <View style={containerStyles}>
      <Text style={styles.hello}>Hello</Text>
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
  hello: {
    fontSize: 24,
    marginBottom: 20,
  }
});

export default Inicial;
