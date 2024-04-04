import React from 'react';
import { View, Text, ScrollView, useWindowDimensions } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { useTranslation } from 'react-i18next';



const About = () => {
  const { t } = useTranslation();
  const dimensions = useWindowDimensions();
  const orientation = dimensions.width > dimensions.height ? 'landscape' : 'portrait';

  const containerStyles = tw.style(
    'flex-1 p-4',
    orientation === 'landscape' ? 'bg-gray-400' : 'bg-gray-200'
  );



  return (
    <ScrollView style={containerStyles} contentContainerStyle={tw`pb-4`}>
      <Text style={tw`text-xl font-bold mb-4`}>{t('RecifeVivo')}</Text>
      
      <Text style={tw`text-lg font-semibold mb-2`}>{t('HabitaçõesAtraentes')}</Text>
      <Text style={tw`text-base mb-4`}>{t('HabitaçõesAtraentestxt')}</Text>
      
      <Text style={tw`text-lg font-semibold mb-2`}>{t('AtividadesComerciaisVibrantes')}</Text>
      <Text style={tw`text-base mb-4`}>{t('AtividadesComerciaisVibrantestxt')}</Text>
      
      <Text style={tw`text-lg font-semibold mb-2`}>{t('TurismoEncantador')}</Text>
      <Text style={tw`text-base mb-4`}>{t('TurismoEncantadortxt')}</Text>
      
      <Text style={tw`text-lg font-semibold mb-2`}>{t('CulturaViva')}</Text>
      <Text style={tw`text-base mb-4`}>{t('CulturaVivatxt')}</Text>
    </ScrollView>
  );
};

export default About;
