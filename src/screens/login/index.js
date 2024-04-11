import React, { useState } from 'react';
import { View, Text, TextInput, Button, useWindowDimensions } from 'react-native';
import { useTranslation } from 'react-i18next';

import tw from 'tailwind-react-native-classnames';

const LoginScreen = ({ navigation }) => {
  const { t } = useTranslation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dimensions = useWindowDimensions();
  const orientation = dimensions.width > dimensions.height ? 'landscape' : 'portrait';


  const containerStyles = tw.style(
    'flex-1 justify-center items-center p-5',
    orientation === 'landscape' ? 'bg-gray-400' : 'bg-gray-200'
  );

  return (
    <View style={containerStyles}>

      <Text style={tw`text-2xl mb-5`}>{t('login')}</Text>

      <TextInput
        style={tw`w-11/12 h-10 mb-3 border border-gray-300 rounded-md p-2.5`}
        placeholder={t('username')}
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={tw`w-11/12 h-10 mb-3 border border-gray-300 rounded-md p-2.5`}
        placeholder={t('password')}
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <Button
        title={t('login')}
        onPress={() => navigation.replace('Inicial', { username: username, message: 'Conectado como: ' })}
      />
    </View>
  );
};

export default LoginScreen;
