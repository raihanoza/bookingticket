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
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import MyButton from "../components/MyButton";
import axios from "axios";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const ChangePassword = ({ route, navigation }) => {
  const { email } = route.params;
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [rightIcon, setRightIcon] = useState("eye");

  const handlePasswordVisibility = () => {
    if (rightIcon === "eye") {
      setRightIcon("eye-off");
      setPasswordVisibility(!passwordVisibility);
    } else if (rightIcon === "eye-off") {
      setRightIcon("eye");
      setPasswordVisibility(!passwordVisibility);
    }
  };
  const handlePasswordChange = () => {
    if (password !== confPassword) {
      Alert.alert(
        "Password Mismatch",
        "The new password and confirmation do not match."
      );
    } else {
      axios
        .post("http://192.168.100.36:8080/api/change-password", {
          email: email,
          password: password,
        })
        .then((response) => {
          const status = response.data.status;
          if (status === "success") {
            Alert.alert(
              "Berhasil",
              "Password Berhasil Diubah,Silahkan Login Ulang."
            );
            navigation.navigate("LoginScreen");
          } else {
            Alert.alert("Error", "Gagal Untuk Merubah Password.");
          }
        })
        .catch((error) => {
          Alert.alert("Error", "An error occurred: " + error.message);
        });
    }
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
            Ganti Password
          </Text>
        </View>
        <View style={{ marginBottom: width / 28 }}>
          <Text style={[StylesFont.semiBoldh4, { color: Colors.Dark }]}>
            Password Baru
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
            <FontAwesome
              name="lock"
              size={20}
              style={{ marginHorizontal: 5 }}
              color={Colors.PrimaryColor}
            />
            <TextInput
              textContentType="password"
              placeholder="Masukkan Password Baru Anda"
              value={password}
              onChangeText={(text) => setPassword(text)}
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
        </View>
        <View style={{ marginBottom: width / 28 }}>
          <Text style={[StylesFont.semiBoldh4, { color: Colors.Dark }]}>
            Konfirmasi Password
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
            <FontAwesome
              name="lock"
              size={20}
              style={{ marginHorizontal: 5 }}
              color={Colors.PrimaryColor}
            />
            <TextInput
              textContentType="password"
              value={confPassword}
              onChangeText={(text) => setConfPassword(text)}
              placeholder="Konfirmasi Password Baru Anda"
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
        </View>
        <View style={{ marginBottom: width / 28 }}>
          <View style={{ marginTop: width / 10 }}>
            <MyButton
              isLight={true}
              title="Submit"
              action={() => handlePasswordChange()}
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

export default ChangePassword;
