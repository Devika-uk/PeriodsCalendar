import React, { useState } from 'react';
import { Image, StyleSheet, View, Linking, Text, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  // Static health updates
  const healthUpdates = [
    "Update 1: Regular exercise can improve your mental health.",
    "Update 2: Eating a balanced diet is crucial for maintaining health.",
    "Update 3: Adequate sleep is essential for overall well-being.",
  ];

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('../../assets/images/health.jpg')}
          style={styles.backgroundImage}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Health Updates</ThemedText>
        <HelloWave />
      </ThemedView>

      {/* YouTube Video */}
      <View style={styles.videoContainer}>
        <Text style={styles.sectionTitle}>Health Video</Text>
        <WebView
          javaScriptEnabled={true}
          domStorageEnabled={true}
          source={{ uri: 'https://www.youtube.com/embed/fRlw5QMbE74' }} // Replace with a real YouTube video ID
          style={styles.video}
        />
      </View>

      {/* Research Articles */}
      <View style={styles.articleContainer}>
        <Text style={styles.sectionTitle}>Research Articles</Text>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.bmj.com/research/research')}>
          <Text style={styles.articleLink}>Research Article 1</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.baycrest.org/Baycrest_Centre/media/content/101_HealthTips.pdf')}>
          <Text style={styles.articleLink}>Research Article 2</Text>
        </TouchableOpacity>
      </View>

      {/* Health Updates */}
      <View style={styles.updatesContainer}>
        <Text style={styles.sectionTitle}>Health Updates</Text>
        {healthUpdates.map((update, index) => (
          <Text key={index} style={styles.updateText}>{update}</Text>
        ))}
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  backgroundImage: {
    height: '100%',
    width: '100%',
    bottom: 0,
    position: 'absolute',
    left: 0,
    resizeMode:'cover',
  },
  videoContainer: {
    marginTop: 20,
  },
  video: {
    height: 200,
  },
  articleContainer: {
    marginTop: 20,
  },
  updatesContainer: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  articleLink: {
    color: 'blue',
    marginBottom: 5,
  },
  updateText: {
    marginBottom: 5,
  },
});
