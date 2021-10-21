import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { StylesContext } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    paddingTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: "#282c34",
    opacity: "100%",
    padding: "30px",
    borderRadius: "15px",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  large: {
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
  backgroundContainer: {
    backgroundImage: `url(https://i.imgur.com/DRM6nkf.jpg)`,
    position: "fixed",
    backgroundRepeat: "no-repeat",
    maxWidth: "xs",
    backgroundSize: "100%"
  }
}));

export default function SignIn() {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Logging in...");
    fetch('http://localhost:5000/users/authenticate', {
      method: 'POST',
      body: JSON.stringify({email: email,
                            password: password}),
      headers: {'Content-Type': 'application/json'}
    }).then(result => {
      if(result.status == 200) {
        history.push("/");
        console.log("Logged in, auth cookie saved...")
      } else {
        const error = new Error((result as any).error);
        throw error;
      }
    }).catch(error => {
      console.error(error);
      console.log("Failed to log in.");
    });
  }
  //document.body.style.background = "url(https://i.imgur.com/DRM6nkf.jpg) center center/cover fixed no-repeat";
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar  src="https://i.imgur.com/IPCYcTn.png" variant="square" className={classes.large}/>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="filled"
            value={email}
            onChange={event => setEmail(event.target.value as string)}
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            value={password}
            onChange={event => setPassword(event.target.value as string)}
            variant="filled"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            href="/"
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleSubmit}
          >
            Sign In
          </Button>
          <Grid container spacing={2}>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/SignUp" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8} >
        <Typography variant="body2" color="textSecondary" align="center">
          {'Not Copyright © '}
          <Link color="inherit" href="/">
            Valodraft
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
      </Box>
    </Container>
  );
}
