import { View, ScrollView, SafeAreaView } from 'react-native'
import {COLORS, SIZES} from './constants';
import {Welcome, Pokemons} from './components';

const Home = () => {
    return (
        <SafeAreaView
            style={{flex: 1, backgroundColor: COLORS.lightWhite}}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{flex: 1, padding: SIZES.medium}}>
                    <Welcome />
                    <Pokemons />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;