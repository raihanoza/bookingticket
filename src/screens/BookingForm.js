import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  TextInput,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import StylesFont from "../utils/StylesFont";
import Colors from "../utils/Colors";
import { Feather } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import MyButton from "../components/MyButton";
const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

const BookingForm = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.PrimaryColor }}>
      <View
        style={{
          width: width,
          height: "10%",
          padding: width / 30,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ width: "10%" }}
        >
          <AntDesign name="left" size={24} color="white" />
        </TouchableOpacity>
        <View
          style={{
            width: "90%",
            alignItems: "center",
            // justifyContent: "flex-end",
          }}
        >
          <Text
            style={[StylesFont.boldh3, { color: "white", right: width / 24 }]}
          >
            Formulir Pemesanan
          </Text>
        </View>
      </View>
      <View
        style={{
          backgroundColor: "#fff",
          height: "90%",
          borderTopLeftRadius: width / 10,
          borderTopRightRadius: width / 10,
          padding: width / 30,
        }}
      >
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
              style={[
                StylesFont.semiBoldh5,
                {
                  color: Colors.Dark,
                  flex: 1,
                  alignItems: "center",
                  paddingHorizontal: width / 25,
                  backgroundColor: Colors.Light,
                  height: height / 15,
                  // borderRadius: width / 60,
                },
              ]}
            />
          </View>
        </View>
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
            <Entypo name="email" size={16} color={Colors.PrimaryColor} />
            <TextInput
              placeholder="Masukkan Email"
              style={[
                StylesFont.semiBoldh5,
                {
                  color: Colors.Dark,
                  flex: 1,
                  alignItems: "center",
                  paddingHorizontal: width / 25,
                  backgroundColor: Colors.Light,
                  height: height / 15,
                  // borderRadius: width / 60,
                },
              ]}
            />
          </View>
        </View>
        <View style={{ marginBottom: width / 35 }}>
          <Text style={[StylesFont.semiBoldh4, { color: Colors.Dark }]}>
            No.Telepon
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
            <Foundation
              name="telephone"
              size={20}
              color={Colors.PrimaryColor}
            />
            <TextInput
              placeholder="Masukkan No.Telepon"
              style={[
                StylesFont.semiBoldh5,
                {
                  color: Colors.Dark,
                  flex: 1,
                  alignItems: "center",
                  paddingHorizontal: width / 25,
                  backgroundColor: Colors.Light,
                  height: height / 15,
                  // borderRadius: width / 60,
                },
              ]}
            />
          </View>
        </View>

        <View style={{ marginBottom: width / 35 }}>
          <Text style={[StylesFont.semiBoldh4, { color: Colors.Dark }]}>
            Alamat
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
            <Feather name="map-pin" size={16} color={Colors.PrimaryColor} />
            <TextInput
              placeholder="Masukkan Alamat"
              style={[
                StylesFont.semiBoldh5,
                {
                  color: Colors.Dark,
                  flex: 1,
                  alignItems: "center",
                  paddingHorizontal: width / 25,
                  backgroundColor: Colors.Light,
                  height: height / 15,
                  // borderRadius: width / 60,
                },
              ]}
            />
          </View>
        </View>
        <View
          style={{
            justifyContent: "flex-end",
            flex: 1,
            paddingVertical: width / 28,
          }}
        >
          <MyButton
            title="Konfirmasi Pemesananan"
            action={() => navigation.navigate("BookingDetail")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BookingForm;
