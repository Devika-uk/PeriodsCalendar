import React from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';


const EditProfileScreen = () => {

  
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>My Profile</Text>
      <View style={styles.profilePhotoContainer}>
          <Image
            source={{ uri: 'https://randomuser.me/api/portraits/women/44.jpg' }}// Replace with dynamic image picker
            style={styles.profilePhoto}
          />

        <TouchableOpacity style={styles.editIcon}>
          <Text style={styles.editIconText}>✎</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Name</Text>
        <TextInput style={styles.input} value="" />
      </View>

      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Age</Text>
        <TextInput style={styles.input} value="" />
      </View>

      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Weight</Text>
        <TextInput style={styles.input} value="" />
      </View>

      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Menstruation Duration</Text>
        <TextInput style={styles.input} value="" />
      </View>

      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Cycle Duration</Text>
        <TextInput style={styles.input} value="" />
      </View>

      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FF8A8A',
  },
  header: {
    fontSize: 26,
    fontWeight: 'semibold',
    padding:60,
    textAlign:"center",
    color:"#ffff",
    
  },
  profilePhotoContainer: {
  marginBottom: 30,
  marginLeft:30,
  },
  profilePhoto: {
    width: 120,
    height: 120,
    borderRadius: 90,
  },
  editIcon: {
    position: 'absolute',
    bottom: 0,
    right: 120 / 2 - 15,
    backgroundColor: 'white',
    borderRadius: 50,
    padding: 5,
  },
  editIconText: {
    color: 'black',
    fontSize: 18,
  },
  fieldContainer: {
    marginBottom: 0,
    display:'flex',
    justifyContent:'space-between',
    flexDirection:'row'
  },
  label: {
    fontSize: 20,
    color: '#777',
    marginBottom: 10,
  },
  input: {
    fontSize: 16,
    paddingBottom: 4,
  },
});


export default EditProfileScreen;


