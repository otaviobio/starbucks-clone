import React, { useState, useEffect } from 'react';
import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import CustomInput from '../components/CustomInput'
import { JoinBtn, JoinContainer, JoinTxt } from './Home/styles';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputsContainer}>
      <CustomInput
        signIn
        label="Email or username"
        value={email}
        onChangeText={value => setEmail(value)}
      />
      <CustomInput
        signIn
        label="Password"
        isPassword
        togglePassword={false}
        value={password}
        onChangeText={value => setPassword(value)}
      />
      </View>
      <View style={styles.forgotContainer}>
        <Pressable style={styles.forgotLinks}>
          <Text style={styles.forgotText}>Forgot username?</Text>
        </Pressable>
        <Pressable style={styles.forgotLinks}>
          <Text style={styles.forgotText}>Forgot password?</Text>
        </Pressable>
      </View>
      <JoinContainer>
        <JoinBtn>
          <JoinTxt>Sign in</JoinTxt>
        </JoinBtn>
      </JoinContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  inputsContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
  },

  forgotContainer: {
    // marginVertical: 10,
    marginLeft: 20,
    alignSelf: 'flex-start',
  },

  forgotLinks: {
    marginVertical: 10
  },

  forgotText: {
    color: "#00754A",
    fontSize: 14,
    fontWeight: "500"
  }
});