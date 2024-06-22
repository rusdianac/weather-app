import React, { useState } from "react"; // Mengimpor React dan hook useState untuk manajemen state
import axios from "axios"; // Mengimpor axios untuk melakukan permintaan HTTP
import { BASE_URL, API_KEY } from "./src/components/constant"; // Mengimpor BASE_URL dan API_KEY dari file constant.js
import { View, StyleSheet, ActivityIndicator, Text } from "react-native"; // Mengimpor komponen-komponen dari React Native
import WeatherSearch from "./src/components/weatherSearch"; // Mengimpor komponen WeatherSearch
import WeatherInfo from "./src/components/weatherInfo"; // Mengimpor komponen WeatherInfo

const App = () => {
  const [weatherData, setWeatherData] = useState(); // Mendefinisikan state untuk menyimpan data cuaca
  const [status, setStatus] = useState(""); // Mendefinisikan state untuk menyimpan status permintaan

  // Fungsi untuk merender komponen berdasarkan status permintaan
  const renderComponent = () => {
    switch (status) {
      case "loading":
        return <ActivityIndicator size="large" />; // Menampilkan indikator loading saat status adalah "loading"
      case "success":
        return <WeatherInfo weatherData={weatherData} />; // Menampilkan informasi cuaca saat status adalah "success"
      case "error":
        return <Text style={styles.errorText}>Something went wrong. Please try again with a correct city name.</Text>; // Menampilkan pesan error saat status adalah "error"
      default:
        return null; // Mengembalikan null jika status tidak sesuai dengan ketiga kondisi di atas
    }
  };

  // Fungsi untuk mencari cuaca berdasarkan lokasi
  const searchWeather = (location) => {
    setStatus("loading"); // Mengatur status menjadi "loading"
    axios
      .get(`${BASE_URL}?q=${location}&appid=${API_KEY}`) // Melakukan permintaan HTTP ke API cuaca
      .then((response) => {
        const data = response.data; // Mengambil data dari respons
        data.visibility /= 1000; // Mengonversi visibility dari meter ke kilometer
        data.visibility = data.visibility.toFixed(2); // Membulatkan visibility ke 2 desimal
        data.main.temp -= 273.15; // Mengonversi suhu dari Kelvin ke Celsius
        data.main.temp = data.main.temp.toFixed(2); // Membulatkan suhu ke 2 desimal
        setWeatherData(data); // Mengatur state weatherData dengan data yang diterima
        setStatus("success"); // Mengatur status menjadi "success"
      })
      .catch((error) => {
        setStatus("error"); // Mengatur status menjadi "error" jika terjadi kesalahan
      });
  };

  return (
    <View style={styles.container}>
      {/* Memanggil fungsi renderComponent untuk menampilkan komponen berdasarkan status */}
      <View style={styles.centered}>{renderComponent()}</View>
      {/* Memanggil komponen WeatherSearch dan memberikan fungsi searchWeather sebagai prop */}
      <WeatherSearch searchWeather={searchWeather} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Mengatur flexbox agar container mengambil seluruh ruang yang tersedia
    justifyContent: "space-between", // Mengatur konten agar tersebar merata secara vertikal
    padding: 20, // Memberikan padding pada container
  },
  centered: {
    flex: 1, // Mengatur flexbox agar centered mengambil seluruh ruang yang tersedia
    justifyContent: "center", // Mengatur konten agar berada di tengah secara vertikal
    alignItems: "center", // Mengatur konten agar berada di tengah secara horizontal
  },
  errorText: {
    textAlign: "center", // Mengatur teks agar berada di tengah secara horizontal
    fontSize: 16, // Mengatur ukuran font teks
    color: "red", // Mengatur warna teks menjadi merah
  },
  margintTop20: {
    marginTop: 20, // Memberikan margin atas sebesar 20
  },
});

export default App; // Mengekspor komponen App sebagai default export
