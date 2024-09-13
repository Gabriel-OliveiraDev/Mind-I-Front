import { View, Text, TouchableOpacity, DimensionValue, ViewStyle } from 'react-native'
import React from 'react'
import { colors } from '@/constants/colors'

interface CardRootProps {
  children: React.ReactNode
  background?: string
  height?: DimensionValue
  width?: DimensionValue
  onPress?: () => void
  onLongPress?: () => void
  disabled?: boolean
}

export default function CardRoot({ children, background, height, width, onPress, onLongPress, disabled }: CardRootProps) {
  const container: ViewStyle = {
    marginTop: 16,
    backgroundColor: background || colors.lightBlue,
    borderRadius: 8,
    width: width || 'auto',
    height: height || 'auto',
    padding: 8,
    margin: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2, },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center'
  }

  return (
    <TouchableOpacity
      style={container}
      onPress={onPress}
      onLongPress={onLongPress}
      activeOpacity={0.6}
      disabled={disabled}
    >
      {children}
    </TouchableOpacity>
  )
}