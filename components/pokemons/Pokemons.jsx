import {useState} from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  SectionList
} from 'react-native'


import styles from './PokemonStyle';

import {COLORS, SIZES} from '../../constants';
import PokemonCard from '../cards/PokemonCard';

import useFetch from '../../hooks/useFetch';

const Pokeymons = () => {
  const {data, isLoading, error} = useFetch();


  function groupPokemonByType(data) {
    const groupedPokemon = data.reduce((acc, obj) => {
      obj.type.forEach((type) => {
        if (!acc[type]) {
          acc[type] = [];
        }
        acc[type].push(obj);
      });
      return acc;
    }, {});

    const result = Object.keys(groupedPokemon).map((type) => ({
      title: type,
      data: groupedPokemon[type],
    }));
    return result;
  }

  const renderSectionHeader = ({ section: { title } }) => (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionHeaderText}>{title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>

      <View style={styles.horizontalLine} />

      <View style={styles.header}>
        <Text style={styles.headerTitle}>Pokemons</Text>
      </View>

      <View>
        {
          isLoading ? (
            <View style={styles.loader}>
              <ActivityIndicator size="large" colors={COLORS.primary} />
            </View>
          ) : error ? (
            <View style={{flex:1}}>
              <Text style={{textAlign:'center'}}>Something went wrong :(</Text>
            </View>
          ) : (
            <SectionList
              sections={groupPokemonByType(data)}
              keyExtractor={(item, index) => item + index}
              renderSectionHeader={renderSectionHeader}
              contentContainerStyle={styles.container}
              renderItem={({ item, index, section }) => {
                if (index % 2 !== 0) {
                  return null;
                }
                const items = [item, section.data[index + 1]];
                return (
                  <View style={styles.row}>
                    {items.map(item => (
                      item && <PokemonCard key={item?.id} item={item}/>
                    ))}
                  </View>
                );
              }}
              scrollEnabled={false}
            />
          )
        }
      </View>
    </View>
  )
}

export default Pokeymons;