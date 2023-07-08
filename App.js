import React from "react";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
// import * as SplashScreen from "expo-splash-screen";
import Route from "./src/routes";
// await SplashScreen.hideAsync();
// import * as SplashScreen from "expo-splash-screen";
export default function App() {
  // SplashScreen.preventAutoHideAsync();
  // setTimeout(SplashScreen.hideAsync, 2000);

  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  } else {
    return <Route />;
  }
}
