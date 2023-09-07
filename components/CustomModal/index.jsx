import { Modal, Text, TouchableWithoutFeedback, View } from "react-native";
import {
  Choice,
  ChoicesContainer,
  ChoiceText,
  Content,
  Header,
  HeaderTitle,
  ModalContainer,
} from "./styles";

export default function CustomModal({ visible, choices, onClose, header, onChoice }) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={() => {
        // Add any required code to handle the modal closing
      }}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <ModalContainer>
          <ChoicesContainer>
            <Header>
              <HeaderTitle>{header}</HeaderTitle>
            </Header>
            <Content>
              {choices &&
                choices.map((choice) => (
                  <Choice key={choice} onPress={() => onChoice(choice)}>
                    <ChoiceText key={choice}>{choice}</ChoiceText>
                  </Choice>
                ))}
            </Content>
          </ChoicesContainer>
        </ModalContainer>
      </TouchableWithoutFeedback>
    </Modal>
  );
}
