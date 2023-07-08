import {
  View,
  Text,
  Dimensions,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import StylesFont from "../utils/StylesFont";
import Colors from "../utils/Colors";
import MainLogo from "../../assets/images/3.png";
import HiddenEye from "../../assets/icons/hidden.png";
import EyeIcon from "../../assets/icons/eye.png";
import IconPassword from "../../assets/icons/iconpassword.png";
import IconProfile from "../../assets/icons/iconprofile.png";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import MyButton from "../components/MyButton";
import { Feather } from "@expo/vector-icons";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const LoginScreen = ({ navigation }) => {
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [rightIcon, setRightIcon] = useState("eye");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlePasswordVisibility = () => {
    if (rightIcon === "eye") {
      setRightIcon("eye-off");
      setPasswordVisibility(!passwordVisibility);
    } else if (rightIcon === "eye-off") {
      setRightIcon("eye");
      setPasswordVisibility(!passwordVisibility);
    }
  };

  const handleLogin = async () => {
    await axios
      .post("http://192.168.100.36:8080/api/login", {
        email: email,
        password: password,
      })
      .then(async (res) => {
        if (res.data.data.status === 200) {
          await AsyncStorage.setItem("Token", res.data.data.token);
          navigation.navigate("Home");
        } else {
          Alert.alert("Gagal", "Login Gagal");
        }
      });
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.Light }}>
      <View
        style={{
          height: height / 2.5,
          width: width,
          backgroundColor: Colors.Light,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image source={MainLogo} style={{ width: "100%", height: "100%" }} />
      </View>
      <View
        style={{
          // height: "100%",
          position: "absolute",
          width: width,
          bottom: 0,
          height: height / 1.8,
          borderTopLeftRadius: width / 10,
          borderTopRightRadius: width / 10,
          backgroundColor: Colors.PrimaryColor,
          paddingVertical: width / 20,
          paddingHorizontal: width / 16,
        }}
      >
        <View style={{ alignItems: "center", marginBottom: width / 18 }}>
          <Text style={[StylesFont.boldBig, { color: Colors.Light }]}>
            Login
          </Text>
        </View>
        <View style={{ marginBottom: width / 35 }}>
          <Text style={[StylesFont.semiBoldh4, { color: Colors.Light }]}>
            Username
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: Colors.Light,
              borderRadius: 5,
              paddingHorizontal: width / 25,
            }}
          >
            <FontAwesome name="user" size={20} color={Colors.PrimaryColor} />
            <TextInput
              placeholder="email"
              onChangeText={(text) => setEmail(text)}
              value={email}
              style={[
                StylesFont.semiBoldh5,
                {
                  color: Colors.Dark,
                  flex: 1,
                  alignItems: "center",
                  paddingHorizontal: width / 25,
                  backgroundColor: Colors.Light,
                  height: height / 15,
                  borderRadius: width / 60,
                },
              ]}
            />
          </View>
        </View>
        <View style={{ marginBottom: width / 28 }}>
          <Text style={[StylesFont.semiBoldh4, { color: Colors.Light }]}>
            Password
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: Colors.Light,
              borderColor: Colors.PrimaryColor,
              borderWidth: 1,
              borderRadius: 5,
              paddingHorizontal: width / 25,
            }}
          >
            <FontAwesome name="lock" size={20} color={Colors.PrimaryColor} />
            <TextInput
              textContentType="password"
              onChangeText={(text) => setPassword(text)}
              placeholder="Password"
              value={password}
              secureTextEntry={passwordVisibility}
              // inlineImageLeft={iconpassword}
              style={[
                StylesFont.semiBoldh5,
                {
                  color: Colors.Dark,
                  backgroundColor: Colors.Light,
                  height: height / 15,
                  flex: 1,
                  paddingHorizontal: width / 30,
                  borderRadius: width / 60,
                },
              ]}
            />
            <TouchableOpacity
              // style={{  }}
              onPress={handlePasswordVisibility}
            >
              {rightIcon === "eye" ? (
                <Ionicons
                  name="eye-off"
                  size={24}
                  color={Colors.PrimaryColor}
                />
              ) : (
                <Ionicons name="eye" size={24} color={Colors.PrimaryColor} />
              )}
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: width / 10 }}>
            <MyButton
              isLight={true}
              title="Login"
              action={() => handleLogin()}
            />
          </View>
          <View
            style={{ flexDirection: "row", gap: 5, marginVertical: width / 30 }}
          >
            <Text style={[StylesFont.boldh5, { color: Colors.Light }]}>
              Belum Punya Akun?
            </Text>
            <Text
              onPress={() => navigation.navigate("SignupScreen")}
              style={[StylesFont.boldh5, { color: Colors.Dark }]}
            >
              Daftar Sekarang
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
