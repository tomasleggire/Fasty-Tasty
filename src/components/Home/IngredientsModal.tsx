import Modal from "react-native-modal";
import React from "react";
import { Button, Text, View } from "react-native";

interface Props {
  modalVisible: boolean;
  closeModal: () => void;
}

export default function IngredientsModal(props: Props) {
  const { modalVisible, closeModal } = props;

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Modal
        isVisible={modalVisible}
        onBackdropPress={closeModal}
        animationIn="zoomInDown"
        animationOut="slideOutLeft"
        animationInTiming={600}
        animationOutTiming={600}
        backdropTransitionInTiming={600}
        backdropTransitionOutTiming={600}
        onBackButtonPress={closeModal}
      >
        <View
          style={{
            flex: 1,
            margin: 0,
            backgroundColor: "white",
            padding: 22,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 4,
            borderColor: "rgba(0, 0, 0, 0.1)",
          }}
        >
          <Text>Hola Mundo!</Text>
          <Button title="Cerrar" onPress={closeModal} />
        </View>
      </Modal>
    </View>
  );
}
