import { Text, TextStyle } from 'react-native'
import React from 'react'

interface SubTitleTextProps {
  children: string
  style?: TextStyle
  size?: number
  color?: string
  black?: boolean
}

export default function SubTitleText({ children, style, color, size, black }: SubTitleTextProps) {
  black ? color = '#000' : color = '#fff'
  return (
    <Text style={[style, { fontSize: size || 18, color: color, }]}>{children}</Text>
  )
}