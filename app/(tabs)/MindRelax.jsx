
import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

const MindRelaxScreen = () => {
  const openURL = (url) => {
    Linking.openURL(url).catch(err => console.error("Couldn't load page", err));
  };

  const musicSuggestions = [
    { title: "Calming Piano Music", url: "https://www.youtube.com/watch?v=xRcWlA1I9z0" },
    { title: "Nature Sounds", url: "https://www.youtube.com/watch?v=xRcWlA1I9z0" },
    { title: "Meditation Music", url: "https://www.youtube.com/watch?v=xRcWlA1I9z0" },
  ];

  const blogSuggestions = [
    { title: "How Music Can Reduce Stress", url: "https://www.harmonyandhealing.org/how-music-can-reduce-stress/" },
    { title: "Relaxation Techniques for Stress Relief", url: "https://www.helpguide.org/mental-health/stress/relaxation-techniques-for-stress-relief" },
    { title: "Music Relaxation for Stress", url: "https://www.betterup.com/blog/music-relaxation-for-stress" },
  ];

  const relaxationTechniques = [
    { title: "Progressive Muscle Relaxation", description: "A technique that involves tensing and releasing muscle groups to relieve tension." },
    { title: "Mindfulness Meditation", description: "Focus on your breathing and bring your mind's attention to the present without drifting into concerns about the past or future." },
    { title: "Deep Breathing", description: "Focus on taking deep, slow breaths to reduce stress and anxiety." },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Mind Relax</Text>

        <Text style={styles.sectionTitle}>Music Suggestions</Text>
        {musicSuggestions.map((item, index) => (
          <TouchableOpacity key={index} style={styles.item} onPress={() => openURL(item.url)}>
            <Text style={styles.itemText}>{item.title}</Text>
            <Ionicons name="musical-notes" size={24} color="#4B0082" />
          </TouchableOpacity>
        ))}

        <Text style={styles.sectionTitle}>Blog Suggestions</Text>
        {blogSuggestions.map((item, index) => (
          <TouchableOpacity key={index} style={styles.item} onPress={() => openURL(item.url)}>
            <Text style={styles.itemText}>{item.title}</Text>
            <Ionicons name="book" size={24} color="#4B0082" />
          </TouchableOpacity>
        ))}

        <Text style={styles.sectionTitle}>Relaxation Techniques</Text>
        {relaxationTechniques.map((item, index) => (
          <View key={index} style={styles.item}>
            <Text style={styles.itemText}>{item.title}</Text>
            <Text style={styles.itemDescription}>{item.description}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#EFEAFE',
  },
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4B0082',
    textAlign: 'center',
    marginVertical: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4B0082',
    marginTop: 20,
    marginBottom: 10,
  },
  item: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  itemText: {
    fontSize: 16,
    color: '#4B0082',
  },
  itemDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
});

export default MindRelaxScreen;
