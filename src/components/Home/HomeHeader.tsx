import { StyleSheet, View, Text, Pressable } from "react-native";
import React from "react";

export default function HomeHeader() {
  return (
    <View style={styles.headerContent}>
      <Text style={styles.title}>Camara</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContent: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 28,
  },
});
