import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
  ViewStyle,
} from "react-native";
import React from "react";

interface ScrollBoxProps {
  children: React.ReactNode;
  style: ViewStyle;
}

export default function ScrollBox({ children, style }: ScrollBoxProps) {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View style={[{ flex: 1 }, style]}>{children}</View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
