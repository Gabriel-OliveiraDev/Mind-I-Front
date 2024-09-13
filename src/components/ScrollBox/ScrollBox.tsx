import { KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native'
import React from 'react'

interface ScrollBoxProps {
  children: React.ReactNode
}

export default function ScrollBox({ children }: ScrollBoxProps) {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View style={{ alignItems: 'center', }}>
          {children}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}