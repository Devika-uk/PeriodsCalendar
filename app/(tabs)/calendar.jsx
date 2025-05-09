import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'; // or 'react-native' if you're not using the context package
import Header from '@/components/header';

const MainPage = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Header />
      
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#EFEAFE', // Matches your app background
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
});

export default MainPage;
