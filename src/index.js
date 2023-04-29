// import {useState} from 'react'
import { View, ScrollView, SafeAreaView } from 'react-native'
// import {Stack, useRouter} from 'expo-router';

import {COLORS} from '../constants';

import {Welcome, Pokemons} from '../components';

const Home = () => {
    return (
        <SafeAreaView
            style={{flex: 1, backgroundColor: COLORS.lightWhite}}>
            {/* <Stack.Screen
                options={{
                    headerStyle: {backgroundColor: COLORS.lightWhite},
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn
                            iconUrl={icons.menu}
                            dimension="60%"
                        />
                    ),
                    headerRight: () => (
                        <ScreenHeaderBtn
                            iconUrl={images.profile}
                            dimension="100%"
                        />
                    ),
                    headerTitle: ""
                }}
            /> */}
            <ScrollView showsVerticalScrollIndicator={false}>
                <View
                    style={{flex: 1, padding: SIZES.medium}}
                >
                    <Welcome />
                    {/* <Pokemons /> */}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;