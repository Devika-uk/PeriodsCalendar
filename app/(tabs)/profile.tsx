import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  Platform,
  Alert
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ProfileScreen() {
  const insets = useSafeAreaInsets();
  
  const [name, setName] = useState('');
  const [weight, setWeight] = useState('');
  const [cycleDuration, setCycleDuration] = useState('28');
  const [periodDuration, setPeriodDuration] = useState('5');
  const [profileImage, setProfileImage] = useState(null);
  const [isSaving, setIsSaving] = useState(false);

  // Load user data when component mounts
  useEffect(() => {
    loadUserData();
  }, []);

  const loadUserData = async () => {
    try {
      const userData = await AsyncStorage.getItem('userData');
      if (userData) {
        const parsedData = JSON.parse(userData);
        setName(parsedData.name || '');
        setWeight(parsedData.weight ? parsedData.weight.toString() : '');
        setCycleDuration(parsedData.cycleDuration ? parsedData.cycleDuration.toString() : '28');
        setPeriodDuration(parsedData.periodDuration ? parsedData.periodDuration.toString() : '5');
        setProfileImage(parsedData.profileImage || null);
      }
    } catch (error) {
      console.error('Failed to load user data:', error);
    }
  };

  const pickImage = async () => {
    // Ask for permissions first
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
    if (status !== 'granted') {
      Alert.alert(
        'Permission Required',
        'Please allow access to your photo library to update your profile picture.',
        [{ text: 'OK' }]
      );
      return;
    }

    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.7,
      });

      if (!result.canceled && result.assets && result.assets.length > 0) {
        setProfileImage(result.assets[0].uri);
      }
    } catch (error) {
      console.error('Error picking image:', error);
      Alert.alert('Error', 'Failed to select image. Please try again.');
    }
  };

  const saveProfile = async () => {
    // Validate inputs
    if (!name.trim()) {
      Alert.alert('Error', 'Please enter your name');
      return;
    }

    if (weight && isNaN(parseFloat(weight))) {
      Alert.alert('Error', 'Weight must be a valid number');
      return;
    }

    if (!cycleDuration || isNaN(parseInt(cycleDuration)) || parseInt(cycleDuration) < 20 || parseInt(cycleDuration) > 35) {
      Alert.alert('Error', 'Cycle duration must be between 20-35 days');
      return;
    }

    if (!periodDuration || isNaN(parseInt(periodDuration)) || parseInt(periodDuration) < 1 || parseInt(periodDuration) > 10) {
      Alert.alert('Error', 'Period duration must be between 1-10 days');
      return;
    }

    try {
      setIsSaving(true);
      
      const userData = {
        name: name.trim(),
        weight: weight ? parseFloat(weight) : null,
        cycleDuration: parseInt(cycleDuration),
        periodDuration: parseInt(periodDuration),
        profileImage,
      };

      await AsyncStorage.setItem('userData', JSON.stringify(userData));
      
      // Simulate a brief delay to show saving feedback
      setTimeout(() => {
        setIsSaving(false);
        Alert.alert('Success', 'Profile updated successfully!');
      }, 800);
    } catch (error) {
      console.error('Failed to save profile:', error);
      setIsSaving(false);
      Alert.alert('Error', 'Failed to save profile. Please try again.');
    }
  };

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <View style={styles.header}>
        <Text style={styles.title}>My Profile</Text>
      </View>
      
      <ScrollView 
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.profileImageContainer}>
          <TouchableOpacity style={styles.imageContainer} onPress={pickImage}>
            {profileImage ? (
              <Image source={{ uri: profileImage }} style={styles.profileImage} />
            ) : (
              <View style={styles.placeholderImage}>
                <Text style={styles.placeholderText}>{name ? name.charAt(0).toUpperCase() : 'U'}</Text>
              </View>
            )}
            <View style={styles.editIconContainer}>
              <Text style={styles.editIcon}>📷</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.inputSection}>
          <Text style={styles.sectionTitle}>Personal Details</Text>
          
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Name</Text>
            <TextInput
              style={styles.input}
              value={name}
              onChangeText={setName}
              placeholder="Enter your name"
              placeholderTextColor="#999"
            />
          </View>
          
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Weight (kg)</Text>
            <TextInput
              style={styles.input}
              value={weight}
              onChangeText={setWeight}
              placeholder="Enter your weight"
              keyboardType="decimal-pad"
              placeholderTextColor="#999"
            />
          </View>
        </View>

        <View style={styles.inputSection}>
          <Text style={styles.sectionTitle}>Cycle Information</Text>
          
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Cycle Duration (days)</Text>
            <TextInput
              style={styles.input}
              value={cycleDuration}
              onChangeText={setCycleDuration}
              placeholder="Enter cycle length (20-35)"
              keyboardType="number-pad"
              placeholderTextColor="#999"
            />
            <Text style={styles.inputHelper}>Average menstrual cycle is 28 days</Text>
          </View>
          
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Period Duration (days)</Text>
            <TextInput
              style={styles.input}
              value={periodDuration}
              onChangeText={setPeriodDuration}
              placeholder="Enter period length (1-10)"
              keyboardType="number-pad"
              placeholderTextColor="#999"
            />
            <Text style={styles.inputHelper}>Average period lasts 3-5 days</Text>
          </View>
        </View>
      </ScrollView>

      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.saveButton} 
          onPress={saveProfile}
          disabled={isSaving}
        >
          <Text style={styles.saveButtonText}>
            {isSaving ? 'Saving...' : 'Save Profile'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f4ff',
  },
  header: {
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e3e3e3',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#5a287d',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingBottom: 30,
  },
  profileImageContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  imageContainer: {
    position: 'relative',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#e1defa',
  },
  placeholderImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#e1defa',
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    fontSize: 48,
    color: '#5a287d',
  },
  editIconContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#fff',
    borderRadius: 15,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  editIcon: {
    fontSize: 16,
  },
  inputSection: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
    color: '#5a287d',
  },
  inputGroup: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 8,
    color: '#444',
  },
  input: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
  },
  inputHelper: {
    fontSize: 12,
    color: '#888',
    marginTop: 4,
    fontStyle: 'italic',
  },
  buttonContainer: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#e3e3e3',
    backgroundColor: '#fff',
  },
  saveButton: {
    backgroundColor: '#5a287d',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});