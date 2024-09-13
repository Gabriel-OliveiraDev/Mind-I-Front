import React from 'react';
import { Text, TextInput, StyleSheet, View, TouchableOpacity, Dimensions, Image } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const { width } = Dimensions.get('window');

export default function RegisterScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.topBackground} />
      <Image source={require('./fundo.png')} style={styles.logo} />
      <View style={styles.waveContainer}>
        <Svg height="150" width={width} style={styles.wave}>
          <Path d="M44.6371 45.6168L-6 92.6782V150H416V0L311.411 57.5739C287.235 70.8823 258.29 72.3633 232.882 61.5919L155.247 28.6799C144.135 23.9691 132.189 21.5414 120.119 21.5414H105.907C83.1759 21.5414 61.2872 30.1424 44.6371 45.6168Z" fill="#2D3250" />
        </Svg>
      </View>

      <View style={styles.form}>

      <TextInput style={styles.textInput} placeholder='Nome' />
      <TextInput style={styles.textInput} placeholder='Email' keyboardType='email-address' />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Registrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '40%',
    backgroundColor: '#2D3250',
  },
  waveContainer: {
    position: 'absolute',
    top: '40%',
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  wave: {
    transform: [{ rotate: '180deg' }],
  },
  form: {
    justifyContent: 'center',
    alignItems: 'center',
    bottom: -210,
  },

  textInput: {
    height: 40,
    width: 300,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    paddingHorizontal: 10,
    fontSize: 18,
    marginBottom: 20,
  },

  button: {
    backgroundColor: '#424769',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    width: 200,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  logo: {
    width: 260,
    height: 260,
    resizeMode: 'contain',
    position: 'absolute',
    top: '10%',
  },
});