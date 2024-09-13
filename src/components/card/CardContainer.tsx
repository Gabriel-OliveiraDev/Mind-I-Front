import { View, StyleSheet } from 'react-native'
import React from 'react'

interface CardContainerProps {
  children: React.ReactNode
}

export default function CardContainer({ children }: CardContainerProps) {
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
    alignItems: 'center',
    flexDirection: 'row'
  }
})