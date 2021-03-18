import React, { useContext } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import facebook from '../../images/Facebook.png';
import google from '../../images/Google.png';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
if(firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const [loggedInUser,setLoggedInUser]=useContext(UserContext);
  const classes = useStyles();
  const history=useHistory();
  const location=useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
  const handleGoogleSignIn=()=>{
    const gProvider = new firebase.auth.GoogleAuthProvider();
    firebase.auth()
  .signInWithPopup(gProvider)
  .then((result) => {
 
    var credential = result.credential;

 
    var token = credential.accessToken;

    var user = result.user;

    const {displayName,email}=user;
    const {vehicle}=loggedInUser;
    const signedInUser={name:displayName,email:email,isSignedIn:true,password:'',vehicle:vehicle};
    setLoggedInUser(signedInUser);
    console.log(user);
    history.replace(from);
  }).catch((error) => {

    var errorCode = error.code;
    var errorMessage = error.message;

    var email = error.email;

    var credential = error.credential;

  });
  }
  const handleFbSignIn=()=>{
    var fbProvider = new firebase.auth.FacebookAuthProvider();
    firebase
  .auth()
  .signInWithPopup(fbProvider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // The signed-in user info.
    var user = result.user;

    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    var accessToken = credential.accessToken;
    const {displayName,email}=user;
    const {vehicle}=loggedInUser;
    const signedInUser={name:displayName,email:email,isSignedIn:true,password:'',vehicle:vehicle};
    setLoggedInUser(signedInUser);
    console.log(user);
    history.replace(from);
    // ...
  })
  .catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;

    // ...
  });
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Create an account
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>


            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Name"
                name="name"
              />
            </Grid>
            <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              label="Email Address"
              name="email"
            />
          </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"

                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Confirm Password"
                type="password"
                autoComplete="current-password"
              />
            </Grid>
          </Grid>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            >Sign Up</Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link to="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <br/>
      <p style={{textAlign:'center', color:'lightgray',fontSize:'30px'}}>Or</p>
      <div onClick={handleFbSignIn} style={{display:'flex', border:'1px solid lightgray', borderRadius:'20px', cursor:'pointer'}}>
      <img style={{width:'20%',height:'20%'}} src={facebook} alt=""/><p style={{marginTop:'7%', float:'right', fontSize:'20px'}}>Continue With Facebook</p>
      </div>
      <div onClick={handleGoogleSignIn} style={{display:'flex', border:'1px solid lightgray', borderRadius:'20px', cursor:'pointer'}}>
      <img style={{width:'20%',height:'20%'}} src={google} alt=""/><p style={{marginTop:'7%', float:'right', fontSize:'20px'}}>Continue With Google</p>
      </div>
    </Container>
  );
}