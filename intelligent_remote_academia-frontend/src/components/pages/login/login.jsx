import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import { CssBaseline, withStyles } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import InputAdornment from '@material-ui/core/InputAdornment';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import LockIcon from '@material-ui/icons/Lock';
import { Formik } from 'formik';
import * as Yup from 'yup';
import jwt_decode from 'jwt-decode';

import axios from 'axios';

import AlertSimple from '../../common/alerts/alertSimple';
import http from '../../../services/httpService';

const styles = (theme) => ({
  outerContainer: {
    background: 'linear-gradient(180deg, #778ca3 0%, #00d2d3 100%)',
  },
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: 'white',
    borderRadius: '10px',
  },
  container: {
    display: 'flex',
    height: '100vh',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(2, 1, 1, 1),
    backgroundColor: theme.palette.common.black,
  },
  form: {
    margin: theme.spacing(5),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});

const formSchema = Yup.object().shape({
  username: Yup.string()
    .required('Required*')
    .matches(/^[0-9]+$/, 'Must be only digits')
    .min(4, 'Must be exactly 13 digits')
    .max(4, 'Must be exactly 13 digits'),
  password: Yup.string()
    .required('Required*')
    .min(3, 'Must be atleast 6 characters'),
});

class Login extends Component {
  state = {
    showPassword: false,
    error: null,
  };

  handleClickShowPassword = () => {
    this.setState({ showPassword: !this.state.showPassword });
  };

  render() {
    const handleLogin = async (values) => {
      const url = '/account/login';

      try {
        // Send Ajax call to the server
        const { data } = await http.post(url, values);

        // Get token
        const { token: jwt } = data;

        // store it to local storage
        localStorage.setItem('token', jwt);

        const decoded = jwt_decode(jwt);
        const { role } = decoded;

        // Redirect the user to dashboard
        window.location = '/';
      } catch (ex) {
        if (ex.response && ex.response.status === 400) {
          const error = ex.response.data;
          this.setState({ error });
        } else if (ex.response && ex.response.status === 404) {
          window.location = '/notFound';
        }
      }
    };

    const { classes } = this.props;
    return (
      <div className={classes.outerContainer}>
        <Container className={classes.container} maxWidth="sm" component="main">
          <CssBaseline />
          <div className={classes.root}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Formik
              initialValues={{
                username: '',
                password: '',
              }}
              validationSchema={formSchema}
            >
              {({ handleSubmit, getFieldProps, errors, touched, values }) => {
                return (
                  <form className={classes.form} onSubmit={handleSubmit}>
                    <TextField
                      variant="outlined"
                      margin="normal"
                      error={errors.username && touched.username ? true : false}
                      fullWidth
                      // id='username'
                      label="Username"
                      name="username"
                      autoComplete="true"
                      autoFocus
                      {...getFieldProps('username')}
                      helperText={
                        errors.username && touched.username
                          ? errors.username
                          : ''
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
                      error={errors.password && touched.password ? true : false}
                      fullWidth
                      name="password"
                      label="Password"
                      type={this.state.showPassword ? 'text' : 'password'}
                      // id='password'
                      {...getFieldProps('password')}
                      helperText={
                        errors.password && touched.password
                          ? errors.password
                          : ''
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
                              onClick={this.handleClickShowPassword}
                              aria-label="toggle password visibility"
                              edge="end"
                            >
                              {this.state.showPassword ? (
                                <Visibility />
                              ) : (
                                <VisibilityOff />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                    {this.state.error && (
                      <AlertSimple
                        severity="error"
                        message={this.state.error}
                      />
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
        </Container>
      </div>
    );
  }
}

export default withStyles(styles)(Login);
