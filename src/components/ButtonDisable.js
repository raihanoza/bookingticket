import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import React from "react";
import Colors from "../utils/Colors";
import StylesFont from "../utils/StylesFont";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const ButtonDisable = ({ title, isLight, action }) => {
  return (
    <TouchableOpacity
    disabled
      activeOpacity={0.8}
      onPress={action}
      style={{
        alignItems: "center",
        justifyContent: "center",
        height: height / 15,
        borderRadius: width / 60,
        backgroundColor: "#5f6061",
//         borderWidth: 0,
        borderColor: "#5f6061",
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

export default ButtonDisable;
