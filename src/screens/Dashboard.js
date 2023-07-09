import {
  View,
  Text,
  Dimensions,
  Image,
  TextInput,
  RefreshControl,
  TouchableOpacity,
  Modal,
  ScrollView,
  Button,
  FlatList,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import StylesFont from "../utils/StylesFont";
import { AntDesign } from "@expo/vector-icons";
import avatar from "../../assets/images/ava.png";
import picIndrapura from "../../assets/images/indrapura.jpeg";
import picAekKanopan from "../../assets/images/aekkanopan.jpg";
import picAekNabara from "../../assets/images/AekNabara.jpg";
import picKisaran from "../../assets/images/Kisaran.jpg";
import picRantauPrapat from "../../assets/images/RantauPrapat.jpg";
import picTebing from "../../assets/images/Tebingtinggi.jpg";
import picSimangambat from "../../assets/images/Simangambat.jpg";
import picSipiongot from "../../assets/images/sipiongot.jpg";
import bus from "../../assets/images/bus.png";
import Colors from "../utils/Colors";
import DateTimePicker from "@react-native-community/datetimepicker";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import ModalView from "../components/ModalView";
import { FontAwesome5 } from "@expo/vector-icons";
import ModalClass from "../components/ModalClass";
import MyButton from "../components/MyButton";
import moment from "moment";

// import { ScrollView } from "react-native-gesture-handler";
import { getUser } from "../apis/LoginApi";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const Dashboard = ({ navigation }) => {
  const [refreshing, setRefreshing] = useState(false);

  const [viewModal, setViewModal] = useState(false);
  const [data, setData] = useState([]);
  const [kelas, setKelas] = useState("");
  const [tujuan, setTujuan] = useState("");
  const [dataBus, setDataBus] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  const [viewModalClass, setViewModalClass] = useState(false);
  const [date, setDate] = useState(null);
  const [formattedDate, setFormattedDate] = useState("");

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = `${date.getMonth() + 1}`.padStart(2, "0");
    const day = `${date.getDate()}`.padStart(2, "0");
    return `${year}-${month}-${day}`;
  };
  const onChange = (event, selectedDate) => {
    setDate(selectedDate);
    // const formatted = ;
    setFormattedDate(formatDate(date));
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);

    getUserData();
    getBusData();
    setTujuan("");
    setFormattedDate("");
    setKelas("");
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, []);
  const getUserData = async () => {
    await AsyncStorage.getItem("Token").then(async (token) => {
      const res = await getUser(token);
      // console.log(res.data);
      setData(res.data);
    });
  };
  const getBusToday = async () => {
    const currentDate = new Date();
    const keberangkatans = formatDate(currentDate);
    console.log(keberangkatans);
    try {
      const requestData = {};

      if (kelas) {
        requestData.kelas = kelas;
      }
      if (tujuan) {
        requestData.route = tujuan;
      }

      requestData.keberangkatan = keberangkatans;

      const response = await axios.post(
        "http://192.168.100.36:8080/api/bus/search",
        requestData
      );
      setSearchResults(response.data.data);
      // console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getBusData = async () => {
    // await AsyncStorage.getItem("Token").then(async (token) => {
    const res = await axios.get("http://192.168.100.36:8080/api/bus");
    // console.log(res.data);
    setDataBus(res.data);
    // });
  };

  const showDatepicker = () => {
    showMode("date");
  };
  const showMode = (currentMode) => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: currentMode,
    });
  };

  const handleSearch = () => {
    navigation.navigate("BusList", { kelas, tujuan, formattedDate });
  };
  const handleSearchToday = () => {
    const keberangkatans = formatDate(new Date());
    navigation.navigate("BusList", { keberangkatans });
  };
  // console.log(tujuan);
  useEffect(() => {
    if (date) {
      const formatted = formatDate(date);
      setFormattedDate(formatted);
    }
  }, [date]);
  useEffect(() => {
    getUserData();
    getBusData();
    getBusToday();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFF" }}>
      <ScrollView
        style={{ flex: 1 }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        // showsVerticalScrollIndicator={false}
      >
        <View
          style={{
            paddingHorizontal: width / 22,
            paddingBottom: 20,
            width: width,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              height: height / 8,
              marginTop: 10,
            }}
          >
            <View style={{ width: "70%" }}>
              <Text
                style={[StylesFont.semiBoldh5, { color: Colors.PrimaryColor }]}
              >
                Halo,{data.name}
              </Text>
              <Text style={[StylesFont.boldBig]}>Mau Pergi Kemana Nih?</Text>
            </View>
            <View
              style={{
                width: "30%",
                alignItems: "flex-end",
                justifyContent: "flex-end",
              }}
            >
              <View
                style={{
                  width: "70%",
                  height: "80%",
                  borderRadius: width / 30,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: Colors.PrimaryColor,
                }}
              >
                <Image
                  source={avatar}
                  style={{ width: "70%", height: "100%" }}
                />
              </View>
            </View>
          </View>
          <View
            style={{
              backgroundColor: Colors.LightPurple,
              marginTop: width / 10,
              borderRadius: width / 20,
              padding: width / 26,
            }}
          >
            <View style={{ gap: 5 }}>
              <View
                style={{
                  paddingVertical: width / 30,
                  flexDirection: "row",
                  paddingHorizontal: width / 32,
                  borderRadius: width / 30,
                  backgroundColor: Colors.Light,
                }}
              >
                <View
                  style={{ justifyContent: "center", marginRight: width / 20 }}
                >
                  <MaterialCommunityIcons
                    name="home-city"
                    size={20}
                    // style={{ marginHorizontal: 10 }}
                    color="grey"
                  />
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={[StylesFont.regularSmall, { color: "#526D82" }]}>
                    Tujuan
                  </Text>
                  <TouchableOpacity
                    onPress={() => setViewModal(true)}
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      // width: "100%",
                    }}
                  >
                    <Text style={[StylesFont.semiBoldh4]}>
                      {tujuan ? tujuan : "Mau Kemana nih?"}
                    </Text>
                    <AntDesign name="down" size={20} color="black" />
                  </TouchableOpacity>
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  // marginBottom: 5,
                  justifyContent: "center",

                  paddingHorizontal: width / 32,
                  borderRadius: width / 30,
                  backgroundColor: Colors.Light,
                }}
              >
                <View
                  style={{
                    justifyContent: "center",
                    marginRight: width / 20,
                  }}
                >
                  <FontAwesome5 name="calendar-day" size={20} color="grey" />
                </View>
                <View style={{ flex: 1, justifyContent: "center" }}>
                  <TouchableOpacity
                    style={{
                      paddingVertical: width / 30,
                      justifyContent: "center",
                    }}
                    onPress={showDatepicker}
                  >
                    <Text
                      style={[StylesFont.semiBoldh4, { color: Colors.Dark }]}
                    >
                      {formattedDate ? formattedDate : "Pilih Tanggal"}
                    </Text>
                  </TouchableOpacity>
                </View>
                {/* <Button onPress={showDatepicker} title="Show date picker!" />
              <Text>selected: {date.toLocaleString()}</Text> */}
              </View>
              <View
                style={{
                  flexDirection: "row",
                  // marginBottom: 5,
                  justifyContent: "center",

                  paddingHorizontal: width / 36,
                  borderRadius: width / 30,
                  backgroundColor: Colors.Light,
                }}
              >
                <View
                  style={{
                    justifyContent: "center",
                    marginRight: width / 26,
                  }}
                >
                  <MaterialIcons
                    name="business-center"
                    size={24}
                    color="grey"
                  />
                </View>
                <View style={{ flex: 1, justifyContent: "center" }}>
                  <TouchableOpacity
                    onPress={() => setViewModalClass(true)}
                    style={{
                      flexDirection: "row",
                      paddingVertical: width / 30,
                      justifyContent: "space-between",
                      alignItems: "center",
                      // width: "100%",
                    }}
                  >
                    <Text style={[StylesFont.semiBoldh4]}>
                      {kelas === "" ? "Pilih Kelas" : kelas}
                    </Text>
                    <AntDesign name="down" size={20} color="black" />
                  </TouchableOpacity>
                </View>

                {/* <Button onPress={showDatepicker} title="Show date picker!" />
              <Text>selected: {date.toLocaleString()}</Text> */}
              </View>
              <View style={{ marginVertical: width / 30 }}>
                <MyButton title="Search" action={handleSearch} />
              </View>
            </View>
          </View>
          {searchResults != "" ? (
            <View
              style={{
                marginVertical: width / 30,
                justifyContent: "space-between",
                flexDirection: "row",
              }}
            >
              <Text style={[StylesFont.semiBoldh5, { color: Colors.Dark }]}>
                Keberangkatan Hari ini!
              </Text>
              <TouchableOpacity onPress={handleSearchToday}>
                <Text
                  style={[StylesFont.mediumSmall, { color: Colors.DarkPurple }]}
                >
                  Lihat Semua
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            ""
          )}

          <View style={{ gap: 10 }}>
            {searchResults.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() =>
                    navigation.navigate("BusDetail", { id: item.id })
                  }
                  style={{
                    height: height / 5,
                    backgroundColor: Colors.grey,
                    borderColor: Colors.SecondaryColor,
                    borderWidth: 1,
                    borderRadius: width / 20,
                  }}
                >
                  <View
                    style={{
                      width: "100%",
                      borderBottomWidth: 1,
                      paddingHorizontal: width / 26,
                      height: "60%",
                      // borderColor: Colors.SecondaryColor,
                      borderBottomColor: Colors.SecondaryColor,
                      flexDirection: "row",
                      paddingVertical: width / 36,
                    }}
                  >
                    <View style={{ width: "30%" }}>
                      <Image
                        source={
                          item.route === "Indrapura"
                            ? picIndrapura
                            : item.route === "Aek Kanopan"
                            ? picAekKanopan
                            : item.route === "Aek Nabara"
                            ? picAekNabara
                            : item.route === "Ranto prapat"
                            ? picRantauPrapat
                            : item.route === "Kisaran"
                            ? picKisaran
                            : item.route === "Sipiongot"
                            ? picSipiongot
                            : item.route === "Tebing Tinggi"
                            ? picTebing
                            : item.route === "Simangambat"
                            ? picSimangambat
                            : ""
                        }
                        style={{
                          width: "100%",
                          height: "100%",
                          borderRadius: width / 20,
                        }}
                      />
                    </View>
                    <View style={{ width: "70%", padding: width / 28 }}>
                      <Text style={[StylesFont.semiBoldh5]}>{item.route}</Text>
                      <Text
                        style={[StylesFont.regularVerySmall, { color: "grey" }]}
                      >
                        {item.route === "Indrapura"
                          ? "Batu Bara,Sumatera Utara"
                          : item.route === "Aek Kanopan"
                          ? "Labuhan Batu Utara,Sumatera Utara"
                          : item.route === "Aek Nabara"
                          ? "Labuhan Batu,Sumatera Utara"
                          : item.route === "Ranto prapat"
                          ? "Labuhan Batu,Sumatera Utara"
                          : item.route === "Kisaran"
                          ? "Asahan,Sumatera Utara"
                          : item.route === "Sipiongot"
                          ? "Padang Lawas Utara,Sumatera Utara"
                          : item.route === "Tebing Tinggi"
                          ? "Sumatera Utara"
                          : item.route === "Simangambat"
                          ? "Padang Lawas Utara,Sumatera Utara"
                          : ""}
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-around",
                      alignItems: "center",
                      paddingVertical: 5,
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "column",
                        backgroundColor: Colors.LightPurple,
                        padding: 4,
                        borderRadius: 10,
                      }}
                    >
                      <Text style={[StylesFont.mediumSmall, { color: "grey" }]}>
                        Harga
                      </Text>
                      <Text style={[StylesFont.mediumSmall]}>
                        <Text
                          style={[StylesFont.mediumSmall, { color: "#02b80f" }]}
                        >
                          Rp
                        </Text>
                        {item.harga},-
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: "column",
                        backgroundColor: Colors.LightPurple,
                        padding: 4,
                        borderRadius: 10,
                      }}
                    >
                      <Text style={[StylesFont.mediumSmall, { color: "grey" }]}>
                        Tanggal
                      </Text>
                      <Text style={[StylesFont.mediumSmall]}>
                        {item.keberangkatan}
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: "column",
                        backgroundColor: Colors.LightPurple,
                        padding: 4,
                        borderRadius: 10,
                      }}
                    >
                      <Text style={[StylesFont.mediumSmall, { color: "grey" }]}>
                        Kapasitas
                      </Text>
                      <Text style={[StylesFont.mediumSmall]}>
                        {item.kapasitas} Kursi
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: "column",
                        backgroundColor: Colors.LightPurple,
                        padding: 4,
                        borderRadius: 10,
                      }}
                    >
                      <Text style={[StylesFont.mediumSmall, { color: "grey" }]}>
                        Kelas Bus
                      </Text>
                      <Text style={[StylesFont.mediumSmall]}>{item.kelas}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>

          <View
            style={{
              marginVertical: width / 30,
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <Text style={[StylesFont.semiBoldh5, { color: Colors.Dark }]}>
              Semua Keberangkatan!
            </Text>
            <TouchableOpacity onPress={handleSearch}>
              <Text
                style={[StylesFont.mediumSmall, { color: Colors.DarkPurple }]}
              >
                Lihat Semua
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ gap: 10 }}>
            {dataBus.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() =>
                    navigation.navigate("BusDetail", { id: item.id })
                  }
                  style={{
                    height: height / 5,
                    backgroundColor: Colors.grey,
                    borderColor: Colors.SecondaryColor,
                    borderWidth: 1,
                    borderRadius: width / 20,
                  }}
                >
                  <View
                    style={{
                      width: "100%",
                      borderBottomWidth: 1,
                      paddingHorizontal: width / 26,
                      height: "60%",
                      // borderColor: Colors.SecondaryColor,
                      borderBottomColor: Colors.SecondaryColor,
                      flexDirection: "row",
                      paddingVertical: width / 36,
                    }}
                  >
                    <View style={{ width: "30%" }}>
                      <Image
                        source={
                          item.route === "Indrapura"
                            ? picIndrapura
                            : item.route === "Aek Kanopan"
                            ? picAekKanopan
                            : item.route === "Aek Nabara"
                            ? picAekNabara
                            : item.route === "Ranto prapat"
                            ? picRantauPrapat
                            : item.route === "Kisaran"
                            ? picKisaran
                            : item.route === "Sipiongot"
                            ? picSipiongot
                            : item.route === "Tebing Tinggi"
                            ? picTebing
                            : item.route === "Simangambat"
                            ? picSimangambat
                            : ""
                        }
                        style={{
                          width: "100%",
                          height: "100%",
                          borderRadius: width / 20,
                        }}
                      />
                    </View>
                    <View style={{ width: "70%", padding: width / 28 }}>
                      <Text style={[StylesFont.semiBoldh5]}>{item.route}</Text>
                      <Text
                        style={[StylesFont.regularVerySmall, { color: "grey" }]}
                      >
                        {item.route === "Indrapura"
                          ? "Batu Bara,Sumatera Utara"
                          : item.route === "Aek Kanopan"
                          ? "Labuhan Batu Utara,Sumatera Utara"
                          : item.route === "Aek Nabara"
                          ? "Labuhan Batu,Sumatera Utara"
                          : item.route === "Ranto prapat"
                          ? "Labuhan Batu,Sumatera Utara"
                          : item.route === "Kisaran"
                          ? "Asahan,Sumatera Utara"
                          : item.route === "Sipiongot"
                          ? "Padang Lawas Utara,Sumatera Utara"
                          : item.route === "Tebing Tinggi"
                          ? "Sumatera Utara"
                          : item.route === "Simangambat"
                          ? "Padang Lawas Utara,Sumatera Utara"
                          : ""}
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-around",
                      alignItems: "center",
                      paddingVertical: 5,
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "column",
                        backgroundColor: Colors.LightPurple,
                        padding: 4,
                        borderRadius: 10,
                      }}
                    >
                      <Text style={[StylesFont.mediumSmall, { color: "grey" }]}>
                        Harga
                      </Text>
                      <Text style={[StylesFont.mediumSmall]}>
                        <Text
                          style={[StylesFont.mediumSmall, { color: "#02b80f" }]}
                        >
                          Rp
                        </Text>
                        {item.harga},-
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: "column",
                        backgroundColor: Colors.LightPurple,
                        padding: 4,
                        borderRadius: 10,
                      }}
                    >
                      <Text style={[StylesFont.mediumSmall, { color: "grey" }]}>
                        Tanggal
                      </Text>
                      <Text style={[StylesFont.mediumSmall]}>
                        {item.keberangkatan}
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: "column",
                        backgroundColor: Colors.LightPurple,
                        padding: 4,
                        borderRadius: 10,
                      }}
                    >
                      <Text style={[StylesFont.mediumSmall, { color: "grey" }]}>
                        Kapasitas
                      </Text>
                      <Text style={[StylesFont.mediumSmall]}>
                        {item.kapasitas} Kursi
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: "column",
                        backgroundColor: Colors.LightPurple,
                        padding: 4,
                        borderRadius: 10,
                      }}
                    >
                      <Text style={[StylesFont.mediumSmall, { color: "grey" }]}>
                        Kelas Bus
                      </Text>
                      <Text style={[StylesFont.mediumSmall]}>{item.kelas}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
        <Modal animationType="slide" transparent={true} visible={viewModal}>
          <ModalView
            actionClose={() => setViewModal(false)}
            setTujuan={setTujuan}
          />
        </Modal>
        <Modal
          animationType="slide"
          transparent={true}
          visible={viewModalClass}
        >
          <ModalClass
            actionClose={() => setViewModalClass(false)}
            setKelas={setKelas}
          />
        </Modal>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Dashboard;
