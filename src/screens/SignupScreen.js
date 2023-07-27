import {
  View,
  Text,
  Dimensions,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import StylesFont from "../utils/StylesFont";
import Colors from "../utils/Colors";
import MainLogo from "../../assets/images/3.png";
import HiddenEye from "../../assets/icons/hidden.png";
import EyeIcon from "../../assets/icons/eye.png";
import { Ionicons } from "@expo/vector-icons";
import IconPassword from "../../assets/icons/iconpassword.png";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import MyButton from "../components/MyButton";
import axios from "axios";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const SignupScreen = ({ navigation }) => {
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [rightIcon, setRightIcon] = useState("eye");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  // console.log(name);
  const handlePasswordVisibility = () => {
    if (rightIcon === "eye") {
      setRightIcon("eye-off");
      setPasswordVisibility(!passwordVisibility);
    } else if (rightIcon === "eye-off") {
      setRightIcon("eye");
      setPasswordVisibility(!passwordVisibility);
    }
  };

  const handleSignUp = async () => {
    let userData = {
      name: name,
      email: email,
      password: password,
      password_confirmation: confPassword,
      phone: phone,
      address: address,
    };
    try {
      await axios
        .post("http://192.168.100.36:8080/api/register", userData)
        .then(async (res) => {
          if (res.data) {
            // await AsyncStorage.setItem("Token", res.data.data.token);
            Alert.alert("Berhasil", "Pendaftaran Berhasil");
            navigation.navigate("LoginScreen");
          } else {
            Alert.alert("Gagal", "Login Gagal");
          }
        });
    } catch (error) {
      if (error.response) {
        console.log(error.response.data); // Menampilkan pesan kesalahan dari server
        console.log(error.response.status); // Menampilkan kode status HTTP
        console.log(error.response.headers); // Menampilkan header respons
      } else {
        console.log("Error", error.message);
      }
    }
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.PrimaryColor }}>
      <ScrollView>
        <View
          style={{
            height: height / 5,
            width: width,
            backgroundColor: Colors.PrimaryColor,
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <Text
            style={[
              StylesFont.boldExtraBig,
              { color: Colors.Light, marginLeft: width / 20 },
            ]}
          >
            Daftar Yuk!
          </Text>
          <View
            style={{
              width: width / 4,
              height: "60%",
              backgroundColor: Colors.Light,
              borderRadius: width,
              marginRight: width / 20,
            }}
          >
            <Image
              source={MainLogo}
              style={{ width: "100%", height: "100%" }}
            />
          </View>
        </View>
        <View
          style={{
            // height: "100%",
            // position: "absolute",
            width: width,
            // height: height / 1.6,
            borderTopLeftRadius: width / 10,
            borderTopRightRadius: width / 10,
            backgroundColor: Colors.Light,
            paddingVertical: width / 20,
            paddingHorizontal: width / 16,
          }}
        >
          <View style={{ marginBottom: width / 35 }}>
            <Text style={[StylesFont.semiBoldh4, { color: Colors.Dark }]}>
              Email
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
              <FontAwesome name="user" size={20} color={Colors.PrimaryColor} />
              <TextInput
                placeholder="email"
                value={email}
                onChangeText={(text) => setEmail(text)}
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
            <Text style={[StylesFont.semiBoldh4, { color: Colors.Dark }]}>
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
              <FontAwesome
                name="lock"
                size={20}
                style={{ marginHorizontal: 5 }}
                color={Colors.PrimaryColor}
              />
              <TextInput
                textContentType="password"
                placeholder="Password"
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
                placeholder="Konfirmasi Password Anda"
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
          <View style={{ marginBottom: width / 35 }}>
            <Text style={[StylesFont.semiBoldh4, { color: Colors.Dark }]}>
              Nama Lengkap
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
              <MaterialCommunityIcons
                name="card-account-details"
                size={20}
                color={Colors.PrimaryColor}
              />
              <TextInput
                placeholder="Masukkan Nama Lengkap"
                value={name}
                onChangeText={(text) => setName(text)}
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
          <View style={{ marginBottom: width / 35 }}>
            <Text style={[StylesFont.semiBoldh4, { color: Colors.Dark }]}>
              Alamat Lengkap
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
              <MaterialCommunityIcons
                name="card-account-details"
                size={20}
                color={Colors.PrimaryColor}
              />
              <TextInput
                placeholder="Masukkan Alamat Lengkap"
                value={address}
                onChangeText={(text) => setAddress(text)}
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
          <View style={{ marginBottom: width / 35 }}>
            <Text style={[StylesFont.semiBoldh4, { color: Colors.Dark }]}>
              Nomor Telepon
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
              <Entypo name="phone" size={20} color={Colors.PrimaryColor} />
              <TextInput
                placeholder="Masukkan Nomor Telepon"
                keyboardType="numeric"
                value={phone}
                onChangeText={(text) => setPhone(text)}
                maxLength={15}
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
        </View>
        <View
          style={{
            backgroundColor: Colors.Light,
            flex: 1,
            paddingHorizontal: width / 16,
          }}
        >
          <View>
            <MyButton
              isLight={false}
              title="Daftar"
              action={() => handleSignUp()}
            />
          </View>
          <View
            style={{ flexDirection: "row", gap: 5, marginVertical: width / 30 }}
          >
            <Text style={[StylesFont.boldh5, { color: Colors.PrimaryColor }]}>
              Sudah Mempunyai Akun?
            </Text>
            <Text
              onPress={() => navigation.navigate("LoginScreen")}
              style={[StylesFont.boldh5, { color: Colors.Dark }]}
            >
              Login Yuk!
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignupScreen;
