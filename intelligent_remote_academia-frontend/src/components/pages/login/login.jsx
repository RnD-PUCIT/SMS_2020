import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import { Grid, makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import InputAdornment from "@material-ui/core/InputAdornment";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import LockIcon from "@material-ui/icons/Lock";
import { Formik } from "formik";
import * as Yup from "yup";
import { IoSchoolOutline } from "react-icons/io5";

import AlertSimple from "../../common/alerts/alertSimple";
import http from "../../../services/httpService";
import colors from "../../../colors";

const useStyles = makeStyles((theme) => ({
  outerContainer: {
    background: "linear-gradient(to right, #0052d4, #4364f7, #6fb1fc)",
  },
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: "white",
    padding: "40px 30px",
  },
  container: {
    display: "flex",
    height: "100vh",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(2, 1, 1, 1),
  },
  form: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(4),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  imageBg: {
    background: "url(require('./login-bg.jpg'))",
    height: "100%",
  },
  heading: {
    color: "white",
    letterSpacing: 2,
    fontWeight: "lighter",
    fontSize: 50,
  },
  loginText: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    padding: "0 40px",
  },
  subHeading: {
    color: "white",
    marginTop: 20,
    fontWeight: "300",
  },
  formHeading: {
    alignSelf: "flex-start",
    color: colors.primary,
    marginTop: theme.spacing(5),
    fontSize: 20,
    fontWeight: "500",
  },
  gridContainer: {
    boxShadow: "0 0 10px #212529",
  },
}));

const formSchema = Yup.object().shape({
  username: Yup.string()
    // .min(6, 'Username must be atleast 6 characters long')
    .required("Username is required"),
  password: Yup.string()
    .required("Password is required")
    .min(3, "Must be atleast 6 characters"),
});

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);
  const classes = useStyles();

  const handleLogin = async (values) => {
    if (values.username.length === 0 || values.password.length === 0) return;

    const url = "/account/login";

    try {
      // Send Ajax call to the server
      const { data } = await http.post(url, values);

      // Get token
      const { token: jwt } = data;

      // store it to local storage
      localStorage.setItem("token", jwt);

      // Redirect the user to dashboard
      window.location = "/";
    } catch (ex) {
      if (ex.response && ex.response.status === 401) {
        setError("Invalid username or password.");
      } else if (ex.response && ex.response.status === 404) {
        window.location = "/notFound";
      }
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={classes.outerContainer}>
      <Container className={classes.container} maxWidth="md" component="main">
        <Grid container className={classes.gridContainer}>
          <Grid item xs={7}>
            <div className="login-bg">
              <div className="login-bg--overlay">
                <div className={classes.loginText}>
                  <h1 className={classes.heading}>
                    Intelligent Remote Academia
                  </h1>
                  <h6 className={classes.subHeading}>
                    An intelligently smart solution for every institution!
                  </h6>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={5}>
            <div className={classes.root}>
              <IoSchoolOutline color={colors.primary} size={50} />
              <h5 className={classes.formHeading}>Welcome back! Sign in...</h5>
              <Formik
                initialValues={{
                  username: "",
                  password: "",
                }}
                validationSchema={formSchema}
              >
                {({ handleSubmit, getFieldProps, errors, touched, values }) => {
                  return (
                    <form className={classes.form} onSubmit={handleSubmit}>
                      <TextField
                        variant="outlined"
                        margin="normal"
                        error={
                          errors.username && touched.username ? true : false
                        }
                        fullWidth
                        // id='username'
                        label="Username"
                        name="username"
                        autoComplete="true"
                        autoFocus
                        {...getFieldProps("username")}
                        helperText={
                          errors.username && touched.username
                            ? errors.username
                            : ""
                        }
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <PermIdentityIcon />
                            </InputAdornment>
                          ),
                        }}
                      />
                      <TextField
                        variant="outlined"
                        margin="normal"
                        error={
                          errors.password && touched.password ? true : false
                        }
                        fullWidth
                        name="password"
                        label="Password"
                        type={showPassword ? "text" : "password"}
                        // id='password'
                        {...getFieldProps("password")}
                        helperText={
                          errors.password && touched.password
                            ? errors.password
                            : ""
                        }
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <LockIcon />
                            </InputAdornment>
                          ),
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                onClick={handleClickShowPassword}
                                aria-label="toggle password visibility"
                                edge="end"
                              >
                                {showPassword ? (
                                  <Visibility />
                                ) : (
                                  <VisibilityOff />
                                )}
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                      />
                      {error && (
                        <AlertSimple severity="error" message={error} />
                      )}
                      <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                      />
                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={() => handleLogin(values)}
                      >
                        Sign In
                      </Button>
                    </form>
                  );
                }}
              </Formik>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Login;
