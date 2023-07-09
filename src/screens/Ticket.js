import { View, Text, Dimensions, TouchableOpacity, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import StylesFont from "../utils/StylesFont";
import { AntDesign } from "@expo/vector-icons";
import Colors from "../utils/Colors";
import * as Print from "expo-print";
import Logo from "../../assets/icon.png"
import MyButton from "../components/MyButton";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const Ticket = ({ route, navigation }) => {
  const { allData, bookedSeats } = route.params;
  const getSeatText = (seatNumber) => {
    return `kursi ${seatNumber}`;
  };

  const htmlContent = `
  <!DOCTYPE html>
<html>

<head>
            <title>Tiket Bus / Pesawat</title>
            <style>
                        body {
                                    margin: 0;
                                    padding: 0;
                                    justify-content: center;
                                    display: flex;
                        }

                        p {
                                    margin: 0;
                                    padding: 0;
                        }

                        .ticket {
                                    width: 80vw;
                                    height: 100vh;
                                    flex-direction: column;
                                    flex-wrap: nowrap;
                                    font-family: Arial, sans-serif;
                                    background-color: #ffffff;
                                    /* padding: 20px; */
                        }

                        .logo img {
                                    width: 150px;
                                    height: 150px;
                        }
            </style>
</head>

<body>
            <div class="ticket">
                        <div
                                    style="display: flex;flex-direction: row;align-items: center;justify-content:space-between;height: 10vh;width: 100%;padding-top: 20px;padding-bottom: 20px;">
                                    <div
                                                style="display: flex;flex-direction: row;align-items: center;justify-content:space-between;height: 10vh;width: 100%;padding: 20px;border-bottom: 1px solid gray;">
                                                <div
                                                            style="width: 50%;display: flex;flex-direction: row;align-items: center;justify-content:space-between;">
                                                            <h2 style="color: #9667e0;">KUPJ MANDIRI</h2>
                                                            <div style="display: flex;flex-direction: column;">
                                                                        <p style="color: gray;">Kendala Saat Pemesanan ?
                                                                        </p>
                                                                        <p style="font-weight: bold;">+62 823-6728-5555
                                                                        </p>
                                                            </div>
                                                </div>
                                                
                                    </div>

                        </div>
                        <h4 style="color: gray;margin: 20px;padding: 0;">KEBERANGKATAN</h4>
                        <div
                                    style="padding: 25px;display: flex;flex-direction: row;justify-content: space-between;gap: 20px;border-bottom: 1px solid grey;">

                                    <div style="display: flex;flex-direction: column;">
                                                <h5 style="color: gray;">2023-07-01</h5>
                                                <div
                                                            style="flex-direction: row;align-items: center;display: flex;width: 20vw;justify-content: space-between;">
                                                            <p>Medan</p>
                                                            <div style="border: 1px solid black;width: 5vw;"></div>
                                                            <p>${allData.bus.route}</p>
                                                </div>
                                    </div>
                                    <div style="display: flex;flex-direction: column;">
                                                <h5 style="color: gray;">Kelas Bus</h5>
                                                <div
                                                            style="flex-direction: row;align-items: center;display: flex;width: 20vw;justify-content: space-between;">
                                                            <p>${allData.bus.kelas}</p>
                                                </div>
                                    </div>
                                    <div style="display: flex;flex-direction: column;">
                                                <h5 style="color: gray;">Nomor Kursi</h5>
                                                <div
                                                            style="flex-direction: row;align-items: center;display: flex;width: 20vw;justify-content: space-between;">
                                                            <p>${bookedSeats}</p>
                                                </div>
                                    </div>
                                    <div style="display: flex;flex-direction: column;">
                                                <h5 style="color: gray;">Total Harga</h5>
                                                <div
                                                            style="flex-direction: row;align-items: center;display: flex;width: 20vw;justify-content: space-between;">
                                                            <p>${allData.total_amount}</p>
                                                </div>
                                    </div>
                        </div>
                        <h4 style="color: gray;padding: 0;">PROFIL</h4>
                        <div
                                    style="padding-bottom:10px;display: flex;flex-direction: row;justify-content: space-between;gap: 20px;border-bottom: 1px solid grey;">

                                    <div style="display: flex;flex-direction: column;">
                                                <h5 style="color: gray;">NAMA</h5>
                                                <div
                                                            style="flex-direction: row;align-items: center;display: flex;width: 20vw;justify-content: space-between;">
                                                            <p>${allData.customer.name}</p>
                                                </div>
                                    </div>
                                    <div style="display: flex;flex-direction: column;">
                                                <h5 style="color: gray;">Nomor Telepon</h5>
                                                <div
                                                            style="flex-direction: row;align-items: center;display: flex;width: 20vw;justify-content: space-between;">
                                                            <p>${allData.customer.phone}</p>
                                                </div>
                                    </div>
                                    <div style="display: flex;flex-direction: column;">
                                                <h5 style="color: gray;">E-mail</h5>
                                                <div
                                                            style="flex-direction: row;align-items: center;display: flex;width: 20vw;justify-content: space-between;">
                                                            <p>${allData.customer.email}</p>
                                                </div>
                                    </div>
                        </div>
                        <div style="display: flex;margin-top: 20px;justify-content: space-between;">
                                    <h4 style="color: gray;padding: 0;">TERIMAKASIH TELAH MENGGUNAKAN LAYANAN KAMI</h4>
                                    <h4 style="color: gray;padding: 0;">TUNJUKKAN TIKET INI SAAT KEBERANGKATAN</h4>
                        </div>

            </div>
</body>

</html>
      `;

  const print = async () => {
    // On iOS/android prints the given html. On web prints the HTML from the current page.
    await Print.printAsync({
      html: htmlContent,
      orientation: "landscape",

      base64: false
    });
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.White }}>
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
          <AntDesign name="left" size={24} color={Colors.PrimaryColor} />
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
            style={[
              StylesFont.boldh3,
              { color: Colors.PrimaryColor, right: width / 24 },
            ]}
          >
            Pesanan Anda
          </Text>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          //   borderWidth: 1,
          borderTopRightRadius: width / 12,
          borderTopLeftRadius: width / 12,
          backgroundColor: Colors.PrimaryColor,
          padding: width / 20,
        }}
      >
        <View
          style={{
            // flex: 1,
            //   borderWidth: 1,
            borderTopRightRadius: width / 12,
            borderTopLeftRadius: width / 12,
            backgroundColor: Colors.White,
            // padding: width / 20,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              borderBottomWidth: 1,
              borderStyle: "dashed",
              padding: width / 20,
            }}
          >
            <View>
              <Text style={[StylesFont.mediumh5]}>{allData.bus.route}</Text>
              <Text style={[StylesFont.mediumSmall]}>
                Batu Bara,Sumatera Utara
              </Text>
            </View>
            <View>
              <Text style={[StylesFont.mediumh5]}>{allData.total_seats} Kursi</Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: Colors.LightPurple,
              marginTop: 10,
              borderRadius: width / 30,
              paddingVertical: 5,
              paddingHorizontal: width / 20,
              margin: width / 20,
            }}
          >
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={[StylesFont.mediumh5]}>Nama</Text>
              <Text style={[StylesFont.mediumh5]}>{allData.customer.name}</Text>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={[StylesFont.mediumh5]}>No.Telepon</Text>
              <Text style={[StylesFont.mediumh5]}>{allData.customer.phone}</Text>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={[StylesFont.mediumh5]}>Alamat</Text>
              <Text style={[StylesFont.mediumh5]}>{allData.customer.address}</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              gap: 5,
              marginHorizontal: width / 20,
            }}
          >
            <View
              style={{
                backgroundColor: Colors.LightPurple,
                marginTop: 10,
                borderRadius: width / 30,
                paddingVertical: 5,
                paddingHorizontal: width / 20,
                width: "48%",
              }}
            >
              <Text style={[StylesFont.mediumSmall, { color: "grey" }]}>
                Tanggal
              </Text>
              <Text style={[StylesFont.mediumh4]}>{allData.bus.keberangkatan}</Text>
            </View>
            <View
              style={{
                backgroundColor: Colors.LightPurple,
                marginTop: 10,
                borderRadius: width / 30,
                paddingVertical: 5,
                paddingHorizontal: width / 20,
                width: "48%",
              }}
            >
              <Text style={[StylesFont.mediumSmall, { color: "grey" }]}>
                Kursi
              </Text>
              <Text style={[StylesFont.mediumh4]}>{bookedSeats.map(getSeatText).join(", ")}</Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              gap: 5,
              marginHorizontal: width / 20,
            }}
          >
            <View
              style={{
                backgroundColor: Colors.LightPurple,
                marginTop: 10,
                borderRadius: width / 30,
                paddingVertical: 5,
                paddingHorizontal: width / 20,
                width: "48%",
              }}
            >
              <Text style={[StylesFont.mediumSmall, { color: "grey" }]}>
                Kelas
              </Text>
              <Text style={[StylesFont.mediumh4]}>{allData.bus.kelas}</Text>
            </View>
            <View
              style={{
                backgroundColor: Colors.LightPurple,
                marginTop: 10,
                borderRadius: width / 30,
                paddingVertical: 5,
                paddingHorizontal: width / 20,
                width: "48%",
              }}
            >
              <Text style={[StylesFont.mediumSmall, { color: "grey" }]}>
                Total Harga
              </Text>
              <Text style={[StylesFont.mediumh4]}>Rp.{allData.total_amount},-</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              borderBottomWidth: 1,
              borderStyle: "dashed",
            }}
          >
            <View
              style={{
                width: 15,
                height: 18,
                borderTopRightRadius: 50,
                alignItems: "flex-start",
                justifyContent: "flex-start",
                backgroundColor: Colors.PrimaryColor,
              }}
            ></View>
            <View
              style={{
                width: 15,
                height: 18,
                borderTopLeftRadius: 50,
                alignItems: "flex-start",
                justifyContent: "flex-start",
                backgroundColor: Colors.PrimaryColor,
              }}
            ></View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                width: 15,
                height: 20,
                borderBottomRightRadius: 50,
                alignItems: "flex-start",
                justifyContent: "flex-start",
                backgroundColor: Colors.PrimaryColor,
              }}
            ></View>
            <View
              style={{
                width: 15,
                height: 20,
                borderBottomLeftRadius: 50,
                alignItems: "flex-start",
                justifyContent: "flex-start",
                backgroundColor: Colors.PrimaryColor,
              }}
            ></View>
          </View>
          <View style={{ padding: width / 20 }}>
            <MyButton title="Download Tiket" action={() => print()} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Ticket;
