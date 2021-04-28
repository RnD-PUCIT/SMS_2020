import React from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import AppForm from "../components/form/AppForm";
import SubmitButton from "../components/form/SubmitButton";
import AppFormField from "../components/form/AppFormField";
import colors from "../config/colors";
import AppText from "../components/AppText";

const validationSchema = Yup.object().shape({
  username: Yup.string().required().label("Username"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen() {
  return (
    <React.Fragment>
      <View style={styles.logoContainer}>
        <Text style={styles.tagLine}>Intelligent Remote Academia</Text>
      </View>
      <View style={styles.formContainer}>
        <AppText style={{ fontSize: 14, marginBottom: 5 }}>
          Welcome back! Login to your account
        </AppText>
        <AppForm
          initialValues={{ username: "", password: "" }}
          onSubmit={(values) => console.log(values)}
          validationSchema={validationSchema}
        >
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="account"
            name="username"
            placeholder="Username"
          />
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            placeholder="Password"
            name="password"
            secureTextEntry
          />
          <SubmitButton title="Login" />
        </AppForm>
      </View>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    paddingHorizontal: 15,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    position: "relative",
    top: -120,
    backgroundColor: colors.white,
    paddingTop: 30,
  },
  logoContainer: {
    backgroundColor: colors.primary,
    height: "60%",
  },
  tagLine: {
    paddingTop: 100,
    fontSize: 30,
    fontWeight: "600",
    color: colors.white,
    textAlign: "center",
    lineHeight: 45,
    letterSpacing: 3,
  },
});

export default LoginScreen;
