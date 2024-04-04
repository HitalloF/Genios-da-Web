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
    <View style={tw.style('flex-1 justify-center items-center p-5', {
      'bg-gray-200': orientation === 'portrait', 
      'bg-gray-400': orientation === 'landscape',
    })}>
       <Text style={tw`text-xl font-bold mb-4`}>{t('RecifeVivo')}</Text>
      <TouchableOpacity onPress={() => changeLanguage('en')}>
        
        <Image source={require('./en.png')} style={tw`w-12 h-7 m-2`} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => changeLanguage('pt')}>
        <Image source={require('./br.png')} style={tw`w-12 h-7 m-2`} />
      </TouchableOpacity>
  
      <TouchableOpacity 
        style={tw`bg-blue-500 py-2 px-5 rounded-md my-1 w-50 items-center`}
        onPress={() => navigation.navigate('Login')}  
      >
        <Text style={tw`text-white text-lg`}>{t('do_login')}</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={tw`bg-blue-500 py-2 px-5 rounded-md my-1 w-50 items-center`}
        onPress={() => navigation.navigate('SignUp')}
      >
        <Text style={tw`text-white text-lg`}>{t('signup')}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
