import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeHeader from "../components/Home/HomeHeader";

export default function Home() {
  return (
    <SafeAreaView style={styles.homeContent}>
      <HomeHeader />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  homeContent: {
    flex: 1,
    marginTop: 45,
  },
});
