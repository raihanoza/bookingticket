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
import MyButton from "../components/MyButton";
import axios from "axios";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const CheckEmail = ({ navigation }) => {
  const [email, setEmail] = useState("");

  const handleCheckEmail = () => {
    axios
      .post("http://192.168.100.36:8080/api/check-email", { email: email })
      .then((response) => {
        const status = response.data.status;
        if (status === "success") {
          Alert.alert("Success", "Silahkan Ganti Password Anda");
          navigation.navigate("ChangePassword", { email: email });
        } else {
          Alert.alert(
            "Email Tidak Ditemukan",
            "Email Tidak Ditemukan Didalam data."
          );
        }
      })
      .catch((error) => {
        Alert.alert("Error", "An error occurred: " + error.message);
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
            Masukkan Email Anda
          </Text>
        </View>
        <View style={{ marginBottom: width / 35 }}>
          <Text style={[StylesFont.semiBoldh4, { color: Colors.Light }]}>
            Email
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
          <View style={{ marginTop: width / 10 }}>
            <MyButton
              isLight={true}
              title="Submit"
              action={() => handleCheckEmail()}
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

export default CheckEmail;
