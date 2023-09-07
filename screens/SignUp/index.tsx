import React, { useState, useEffect } from "react";
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import CustomInput from "../../components/CustomInput";
import {
  Container,
  Content,
  Divider,
  DividerText,
  JoinBtn,
  JoinTxt,
  TermsContainer,
  TermsHeadline,
  TermsSubText,
  TermsTextContainer,
} from "./styles";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Checkbox from "../../components/Checkbox";

export default function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Container>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ width: "100%", height: "100%" }}
      >
        <Content>
          <DividerText>Personal info</DividerText>
          <Divider />
          <CustomInput
            label="First name"
            value={firstName}
            onChangeText={(value) => setFirstName(value)}
            customShowPasswordComponent={<Text>Show</Text>}
            customHidePasswordComponent={<Text>Hide</Text>}
          />
          <CustomInput
            label="Last name"
            value={lastName}
            // staticLabel
            hintTextColor={"#aaa"}
            onChangeText={(value) => setLastName(value)}
          />
        </Content>
        <Content>
          <DividerText>Security</DividerText>
          <Divider />
          <CustomInput
            label="Email"
            value={email}
            onChangeText={(value) => setEmail(value)}
          />
          <CustomInput
            label="Password"
            isPassword
            togglePassword={false}
            value={password}
            onChangeText={(value) => setPassword(value)}
          />
        </Content>
        <Content>
          <DividerText>Terms</DividerText>
          <Divider />
          <TermsContainer>
            <Checkbox />
            <TermsTextContainer>
              <TermsHeadline>Yes, I'd like email from Starbucks</TermsHeadline>
              <TermsSubText>
                Know about product offers, announcements and initiatives.
              </TermsSubText>
            </TermsTextContainer>
          </TermsContainer>
          <TermsContainer>
            <Checkbox />
            <TermsTextContainer>
              <TermsHeadline>I'd like to use Biometric Unlock</TermsHeadline>
              <TermsSubText>
                Use Biometric Unlock to sign in, authorize{"\n"}purchases,
                preloads, transfers, and more.
              </TermsSubText>
            </TermsTextContainer>
          </TermsContainer>
          <TermsContainer>
            <Checkbox />
            <TermsTextContainer>
              <TermsHeadline>I accept the terms of use</TermsHeadline>
              <TermsSubText>
                By joining, I agree to Starbucks Rewards Terms,{"\n"}Starbucks
                Card Terms, Application Terms{"\n"}and have read the Privacy
                Statement.
              </TermsSubText>
            </TermsTextContainer>
          </TermsContainer>
          <View style={styles.forgotContainer}>
            <Pressable style={styles.forgotLinks}>
              <Text style={styles.forgotText}>Rewards Terms</Text>
            </Pressable>
            <Pressable style={styles.forgotLinks}>
              <Text style={styles.forgotText}>Application Terms</Text>
            </Pressable>
            <Pressable style={styles.forgotLinks}>
              <Text style={styles.forgotText}>Card Terms</Text>
            </Pressable>
            <Pressable style={styles.forgotLinks}>
              <Text style={styles.forgotText}>Privacy Statement</Text>
            </Pressable>
          </View>
          <JoinBtn>
            <JoinTxt>Join now</JoinTxt>
          </JoinBtn>
        </Content>
      </ScrollView>
    </Container>
  );
}

const styles = StyleSheet.create({
  forgotContainer: {
    // marginVertical: 10,
    marginLeft: 70,
    marginBottom: 30,
    alignSelf: "flex-start",
  },

  forgotLinks: {
    marginVertical: 10,
  },

  forgotText: {
    color: "#00754A",
    fontSize: 14,
    fontWeight: "500",
  },
});
