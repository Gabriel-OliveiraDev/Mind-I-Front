import React from 'react'
import { Tabs } from 'expo-router'

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen name='index' options={{ title: 'Início' }} />
      <Tabs.Screen name='login' options={{ title: 'login' }} />
      <Tabs.Screen name='register' options={{ title: 'register' }} />
      <Tabs.Screen name='function' options={{ title: 'function' }} />
      <Tabs.Screen name='config' options={{ title: 'config' }} />

    </Tabs>
  )
}