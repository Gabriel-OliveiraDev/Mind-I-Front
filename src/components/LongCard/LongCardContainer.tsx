import { View, StyleSheet } from 'react-native'
import React from 'react'

interface LongCardContainerProps {
  children: React.ReactNode
}

export default function LongCardContainer({ children }: LongCardContainerProps) {
  return (
    <View style={styles.container}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center'
  }
})