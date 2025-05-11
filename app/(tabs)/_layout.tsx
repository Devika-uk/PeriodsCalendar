import React from "react";
import { Platform, SafeAreaView, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { HapticTab } from "@/components/HapticTab";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";

import Calendar from "./calendar";
import Health from "./health";
import PregnancyGuidanceScreen from "./PregnancyGuidanceScreen";
import MonthGuidance from './MonthGuidanceScreen'
import Profile from "./profile";
import MindRelax from "./MindRelax";

const Tabs = createBottomTabNavigator();

export default function TabLayout() {
  const colorScheme = useColorScheme();

const screenOptions: BottomTabNavigationOptions = {
  tabBarShowLabel: true,
  tabBarActiveTintColor: Colors[colorScheme ?? "light"].tabIconSelected,
  tabBarInactiveTintColor: Colors[colorScheme ?? "light"].tabIconDefault,
  headerShown: false,
  tabBarButton: HapticTab,
  tabBarBackground: TabBarBackground,
  tabBarStyle: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    elevation: 0,
    borderTopWidth: 0,
    backgroundColor: 'white',
  },
};

  return (
    <SafeAreaProvider>
      <Tabs.Navigator screenOptions={screenOptions}>
        <Tabs.Screen
          name="calendar"
          component={Calendar}
          options={{
            title: "Calendar",
            tabBarIcon: ({ color }) => (
              <Ionicons name="calendar-outline" size={28} color={color} />
            ),
          }}
        />
        
        <Tabs.Screen
          name="pregnency"
          component={PregnancyGuidanceScreen}
          options={{
            title: "Pregnency",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="human-pregnant"
                size={28}
                color={color}
              />
            ),
          }}
        />


{/* 
<Tabs.Screen
  name="MonthGuidance"
  component={MonthGuidance}
  options={{
    title: "", // Empty title
    tabBarIcon: ({ color }) => (
      <MaterialCommunityIcons
        name="human-pregnant"
        size={1}
        color="transparent" // Transparent color
      />
    ),
    tabBarButton: () => null, // Disable the tab button
  }}
/>

 */}



        <Tabs.Screen
          name="health"
          component={Health}
          options={{
            title: "Health",
            tabBarIcon: ({ color }) => (
              <Ionicons name="heart-outline" size={28} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="mind"
          component={MindRelax}
          options={{
            title: "MindRelax",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="meditation"
                size={28}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
  name="profile"
  component={Profile}
  options={{
    title: "Profile",
  
    tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="meditation"
                size={28}
                color={color}
              />
            ),
  }}
/>
      </Tabs.Navigator>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff", // Optional: set a background color
  },
});
