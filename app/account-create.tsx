import { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';

export default function AccountCreate() {
  const router = useRouter();

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [cycleDuration, setCycleDuration] = useState('');
  const [periodDuration, setPeriodDuration] = useState('');

  const handleCreateAccount = async () => {
    if (!name || !age || !weight || !cycleDuration || !periodDuration) {
      Alert.alert('Please fill out all fields');
      return;
    }

    const userData = {
      name,
      age,
      weight,
      cycleDuration,
      periodDuration,
    };

    try {
      await AsyncStorage.setItem('hasAccount', 'true');
      await AsyncStorage.setItem('userData', JSON.stringify(userData));
      router.replace('(tabs)');
    } catch (e) {
      Alert.alert('Failed to save data');
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/health.jpg')} // Adjust path as needed
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.title}>Create your account</Text>

      <TextInput
        placeholder="Name"
        style={styles.input}
        value={name}
        onChangeText={setName}
      />
      <TextInput
        placeholder="Age"
        style={styles.input}
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Weight (kg)"
        style={styles.input}
        value={weight}
        onChangeText={setWeight}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Cycle Duration (days)"
        style={styles.input}
        value={cycleDuration}
        onChangeText={setCycleDuration}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Period Duration (days)"
        style={styles.input}
        value={periodDuration}
        onChangeText={setPeriodDuration}
        keyboardType="numeric"
      />

      <Button title="Create Account" onPress={handleCreateAccount} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    padding: 10,
    borderRadius: 6,
    marginBottom: 12,
  },
});
