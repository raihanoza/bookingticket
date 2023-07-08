import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import StylesFont from "../utils/StylesFont";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const ModalView = ({ actionClose }) => {
  return (
    <View
      style={{
        height: height,
        width: width,
        backgroundColor: "rgba(0,0,0,0.7)",
      }}
    >
      <View
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: width,
          height: "40%",
        }}
      >
        <View
          style={{
            backgroundColor: "#fff",
            borderTopStartRadius: 20,
            borderTopEndRadius: 20,
            paddingHorizontal: width / 16,
            paddingVertical: width / 20,
            flex: 1,
          }}
        >
          <View style={{ alignItems: "flex-end" }}>
            <TouchableOpacity onPress={actionClose}>
              <AntDesign name="close" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <ScrollView>
            <View style={{ alignItems: "center" }}>
              <Text style={[StylesFont.semiBoldh4, { color: "black" }]}>
                Pilih Rute Tujuan
              </Text>
            </View>
            <View style={{ gap: 10, marginTop: 10 }}>
              <TouchableOpacity
                onPress={actionClose}
                style={{ borderBottomWidth: 1, paddingVertical: 5 }}
              >
                <Text style={[StylesFont.semiBoldh4, { color: "black" }]}>
                  Indrapura
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={actionClose}
                style={{ borderBottomWidth: 1, paddingVertical: 5 }}
              >
                <Text style={[StylesFont.semiBoldh4, { color: "black" }]}>
                  Ranto Prapat
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={actionClose}
                style={{ borderBottomWidth: 1, paddingVertical: 5 }}
              >
                <Text style={[StylesFont.semiBoldh4, { color: "black" }]}>
                  Aek Nabara
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={actionClose}
                style={{ borderBottomWidth: 1, paddingVertical: 5 }}
              >
                <Text style={[StylesFont.semiBoldh4, { color: "black" }]}>
                  Kisaran
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={actionClose}
                style={{ borderBottomWidth: 1, paddingVertical: 5 }}
              >
                <Text style={[StylesFont.semiBoldh4, { color: "black" }]}>
                  Aek Kanopan
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={actionClose}
                style={{ borderBottomWidth: 1, paddingVertical: 5 }}
              >
                <Text style={[StylesFont.semiBoldh4, { color: "black" }]}>
                  Sipiongot
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={actionClose}
                style={{ borderBottomWidth: 1, paddingVertical: 5 }}
              >
                <Text style={[StylesFont.semiBoldh4, { color: "black" }]}>
                  Tebing Tinggi
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={actionClose}
                style={{ borderBottomWidth: 1, paddingVertical: 5 }}
              >
                <Text style={[StylesFont.semiBoldh4, { color: "black" }]}>
                  Tanjung Pura
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default ModalView;
