import React from "react";
import { View, TouchableOpacity, Image, Dimensions } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../utils/Colors";
export default function MyTabBar({ state, descriptors, navigation }) {
  const height = Dimensions.get("window").height;
  const width = Dimensions.get("window").width;

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        height: height / 14,
        borderTopRightRadius: 18,
        borderTopLeftRadius: 18,
        borderColor: "#ddd",
        backgroundColor: Colors.PrimaryColor,
      }}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            activeOpacity={0.9}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            onPress={onPress}
            style={{ flex: 1, alignItems: "center" }}
            key={index}
          >
            {
              /*label*/ [
                <View
                  style={
                    isFocused
                      ? {
                          width: width / 8,
                          height: width / 8,
                          backgroundColor: "#fff",
                          borderRadius: 20,
                          justifyContent: "center",
                          alignItems: "center",
                        }
                      : ""
                  }
                >
                  <Ionicons
                    name={isFocused ? "home" : "home-outline"}
                    size={30}
                    color={isFocused ? Colors.PrimaryColor : "white"}
                  />
                </View>,

                <View
                  style={
                    isFocused
                      ? {
                          width: width / 8,
                          height: width / 8,
                          backgroundColor: "#fff",
                          borderRadius: 20,
                          justifyContent: "center",
                          alignItems: "center",
                        }
                      : ""
                  }
                >
                  <MaterialCommunityIcons
                    name={isFocused ? "view-list" : "view-list-outline"}
                    size={30}
                    color={isFocused ? Colors.PrimaryColor : "white"}
                  />
                </View>,
                <View
                  style={
                    isFocused
                      ? {
                          width: width / 8,
                          height: width / 8,
                          backgroundColor: "#fff",
                          borderRadius: 20,
                          justifyContent: "center",
                          alignItems: "center",
                        }
                      : ""
                  }
                >
                  <Ionicons
                    name={isFocused ? "person" : "person-outline"}
                    size={30}
                    color={isFocused ? Colors.PrimaryColor : "white"}
                  />
                </View>,
              ][index]
            }
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
