import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const today = new Date();
const formattedDate = today.toDateString(); // Example: "Thu Apr 17 2025"


const Header = ({ username = "devuuu",}) => {

  const navigation = useNavigation();

  const handleImagePress = () => {
    navigation.navigate('pages/profile');
  };

  return (
    <View style={styles.container}>
      {/* Profile Image */}
      <TouchableOpacity onPress={handleImagePress}>
        <Image
          source={{ uri: 'https://randomuser.me/api/portraits/women/44.jpg' }} // Replace with your image
          style={styles.profileImage}
        />
      </TouchableOpacity>

      {/* Greeting Text */}
      <View style={styles.textContainer}>
        <Text style={styles.greetingText}>Hello, {username}</Text>
        <Text>{formattedDate}</Text>

      </View>

      {/* Search Icon */}
      <TouchableOpacity>
        <Ionicons name="search" size={25} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop:10, // adjust based on status bar
    paddingHorizontal:20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#DAA520',
    borderRadius:20,
    
    
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    
  },
  textContainer: {
    flex: 1,
    marginLeft: 15,
    padding:30,
    
  },
  greetingText: {
    fontSize: 16,
    fontWeight: '600',
  },
  dateText: {
    fontSize: 13,
    color: '#777',
  },
});

export default Header;
