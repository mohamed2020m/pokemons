import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  FlatList
} from 'react-native'


import styles from './PokemonStyle';

import {COLORS, SIZES} from '../../constants';
import PokemonCard from '../cards/PokemonCard';

import useFetch from '../../hooks/useFetch';

const Pokeymons = () => {
  const {data, isLoading, error} = useFetch();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Pokemons</Text>
      </View>

      <View style={styles.cardsContainer}>
        {
          isLoading ? (
            <ActivityIndicator size="large" colors={COLORS.primary} />
          ) : error ? (
            <Text>Something went wrong</Text>
          ) : (
            <FlatList
              data={data}
              renderItem={({item}) => (
                <PokemonCard
                  item={item}
                />
              )}
              numColumns={2}
              keyExtractor={(item) => item.id}
              contentContainerStyle={{columnGap:SIZES.medium}}
            />
          )
        }
      </View>
    </View>
  )
}

export default Pokeymons;