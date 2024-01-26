import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeHeader from "../components/Home/HomeHeader";
import IngredientsModal from "../components/Home/IngredientsModal";

export default function Home() {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.homeContent}>
      <HomeHeader openModal={openModal} />
      <IngredientsModal modalVisible={modalVisible} closeModal={closeModal} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  homeContent: {
    flex: 1,
    marginTop: 45,
  },
});
