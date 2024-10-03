import { DimensionValue, View, ViewStyle } from 'react-native';
import React from 'react';
import { colors } from '@/constants/colors';

interface LongCardRootProps {
  children: React.ReactNode;
  background?: string;
  height?: DimensionValue;
  width?: DimensionValue;
  onPress?: () => void;
  onLongPress?: () => void;
  disabled?: boolean;
  style?: ViewStyle;
}

export default function LongCardRoot({
  children,
  background,
  height,
  width,
  style,
}: LongCardRootProps) {
  const container: ViewStyle = {
    marginTop: 0, // Certifique-se de que não há margem
    backgroundColor: background || colors.lightBlue,
    borderRadius: 8,
    width: width || '90%',
    height: height || 'auto',
    padding: 8,
    margin: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
    alignItems: 'center',
  };

  return (
    <View style={[container, style]}>
      {children}
    </View>
  );
}
