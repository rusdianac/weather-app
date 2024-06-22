import React from "react"; // Mengimpor React
import { View, Text, StyleSheet, Image } from "react-native"; // Mengimpor komponen-komponen dari React Native

// Komponen WeatherInfo menerima prop weatherData
const WeatherInfo = ({ weatherData }) => {
  return (
    <View style={styles.marginTop20}>
      {/* // Menampilkan nama kota */}
      <Text style={styles.text}>The weather of {weatherData.name}</Text>
      {/* // Menampilkan suhu */}
      <Text style={[styles.temperature, styles.marginTop20]}>{weatherData.main.temp} C</Text>
      <View style={[styles.rowContainer, styles.marginTop20]}>
        {/* // Menampilkan ikon cuaca */}
        <Image source={{ uri: `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png` }} style={styles.weatherIcon} />
        {/* // Menampilkan deskripsi singkat cuaca */}
        <Text style={[styles.text, styles.bold]}>{weatherData.weather[0].main}</Text>
      </View>
      {/* // Menampilkan deskripsi lengkap cuaca */}
      <Text style={styles.text}>{weatherData.weather[0].description}</Text>
      <View style={[styles.rowContainer, styles.marginTop20]}>
        <Text style={[styles.text, styles.bold]}>Visibility :</Text>
        {/* // Menampilkan visibility */}
        <Text style={[styles.text, styles.marginLeft15]}>{weatherData.visibility} km</Text>
      </View>
      <View style={[styles.rowContainer, styles.marginTop20]}>
        <Text style={[styles.text, styles.bold]}>Wind Speed :</Text>
        {/* // Menampilkan kecepatan angin */}
        <Text style={[styles.text, styles.marginLeft15]}>{weatherData.wind.speed} m/s</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  marginTop20: {
    marginTop: 20, // Memberikan margin atas sebesar 20
  },
  marginLeft15: {
    marginLeft: 15, // Memberikan margin kiri sebesar 15
  },
  text: {
    textAlign: "center", // Mengatur teks agar berada di tengah secara horizontal
    fontSize: 16, // Mengatur ukuran font teks
  },
  bold: {
    fontWeight: "700", // Mengatur teks menjadi bold
  },
  rowContainer: {
    flexDirection: "row", // Mengatur konten agar berada dalam satu baris
    justifyContent: "center", // Mengatur konten agar berada di tengah secara horizontal
    alignItems: "center", // Mengatur konten agar berada di tengah secara vertikal
  },
  temperature: {
    fontWeight: "700", // Mengatur teks menjadi bold
    fontSize: 80, // Mengatur ukuran font teks menjadi 80
    textAlign: "center", // Mengatur teks agar berada di tengah secara horizontal
  },
  weatherIcon: {
    width: 50, // Mengatur lebar ikon cuaca menjadi 50
    height: 50, // Mengatur tinggi ikon cuaca menjadi 50
  },
});

export default WeatherInfo; // Mengekspor komponen WeatherInfo sebagai default export
