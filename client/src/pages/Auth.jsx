// import React, { useState } from "react";
// // import useStyles from "../styles/styles";
// import { LockOutlined } from "@mui/icons-material";
// import { GoogleLogin, googleLogout } from "@react-oauth/google";
// import { GoogleOAuthProvider } from "@react-oauth/google";
// import Input from "../components/Input";
// import {jwtDecode} from "jwt-decode";
// // import { signin, signup } from "../../actions/auth";
// import axios from "axios";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router";
// import { authActions } from "../store/authSlice";
// const initialState = {
//   firstName: "",
//   lastName: "",
//   email: "",
//   password: "",
//   confirmPassword: "",
// };

// const Auth = () => {
// //   const classes = useStyles();
//   const [showPassword, setShowPassword] = useState(false);
//   const [isSignup, setIsSignup] = useState(false);
//   // const state = null;
//   const [formData, setFormData] = useState(initialState);
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
// //   const history = useHistory();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (isSignup) {
//       dispatch(authActions.signup({formData,navigate}));
//     } else {
//       dispatch(authActions.login({formData,navigate}));
//     }
//   };
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleShowPassword = () =>
//     setShowPassword((prevShowPassword) => !prevShowPassword);

//   const switchMode = () => {
//     setIsSignup((prevIsSignup) => !prevIsSignup);
//     setShowPassword(false);
//   };

//   const createOrGetUser = async (response) => {
//     const token = response?.credential;
//     const result = jwtDecode(response?.credential);
//     try {
//       dispatch({ type: "AUTH", data: { result, token } });
//     //   useNavigate
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   const googleFailure = (error) => {
//     console.log(error);
//     console.log("Google SignIn was unsuccessful. Please try again later.");
//   };

//   return (
//     <GoogleOAuthProvider clientId="266104902558-rk93pc7u4tr7d9rd6vcm82gprtb4n5hc.apps.googleusercontent.com">
//       <Container component="main" maxWidth="xs">
//         <Paper className={classes.paper} elevation={3}>
//           <Avatar className={classes.avatar}>
//             <LockOutlined />
//           </Avatar>
//           <Typography variant="h5">
//             {isSignup ? "Sign Up" : "Sign In"}
//           </Typography>
//           <form className={classes.form} onSubmit={handleSubmit}>
//             <Grid container spacing={2}>
//               {isSignup ? (
//                 <>
//                   <Input
//                     name="firstName"
//                     label="First Name"
//                     handleChange={handleChange}
//                     autoFocus
//                     half
//                   />
//                   <Input
//                     name="lastName"
//                     label="Last Name"
//                     handleChange={handleChange}
//                     half
//                   />
//                 </>
//               ) : null}
//               <Input
//                 name="email"
//                 label="Email Address"
//                 handleChange={handleChange}
//                 type="email"
//               />
//               <Input
//                 name="password"
//                 label="Password"
//                 handleChange={handleChange}
//                 type={showPassword ? "text" : "password"}
//                 handleShowPassword={handleShowPassword}
//               />
//               {isSignup ? (
//                 <Input
//                   name="confirmPassword"
//                   label="Repeat Password"
//                   handleChange={handleChange}
//                   type="password"
//                 />
//               ) : null}
//             </Grid>
//             <Button
//               type="submit"
//               fullwidth="true"
//               varient="contained"
//               color="primary"
//               className={classes.submit}
//             >
//               {isSignup ? "Sign Up" : "Sign In"}
//             </Button>
//             <GoogleLogin
//               onSuccess={(response) => createOrGetUser(response)}
//               onError={googleFailure}
//             />
//             <Grid type="container" container justifyContent="flex-end">
//               <Grid item>
//                 <Button onClick={switchMode}>
//                   {isSignup
//                     ? "Already have an account? Sign In "
//                     : "Don't have an account Sign Up"}
//                 </Button>
//               </Grid>
//             </Grid>
//           </form>
//         </Paper>
//       </Container>
//     </GoogleOAuthProvider>
//   );
// };

// export default Auth;


import React from 'react'

const Auth = () => {
  return (
    <div>Auth</div>
  )
}

export default Auth