import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LongCard } from '@/components/cards/LongCard';
import { Card } from "@/components/cards/card"; 
import { CText } from "@/components/Text";
import TitleText from '@/components/Text/TitleText';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Long Card */}
      <View style={styles.container2}>
        <LongCard.Root style={styles.longCard}>
          <Text style={styles.cardText}>Lamp</Text> 
        </LongCard.Root>
      </View>

      {/* Long Card Vermelho sobreposto */}
      <View style={styles.container3}>
        <LongCard.Root style={styles.longCard2}>
          <Text style={styles.cardText}>Lamp</Text> 
        </LongCard.Root>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5', 
    justifyContent: 'flex-start', 
    alignItems: 'center', 
    height: '100%',
    width: '100%',
  },
  longCard: {
    width: '100%',
    height: '90%', 
    margin: 0,
    padding: 0,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    borderBottomLeftRadius: 150,
    position: 'absolute', 
    top: 0, 
  },
  
  longCard2: {
    width: '100%',
    height: '100%', 
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderTopRightRadius: 150,
    position: 'absolute', 
    top: '-15%', 
    backgroundColor: 'white',
    zIndex: 1,
  },

  container2: {
    width: '100%',
    height: '70%', 
    position: 'relative',
  },

  container3: {
    width: '100%',
    height: '70%', 
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardsContainer: {
    width: '100%',  
    alignItems: 'center', 
  },
  cardWrapper: {
    width: '90%', 
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardText: {
    color: 'black',
    fontSize: 16,
  },
});
