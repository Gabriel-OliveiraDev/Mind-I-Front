import { Text, TextStyle } from 'react-native'
import React from 'react'

interface MinimalTextProps {
  children: string
  style?: TextStyle
  size?: number
  color?: string
  black?: boolean
}

export default function MinimalText({ children, style, color, size, black }: MinimalTextProps) {
  black ? color = '#000' : color = '#fff'
  return (
    <Text style={[style, { fontSize: size || 14, color: color }]}>{children}</Text>
  )
}