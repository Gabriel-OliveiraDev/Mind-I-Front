import { DimensionValue, TouchableOpacity, ViewStyle } from 'react-native'
import React from 'react'
import { colors } from '@/constants/colors'

interface LongCardRootProps {
  children: React.ReactNode
  background?: string
  height?: DimensionValue
  width?: DimensionValue
  onPress?: () => void
  onLongPress?: () => void
  disabled?: boolean
}

export default function LongCardRoot({ children, background, height, width, onPress, onLongPress, disabled }: LongCardRootProps) {

  const container: ViewStyle = {
    marginTop: 16,
    backgroundColor: background || colors.lightBlue,
    borderRadius: 8,
    width: width || '90%',
    height: height || 'auto',
    padding: 8,
    margin: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2, },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flexDirection: 'row',
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
