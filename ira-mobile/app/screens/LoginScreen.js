import React from "react";
import { StyleSheet } from "react-native";

import Screen from "../components/Screen";
import AppForm from "../components/form/AppForm";

import * as Yup from "yup";
import AppFormField from "../components/form/AppFormField";

const validationSchema = Yup.object().shape({
  Username: Yup.string().required().label("Username"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen() {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{ username: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          placeholder="Password"
          name="password"
          secureTextEntry
        />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
});

export default LoginScreen;
