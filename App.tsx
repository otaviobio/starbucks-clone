import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider } from "styled-components";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import theme from "./theme";
import { ActivityIndicator } from "react-native";
import { OrderProvider } from "./Context/OrderContext";
import { useState } from "react";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <ThemeProvider theme={theme}>
        {fontsLoaded ? (
          <SafeAreaProvider>
            <OrderProvider>
              <Navigation colorScheme={colorScheme} />
            </OrderProvider>
            <StatusBar />
          </SafeAreaProvider>
        ) : (
          <ActivityIndicator />
        )}
      </ThemeProvider>
    );
  }
}
