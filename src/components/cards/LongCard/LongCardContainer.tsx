import { View, StyleSheet, ViewStyle } from 'react-native'
import React from 'react'

interface CardContainerProps {
  children: React.ReactNode
  style?: ViewStyle
}

export default function CardContainer({ children, style }: CardContainerProps) {
  return (
    <View style={[styles.container, style]}>
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