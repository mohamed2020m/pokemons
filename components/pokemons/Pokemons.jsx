import {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
  SectionList
} from 'react-native'


import styles from './PokemonStyle';

import {COLORS, SIZES} from '../../constants';
import PokemonCard from '../cards/PokemonCard';

import useFetch from '../../hooks/useFetch';

const Pokeymons = () => {
  const {data, isLoading, error} = useFetch();
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const handleEndReached = () => {
    // if (!loading) {
    //   setLoading(true);
    //   setPage(prevPage => prevPage + 1);
    //   setTimeout(() => {
    //     setLoading(false);
    //     data[0].data.push(
    //       { id: 11, title: `Card ${11 + (page - 1) * 10}` },
    //       { id: 12, title: `Card ${12 + (page - 1) * 10}` },
    //     );
    //   }, 1000);
    // }
    console.log("end")
  };

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
            <View style={{flex:1, justifyContent: 'center', alignItems:'center'}}>
              <ActivityIndicator size="large" colors={COLORS.primary} />
            </View>
          ) : error ? (
            <Text>Something went wrong</Text>
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
                      <View key={item?.id}>
                        {item && <PokemonCard item={item}/>}
                      </View>
                    ))}
                  </View>
                );
              }}
              scrollEnabled={false}
              onEndReached={handleEndReached}
              onEndReachedThreshold={0.5}
              ListFooterComponent={loading ? <ActivityIndicator size="large" color="#0000ff" /> : null}
            />
          )
        }
      </View>
    </View>
  )
}

export default Pokeymons;



{/* <FlatList
              data={data}
              renderItem={({item}) => (
                <PokemonCard
                  item={item}
                />
              )}
              numColumns={2}
              keyExtractor={(item) => item.id}
              contentContainerStyle={{columnGap:SIZES.medium}}
            /> */}



            // <SectionList
            //   sections={groupPokemonByType(data)}
            //   keyExtractor={(item, index) => item + index}
            //   renderItem={({item}) => (
            //     <View style={{ flex: 1, flexDirection: 'row' }}>
            //       <PokemonCard item={item}/>
            //     </View>
            //   )}
            //   renderSectionHeader= {({ section: { title } }) => (
            //     <View style={{ backgroundColor: '#f0f0f0', padding: 10 }}>
            //       <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{title}</Text>
            //     </View>
            //   )}
            // />