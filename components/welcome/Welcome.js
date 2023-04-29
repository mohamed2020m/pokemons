import { View, Text } from 'react-native'
import React from 'react'
import styles from './WelcomeStyle';

const Welcome = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        Welcome To Pokemon App
      </Text>
    </View>
  )
}

export default Welcome;