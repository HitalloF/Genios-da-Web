import React from 'react';
import { View, Text, Image, TouchableOpacity, useWindowDimensions } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../context/LanguageContext';

const HomeScreen = ({ navigation }) => {
  const { changeLanguage } = useLanguage();
  const { t } = useTranslation();
  const dimensions = useWindowDimensions();
  const orientation = dimensions.width > dimensions.height ? 'landscape' : 'portrait';

  return (
    <View style={tw.style('flex-1 justify-center items-center p-8', {
      'bg-gray-200': orientation === 'portrait',
      'bg-gray-400': orientation === 'landscape',
    })}>
      <Text style={tw`text-3xl font-bold mb-8`}>{t('RecifeVivo')}</Text>

      <TouchableOpacity onPress={() => changeLanguage('en')}>
        <Image source={require('./en.png')} style={tw`w-12 h-7 m-2`} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => changeLanguage('pt')}>
        <Image source={require('./br.png')} style={tw`w-12 h-7 m-2`} />
      </TouchableOpacity>

      <TouchableOpacity
        style={tw`bg-blue-600 py-3 w-40 rounded-lg my-2 items-center justify-center`}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={tw`text-white text-xl`}>{t('do_login')}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={tw`bg-blue-600 py-3 w-40 rounded-lg my-2 items-center justify-center`}
        onPress={() => navigation.navigate('SignUp')}
      >
        <Text style={tw`text-white text-xl`}>{t('signup')}</Text>
      </TouchableOpacity>
    </View>

  );
};

export default HomeScreen;
