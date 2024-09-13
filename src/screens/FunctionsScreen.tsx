import React from 'react';
import { Text, TextInput, StyleSheet, View, TouchableOpacity, Dimensions, Image } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const { width } = Dimensions.get('window');

export default function RegisterScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.waveContainer}>
        <Svg height="150" width={width} style={styles.wave}>
          <Path d="M44.6371 45.6168L-6 92.6782V150H416V0L311.411 57.5739C287.235 70.8823 258.29 72.3633 232.882 61.5919L155.247 28.6799C144.135 23.9691 132.189 21.5414 120.119 21.5414H105.907C83.1759 21.5414 61.2872 30.1424 44.6371 45.6168Z" fill="#ffff" />
        </Svg>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2D3250',
  },
  topBackground: {
    height: '40%',
    backgroundColor: '#2D3250',
  },
  waveContainer: {
    height: 100,
    left: 0,
    right: 0,
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  wave: {
    transform: [{ rotate: '180deg' }],
  },    
});