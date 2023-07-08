import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import React from "react";
import Colors from "../utils/Colors";
import StylesFont from "../utils/StylesFont";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const MyButton = ({ title, isLight, action }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={action}
      style={{
        alignItems: "center",
        justifyContent: "center",
        height: height / 15,
        borderRadius: width / 60,
        backgroundColor: isLight === true ? Colors.Light : Colors.PrimaryColor,
        borderWidth: isLight === true ? 1 : 0,
        borderColor: isLight === true ? Colors.PrimaryColor : "",
      }}
    >
      <Text
        style={[
          StylesFont.boldh3,
          {
            color: isLight === true ? Colors.DarkPurple : Colors.Light,
          },
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default MyButton;
