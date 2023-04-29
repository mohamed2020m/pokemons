import {Modal, Text, View, Button} from 'react-native';
import styles from './PokemonInfoStyle';

const PokemonInfo = ({item, modalVisible, toggleModal}) => {
  return (
    <View >
      <Modal
        visible={modalVisible}
        animationType="slide"
        onRequestClose={toggleModal}
      >
        <View style={styles.modalView}>
          <View style={styles.detail}>
            <Text style={styles.textHStyle}>Weight: </Text>
            <Text style={styles.textStyle}>{item.weight}</Text>
          </View>
          <View style={styles.detail}>
            <Text style={styles.textHStyle}>Candy:</Text>
            <Text style={styles.textStyle}>{item.candy}</Text>
          </View>
          <View style={styles.detail}>
            <Text style={styles.textHStyle}>Candy Count:</Text>
            <Text style={styles.textStyle}>{item.candy_count ? item.candy_count : 0}</Text>
          </View>
          <View style={styles.detail}>
            <Text style={styles.textHStyle}>Egg:</Text>
            <Text style={styles.textStyle}>{item.egg}</Text>
          </View>
          <View style={styles.detail}>
            <Text style={styles.textHStyle}>Spawn Chance:</Text>
            <Text style={styles.textStyle}>{item.spawn_chance}</Text>
          </View>
          <View style={styles.detail}>
            <Text style={styles.textHStyle}>Avg Spawns:</Text>
            <Text style={styles.textStyle}>{item.avg_spawns}</Text>
          </View>
          <View style={styles.detail}>
            <Text style={styles.textHStyle}>Pawn Time:</Text>
            <Text style={styles.textStyle}>{item.spawn_time}</Text>
          </View>
          <View style={styles.detail}>
            <Text style={styles.textHStyle}>Weaknesses:</Text>
            <Text style={styles.textStyle}>
              {
                item.weaknesses.map((w, index) => (
                  <View key={index}>
                    <Text>{w}, </Text>
                  </View>
                ))
              }
            </Text>
          </View>
          <View style={styles.detail}>
            <Text style={styles.textHStyle}>Type:</Text>
            <Text style={styles.textStyle}>
              {
                item.type.map((t, index) => (
                  <View key={index}>
                    <Text>{t}, </Text>
                  </View>
                ))
              }
            </Text>
          </View>
          <View style={styles.detail}>
            <Text style={styles.textHStyle}>Prev Evolution:</Text>
            <Text style={styles.textStyle}>
              {
                item.prev_evolution ?
                  item.prev_evolution?.map((t, index) => (
                    <View key={index}>
                      <Text>{t.name}, </Text>
                    </View>
                  ))
                  :
                  <View>
                    <Text>---</Text>
                  </View>
              }
            </Text>
          </View>
          <View style={styles.detail}>
            <Text style={styles.textHStyle}>Next Evolution:</Text>
            <Text style={styles.textStyle}>
              {
                item.next_evolution ?
                  item.next_evolution?.map((t, index) => (
                    <View key={index}>
                      <Text>{t.name}, </Text>
                    </View>
                  ))
                  :
                  <View>
                    <Text>---</Text>
                  </View>
              }
            </Text>
          </View>
          <View style={styles.closeBtn}>
            <Button title="Close" onPress={toggleModal} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default PokemonInfo;