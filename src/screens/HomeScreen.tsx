import React from 'react'
import ScrollBox from '@/components/ScrollBox/ScrollBox'
import { CText } from '@/components/Text'
import { LongCard } from '@/components/LongCard'
import CardRoot from '@/components/card/CardRoot'
import CardContainer from '@/components/card/CardContainer'

export default function HomeScreen() {
  return (
    <ScrollBox>
      <CardRoot>
        <CText.Title>Home</CText.Title>
        <CardContainer>
          <CText.Title>Home</CText.Title>
          <CText.Title>Home</CText.Title>
        </CardContainer>
        <CText.Title>Home</CText.Title>
      </CardRoot>
    </ScrollBox>
  )
}