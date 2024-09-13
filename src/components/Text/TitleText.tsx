import { Text, TextStyle } from 'react-native'
import React from 'react'

interface TitleTextProps {
  children: string
  style?: TextStyle
  size?: number
  color?: string
  black?: boolean
}

export default function TitleText({ children, style, color, size, black }: TitleTextProps) {
  black ? color = '#000' : color = '#fff'
  return (
    <Text style={[{ fontSize: size || 20, color: color, fontWeight: 'bold' }, style]}>{children}</Text>
  )
}