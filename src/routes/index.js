import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import SignupScreen from "../screens/SignupScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Dashboard from "../screens/Dashboard";
import BusDetail from "../screens/BusDetail";
import BookingSeat from "../screens/BookingSeat";
import BookingForm from "../screens/BookingForm";
import BookingDetail from "../screens/BookingDetail";
import BookingList from "../screens/BookingList";
import Profil from "../screens/Profil";
import BottomNavigation from "./BottomNavigation";
import OrderDetail from "../screens/OrderDetail";
import Ticket from "../screens/Ticket";
import BusList from "../screens/BusList";
import OrderConfirmation from "../screens/OrderConfirmation";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
function Home() {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <BottomNavigation {...props} />}
    >
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{ title: "Dashboard", unmountOnBlur: true }}
      />
      <Tab.Screen name="BookingList" component={BookingList} />
      <Tab.Screen name="Profil" component={Profil} />
    </Tab.Navigator>
  );
}
export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="WelcomeScreen"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
        <Stack.Screen name="BusDetail" component={BusDetail} />
        <Stack.Screen name="BookingSeat" component={BookingSeat} />
        <Stack.Screen name="BookingForm" component={BookingForm} />
        <Stack.Screen name="BookingDetail" component={BookingDetail} />
        <Stack.Screen name="OrderDetail" component={OrderDetail} />
        <Stack.Screen name="BusList" component={BusList} />
        <Stack.Screen name="Ticket" component={Ticket} />
        <Stack.Screen name="OrderConfirmation" component={OrderConfirmation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
