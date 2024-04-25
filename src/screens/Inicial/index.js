import React from 'react';
import { View, Text, Image, FlatList, useWindowDimensions, Button } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { useNavigation } from '@react-navigation/native';

const eventos = [
  {
    id: 1,
    titulo: "Carnaval do Recife Antigo",
    descricao: "Venha vivenciar um dos carnavais mais vibrantes do Brasil, com frevo, maracatu e atrações incríveis pelas ruas históricas do Recife Antigo.",
    imagem: "carnaval_recife_antigo.jpg"
  },
  {
    id: 2,
    titulo: "Festival Recife de Teatro Nacional",
    descricao: "Um festival que reúne peças de teatro de todo o país, destacando a rica produção cultural e a diversidade do teatro brasileiro.",
    imagem: "festival_teatro_recife.jpg"
  },

];

const Inicial = ({ route }) => {
  const { username, message } = route.params;
  const dimensions = useWindowDimensions();
  const orientation = dimensions.width > dimensions.height ? 'landscape' : 'portrait';
  const navigation = useNavigation();

  const renderEvento = ({ item }) => (
    <View style={tw.style('m-2 p-4 bg-white rounded-lg', { width: dimensions.width / 2 - 24 })}>
      <Text style={tw`text-lg font-bold mt-2`}>{item.titulo}</Text>
      <Text style={tw`text-sm`}>{item.descricao}</Text>

    </View>
  );

  return (
    <View style={tw.style('flex-1', { backgroundColor: orientation === 'portrait' ? '#dcdcdc' : '#a9a9a9' })}>

      <Button
        title="About"
        onPress={() => navigation.navigate('About')}
      />
      <Button
        title="Equipe"
        onPress={() => navigation.navigate('Equipe')}
      />
      <Text style={tw`text-lg font-bold mt-2`}>{message}{username}</Text>
      <FlatList
        data={eventos}
        renderItem={renderEvento}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        contentContainerStyle={tw`p-2`}
      />

    </View>
  );
};

export default Inicial;