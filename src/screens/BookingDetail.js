import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Modal,
  ScrollView,
  Image,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import StylesFont from "../utils/StylesFont";
import bri from "../../assets/images/bri.png";
import bca from "../../assets/images/bca.png";
import Colors from "../utils/Colors";
import MyButton from "../components/MyButton";
const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;
const BookingDetail = ({ navigation }) => {
  const [viewModal, setViewModal] = useState(false);
  const [selectedMetode, setSelectedMetode] = useState("");
  const handleMetode = (e) => {
    setSelectedMetode(e);
    setViewModal(false);
  };
  // console.log(selectedMetode);
  return (
    // <ScrollView style={{ flex: 1, backgroundColor: Colors.PrimaryColor }}>
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.PrimaryColor }}>
      <View
        style={{
          padding: width / 30,
          height: "10%",
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

            // marginTop: width / 30,
            // borderWidth: 1,
            // position: "absolute",
            alignItems: "center",
            // justifyContent: "flex-end",
          }}
        >
          <Text
            style={[StylesFont.boldh3, { color: "white", right: width / 24 }]}
          >
            Detail Pemesanan
          </Text>
        </View>
      </View>
      <View
        style={{
          backgroundColor: "#fff",
          height: "90%",
          borderTopLeftRadius: width / 10,
          borderTopRightRadius: width / 10,
          paddingVertical: width / 22,
          paddingHorizontal: width / 14,
        }}
      >
        <View style={{ borderBottomWidth: 1, borderStyle: "dashed" }}>
          <Text style={[StylesFont.mediumh3]}>Data Pemesanan</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 10,
          }}
        >
          <View>
            <Text style={[StylesFont.mediumh4, { color: "grey" }]}>Nama</Text>
          </View>
          <View>
            <Text style={[StylesFont.mediumh4, { color: "grey" }]}>
              Sumitro
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 10,
          }}
        >
          <View>
            <Text style={[StylesFont.mediumh4, { color: "grey" }]}>
              No.Telepon
            </Text>
          </View>
          <View>
            <Text style={[StylesFont.mediumh4, { color: "grey" }]}>
              Sumitro
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 10,
          }}
        >
          <View>
            <Text style={[StylesFont.mediumh4, { color: "grey" }]}>Email</Text>
          </View>
          <View>
            <Text style={[StylesFont.mediumh4, { color: "grey" }]}>
              Sumitro
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 10,
          }}
        >
          <View>
            <Text style={[StylesFont.mediumh4, { color: "grey" }]}>Alamat</Text>
          </View>
          <View>
            <Text style={[StylesFont.mediumh4, { color: "grey" }]}>
              Sumitro
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 10,
          }}
        >
          <View>
            <Text style={[StylesFont.mediumh4, { color: "grey" }]}>Tujuan</Text>
          </View>
          <View>
            <Text style={[StylesFont.mediumh4, { color: "grey" }]}>
              Sumitro
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 10,
          }}
        >
          <View>
            <Text style={[StylesFont.mediumh4, { color: "grey" }]}>
              Jumlah Kursi
            </Text>
          </View>
          <View>
            <Text style={[StylesFont.mediumh4, { color: "grey" }]}>
              Sumitro
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 10,
          }}
        >
          <View>
            <Text style={[StylesFont.mediumh4, { color: "grey" }]}>
              Kursi Yang Dipilih
            </Text>
          </View>
          <View>
            <Text style={[StylesFont.mediumh4, { color: "grey" }]}>
              Sumitro
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 10,
          }}
        >
          <View>
            <Text style={[StylesFont.mediumh4, { color: "grey" }]}>
              Total Harga
            </Text>
          </View>
          <View>
            <Text style={[StylesFont.mediumh4, { color: "grey" }]}>
              Sumitro
            </Text>
          </View>
        </View>
        <View
          style={{
            borderBottomWidth: 1,
            borderStyle: "dashed",
            marginTop: 15,
          }}
        >
          <Text style={[StylesFont.mediumh3]}>Konfirmasi Pembayaran</Text>
        </View>
        <View
          style={{
            // borderWidth: 1,
            marginTop: 10,
            paddingVertical: width / 20,
            paddingHorizontal: width / 28,
            borderRadius: 10,
            backgroundColor: Colors.LightPurple,
          }}
        >
          <Text style={[StylesFont.mediumh5]}>
            Segera Lakukan Pembayaran Ke Loket KUPJ Mandiri
          </Text>
        </View>
        <Text style={[StylesFont.mediumh5]}>Atau</Text>
        <View>
          <Text style={[StylesFont.mediumh5, { marginTop: 10 }]}>
            Transfer Ke Rekening BRI
          </Text>
          <View
            style={{
              height: height / 10,
              // borderWidth: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View style={{ width: "30%" }}>
              <Image
                source={bri}
                resizeMode="contain"
                style={{ width: "100%", height: "100%" }}
              />
            </View>
            <View>
              <Text style={[StylesFont.semiBoldh4, { color: "black" }]}>
                204024024024020
              </Text>
              <Text style={[StylesFont.semiBoldh4, { color: "black" }]}>
                A.N SAMSUDIN
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            justifyContent: "flex-end",
            flex: 1,
          }}
        >
          <MyButton
            title="Konfirmasi Pemesananan"
            action={() => navigation.navigate("BookingList")}
          />
        </View>
      </View>

      <Modal animationType="slide" transparent={true} visible={viewModal}>
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
                <TouchableOpacity
                  onPress={() => {
                    setViewModal(false), setSelectedMetode("");
                  }}
                >
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
                    onPress={() => handleMetode("cod")}
                    style={{ borderBottomWidth: 1, paddingVertical: 5 }}
                  >
                    <Text style={[StylesFont.semiBoldh4, { color: "black" }]}>
                      Bayar Ditempat
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => handleMetode("tf")}
                    style={{ borderBottomWidth: 1, paddingVertical: 5 }}
                  >
                    <Text style={[StylesFont.semiBoldh4, { color: "black" }]}>
                      Transfer Bank
                    </Text>
                  </TouchableOpacity>
                </View>
              </ScrollView>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default BookingDetail;
