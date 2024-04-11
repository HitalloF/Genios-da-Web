
import React from 'react';
import { View, Text, FlatList, Image, useWindowDimensions } from 'react-native';
import tw from 'tailwind-react-native-classnames';

import jeny from '../../assets/images/jeny.jpeg'
import hitallo from '../../assets/images/hitallo.jpeg'
import theu from '../../assets/images/theu.jpeg'
import alanturing from '../../assets/images/alanturing.png'

const membros = [
  {
    nome: "Jenyffer Mery",
    matricula: "01599642",
    foto: jeny,
    funcao: "HTML E CSS"
  },
  {
    nome: "Hítallo Freitas",
    matricula: "01620638",
    foto: hitallo,
    funcao: "Revisor e JS"
  },
  {
    nome: "Matheus Lemos",
    matricula: "01608078",
    foto: theu,
    funcao: "HTML E CSS"
  },
  {
    nome: "Bruno Soares",
    sobrenome: "da Silva",
    matricula: "11000133",
    foto: alanturing,
    funcao: "Textos"
  },
  {
    nome: "Gabriel do Vale",
    sobrenome: "Alcoforado Braga",
    matricula: "24009962",
    foto: alanturing,
    funcao: "HTML e CSS"
  },
  {
    nome: "Guilherme Pietro",
    sobrenome: "Luna Diniz",
    matricula: "01576841",
    foto: alanturing,
    funcao: "Textos"
  },
  {
    nome: "Luiz Vinicius",
    sobrenome: "Lima da Silva",
    matricula: "01603161",
    foto: alanturing,
    funcao: "Textos"
  },
  {
    nome: "Pedro Albuquerque",
    sobrenome: "Macedo",
    matricula: "01602996",
    foto: alanturing,
    funcao: "tradução"
  },
  {
    nome: "Ronaldo de Souza Paixão",
    sobrenome: "Junior",
    matricula: "01604034",
    foto: alanturing,
    funcao: "tradução"
  }
];

const Equipe = () => {
  const dimensions = useWindowDimensions();
  const orientation = dimensions.width > dimensions.height ? 'landscape' : 'portrait';


  const renderItem = ({ item }) => (
    <View style={tw.style('flex-1 justify-center items-center p-8', {
      'bg-gray-200': orientation === 'portrait',
      'bg-gray-400': orientation === 'landscape',
    })}>
      <Image source={item.foto} style={tw`w-16 h-16 rounded-full`} />
      <View style={tw`ml-4`}>
        <Text style={tw`text-lg font-semibold`}>{item.nome}</Text>
        <Text style={tw`text-sm`}>Matrícula: {item.matricula}</Text>
        <Text style={tw`text-sm`}>Função: {item.funcao}</Text>
      </View>
    </View>
  );

  return (
    <FlatList
      data={membros}
      renderItem={renderItem}
      keyExtractor={item => item.matricula}
    />
  );
};

export default Equipe;
