import React from 'react'
import ScrollBox from '@/components/ScrollBox/ScrollBox'
import { CText } from '@/components/Text'
import { LongCard } from '@/components/cards/LongCard'
import { Card } from '@/components/cards/card'

export default function HomeScreen() {
  return (
    <ScrollView>
      <LongCard.Root>
        <LongCard.Container>
          <CText.Title>Home</CText.Title>
        </LongCard.Container>
      </LongCard.Root>
    </ScrollView>
  )
}