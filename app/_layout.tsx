import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  const [isFirstTime, setIsFirstTime] = useState<boolean | null>(null);

  useEffect(() => {
    const resetStorageAndCheck = async () => {
      await AsyncStorage.clear(); // Clear all local storage
      const hasAccount = await AsyncStorage.getItem('hasAccount');
      setIsFirstTime(hasAccount === null); // Always true in this case
    };

    resetStorageAndCheck();
  }, []);

  if (!loaded || isFirstTime === null) {
    return null; // Wait for font and async storage to be ready
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack screenOptions={{ headerShown: false }}>
        {isFirstTime ? (
          <Stack.Screen
            name="account-create"
            options={{ headerShown: false }}
          />
        ) : (
          <Stack.Screen
            name="(tabs)"
            options={{ headerShown: false }}
          />
        )}
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
