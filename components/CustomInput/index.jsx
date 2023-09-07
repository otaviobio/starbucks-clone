import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { FloatingLabelInput } from "react-native-floating-label-input";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function CustomInput({ signIn = false, ...props }) {
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    if (props.value) {
      setIsFocused(true);
    }
  }, []);

  return (
    <View style={styles.input}>
      <FloatingLabelInput
        isFocused={isFocused}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        animationDuration={150}
        containerStyles={
          signIn
            ? {
                borderBottomWidth: 1,
                paddingHorizontal: 0,
                backgroundColor: "#fff",
                borderColor: isFocused ? "#1E3932" : "#7C7C8A",
                height: 30,
              }
            : {
                borderWidth: isFocused ? 2 : 1,
                paddingHorizontal: 10,
                backgroundColor: "#fff",
                borderColor: isFocused ? "#1E3932" : "#7C7C8A",
                borderRadius: 8,
              }
        }
        customLabelStyles={
          signIn
            ? {
                colorBlurred: "#7C7C8A",
                colorFocused: "#7C7C8A",
                fontSizeFocused: 12,
                topFocused: -15,
                topBlurred: 0,
              }
            : {
                colorFocused: isFocused ? "#00754A" : "#7C7C8A",
                colorBlurred: "#7C7C8A",
                fontSizeFocused: 12,
                topFocused: -25,
                paddingHorizontal: 5,
              }
        }
        customInputStyles={
          signIn
            ? {
                paddingHorizontal: 0,
              }
            : {
                paddingHorizontal: 5,
              }
        }
        labelStyles={{
          backgroundColor: "#fff",

        }}
        inputStyles={{
          color: "#323238",
        }}
        customShowPasswordComponent={
          <MaterialCommunityIcons
            name="eye"
            size={25}
            color="#323238"
            style={{ marginRight: 5 }}
          />
        }
        customHidePasswordComponent={
          <MaterialCommunityIcons
            name="eye-off"
            size={25}
            color="#323238"
            style={{ marginRight: 5 }}
          />
        }
        {...props}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    width: "92%",
    height: 50,
    marginVertical: 10,
    // borderColor: "blue",
  },
});
