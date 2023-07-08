import { View, Text, Dimensions, Image } from "react-native";
import React, { useEffect } from "react";
import MainLogo from "../../assets/images/3.png";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "../utils/Colors";
import StylesFont from "../utils/StylesFont";
import MyButton from "../components/MyButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getUser } from "../apis/LoginApi";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const WelcomeScreen = ({ navigation }) => {
  const checkValid = async () => {
    await AsyncStorage.getItem("Token").then(async (token) => {
      if (token) {
        await getUser(token).then((result) => {
          console.log(result.data);
          const data = result.data;
          if (data) {
            //   if (data.status === "active") {
            navigation.navigate("Home");
            //   }
          }

          // if (result.status != 200) {
          //   return;
          // } else if(result.data.data.status ==="inactive"){
          //   return
          // } else {
          //   navigation.navigate("Home");

          // }
        });
      }
    });
  };
  useEffect(() => {
    // AsyncStorage.clear();
    checkValid();
  }, []);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.PrimaryColor }}>
      <View
        style={{
          height: height / 1.8,
          backgroundColor: Colors.PrimaryColor,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: width / 1.5,
            height: height / 3,
            backgroundColor: Colors.Light,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: width,
          }}
        >
          <Image source={MainLogo} style={{ width: "100%", height: "100%" }} />
        </View>
      </View>
      <View
        style={{
          // height: "100%",
          width: width,
          height: height / 1.8,
          borderTopLeftRadius: width / 10,
          borderTopRightRadius: width / 10,
          backgroundColor: Colors.Light,
          paddingVertical: width / 20,
          paddingHorizontal: width / 16,
        }}
      >
        <View style={{ alignItems: "flex-start" }}>
          <Text
            style={[
              StylesFont.boldBig,
              { color: Colors.Dark, justifyContent: "flex-end" },
            ]}
          >
            Selamat Datang!
          </Text>
          <Text
            style={[
              StylesFont.regularh5,
              { color: Colors.Dark, justifyContent: "flex-end" },
            ]}
          >
            KUPJ Mandiri adalah Sarana Pilihan Yang Tepat Untukmu Berpergian
          </Text>
        </View>
        <View style={{ marginTop: height / 20, gap: width / 20 }}>
          <MyButton
            isLight={false}
            title="Login"
            action={() => navigation.navigate("LoginScreen")}
          />
          <MyButton
            isLight={true}
            title="Daftar"
            action={() => navigation.navigate("SignupScreen")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
