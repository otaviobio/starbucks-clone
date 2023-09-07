import BouncyCheckbox from "react-native-bouncy-checkbox";

export default function Checkbox() {
  return (
    <BouncyCheckbox
      size={25}
      isChecked={false}
      fillColor="#006241"
      unfillColor="#FFFFFF"
      bouncinessIn={0}
      bouncinessOut={0}
      iconStyle={{ borderColor: "#006241", borderRadius: 7 }}
      innerIconStyle={{ borderWidth: 1, borderRadius: 7 }}
      onPress={(isChecked: boolean) => {}}
    />
  );
}
