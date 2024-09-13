import React, { useRef, useEffect } from 'react';
import { Text, TextInput, StyleSheet, View, TouchableOpacity, Animated, Dimensions } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const { width } = Dimensions.get('window');

export default function LoginScreen() {
  const waveAnimationTop = useRef(new Animated.Value(0)).current;
  const waveAnimationBottom = useRef(new Animated.Value(30)).current;

  useEffect(() => {
    const animateWaves = () => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(waveAnimationTop, {
            toValue: 30,
            duration: 3000,
            useNativeDriver: true,
          }),
          Animated.timing(waveAnimationTop, {
            toValue: 0,
            duration: 3000,
            useNativeDriver: true,
          }),
        ])
      ).start();
    };

    const animateWavesBottom = () => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(waveAnimationBottom, {
            toValue: 0,
            duration: 3000,
            useNativeDriver: true,
          }),
          Animated.timing(waveAnimationBottom, {
            toValue: 30,
            duration: 3000,
            useNativeDriver: true,
          }),
        ])
      ).start();
    };

    animateWaves();
    animateWavesBottom();
  }, [waveAnimationTop, waveAnimationBottom]);

  return (
    <View style={styles.container}>
      <View style={styles.waveContainerTop}>
        <Animated.View style={[styles.wave, { transform: [{ translateY: waveAnimationTop }] }]}>
          <Svg height="150" width={width} style={{ transform: [{ rotate: '180deg' }] }}>
            <Path d="M44.6371 45.6168L-6 92.6782V150H416V0L311.411 57.5739C287.235 70.8823 258.29 72.3633 232.882 61.5919L155.247 28.6799C144.135 23.9691 132.189 21.5414 120.119 21.5414H105.907C83.1759 21.5414 61.2872 30.1424 44.6371 45.6168Z" fill="#7279A2" />
          </Svg>
        </Animated.View>
        <View style={[styles.wave, styles.waveOverlay]}>
          <Svg height="150" width={width} style={{ transform: [{ rotate: '180deg' }] }}>
            <Path d="M44.6371 45.6168L-6 92.6782V150H416V0L311.411 57.5739C287.235 70.8823 258.29 72.3633 232.882 61.5919L155.247 28.6799C144.135 23.9691 132.189 21.5414 120.119 21.5414H105.907C83.1759 21.5414 61.2872 30.1424 44.6371 45.6168Z" fill="#2D3250" />
          </Svg>
        </View>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Welcome</Text>
        <Text style={styles.subtitle}>create an account to join mind-i</Text>

        <TextInput style={styles.textInput} placeholder='Nome' />
        <TextInput style={styles.textInput} placeholder='Email' keyboardType='email-address' />
        <TextInput style={styles.textInput} placeholder='Password' secureTextEntry={true} />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Create</Text>
        </TouchableOpacity>

        <View style={styles.signInContainer}>
          <Text style={styles.signInText}>already have an account? </Text>
          <TouchableOpacity onPress={() => console.log('Navigate to Sign In')}>
            <Text style={styles.signInLink}>SIGN IN</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.waveContainerBottom}>
        <View style={[styles.wave, styles.waveOverlay, styles.waveStaticBottom]}>
          <Svg height="150" width={width}>
            <Path d="M44.6371 45.6168L-6 92.6782V150H416V0L311.411 57.5739C287.235 70.8823 258.29 72.3633 232.882 61.5919L155.247 28.6799C144.135 23.9691 132.189 21.5414 120.119 21.5414H105.907C83.1759 21.5414 61.2872 30.1424 44.6371 45.6168Z" fill="#2D3250" />
          </Svg>
        </View>
        <Animated.View style={[styles.wave, { transform: [{ translateY: waveAnimationBottom }] }]}>
          <Svg height="150" width={width}>
            <Path d="M44.6371 45.6168L-6 92.6782V150H416V0L311.411 57.5739C287.235 70.8823 258.29 72.3633 232.882 61.5919L155.247 28.6799C144.135 23.9691 132.189 21.5414 120.119 21.5414H105.907C83.1759 21.5414 61.2872 30.1424 44.6371 45.6168Z" fill="#7279A2" />
          </Svg>
        </Animated.View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  waveContainerTop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  waveContainerBottom: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 130,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wave: {
    position: 'absolute',
    width: width,
    height: 130,
  },
  waveOverlay: {
    zIndex: 1,
  },
  waveStaticBottom: {
    bottom: -20, 
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
  },
  subtitle: {
    fontSize: 14,
    color: '#000',
    marginBottom: 40,

  },
  textInput: {
    height: 40,
    width: '70%',
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
    width: '50%',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  signInContainer: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  signInText: {
    fontSize: 14,
    color: '#000',
  },
  signInLink: {
    fontSize: 14,
    color: '#424769',
    fontWeight: 'bold',
  },
});