import React, {useState} from 'react';

import {View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './PokemonCardStyle'

import { checkImageURL } from '../../utils';
import PokemonInfo from '../pokemonDetails/PokemonInfo';


const PokemonCard = ({item}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={toggleModal}
    >
      <PokemonInfo
        item={item}
        modalVisible={modalVisible}
        toggleModal={toggleModal}
      />

      <View
        style={styles.logoContainer}
      >
        <Image
          source={{
            uri : checkImageURL(item.img)
              ? item.img
              : 'https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg'
          }}
          resizeMode="contain"
          style={styles.logoImage}
        />
      </View>

      <Text
        style={styles.pokemonName}
        nubmerOfLines={1}
      >
        {item.name}
      </Text>
    </TouchableOpacity>
  )
}

export default PokemonCard;
