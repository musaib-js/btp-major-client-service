// SignInForm.js
import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import useFormWrapper from "../../../components/Form/index";
import useApiStore from "../../../api/api";
import LoginImg from "../../../assets/images/Login.svg";
import { toast } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";
import { styled } from "@mui/system";
import { useTheme } from "@emotion/react";
import useToggle from "../../../hooks/Toggle";

const StyledTypoGraphy = styled(Typography)(({ theme }) => ({
  color: "red",
  fontSize: "12px",
}));

const SignInForm = ({ onToggleForm }) => {
  const theme = useTheme();
  const api = useApiStore();
  const navigate = useNavigate();
  const { toggler: setSubmitting, toggle: submitting } = useToggle();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      setSubmitting(true);
      await api.login(data);
      toast.success("Login Successfull");
      setSubmitting(false);
      navigate("/");
    } catch (error) {
      //fix me later
      //toast.error(error?.response?.data?.detail)
      toast.error("Invalid Credentials or Something went wrong");
      console.error(error);
      setSubmitting(false);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormWrapper({ onSubmit });

  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        component="main"
        sx={{ height: "80vh", mb: "60px", mt: "30px" }}
      >
        {/* <CssBaseline /> */}
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${LoginImg})`,
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "25px",
          }}
        />
        <Grid item xs={12} sm={8} md={5}>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "#098fff" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <div>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Username or Email Address"
                  name="username"
                  autoComplete="username"
                  variant="standard"
                  autoFocus
                  {...register("username", { required: "Email is required" })}
                />
                {errors?.username?.message && (
                  <StyledTypoGraphy>
                    {errors?.username?.message}
                  </StyledTypoGraphy>
                )}
              </div>

              <div>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  variant="standard"
                  {...register("password", {
                    required: "Password is required",
                  })}
                />
                {errors?.password?.message && (
                  <StyledTypoGraphy>
                    {errors?.password?.message}
                  </StyledTypoGraphy>
                )}
              </div>

              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, borderRadius: "25px" }}
                disabled={submitting}
              >
                {submitting ? "Submitting..." : "Sign In"}
              </Button>

              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Typography variant="body2">
                    <Link
                      to="/login-with-otp"
                      style={{ textDecoration: "none" }}
                    >
                      Login With OTP
                    </Link>
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="body2">
                    <Link
                      to="/reset-password"
                      style={{ textDecoration: "none" }}
                    >
                      Forgot password?
                    </Link>
                  </Typography>
                </Grid>
                {/* <Grid item xs={12} sm={6}>
                  <Typography variant="body2">
                    <Link to="/reset-password" style={{ textDecoration: "none" }}>
                      Reset Password
                    </Link>
                  </Typography>
                </Grid> */}
                <Grid item xs={12} sm={6}>
                  <Typography variant="body2">
                    <Link
                      to="#"
                      onClick={onToggleForm}
                      style={{ textDecoration: "none" }}
                    >
                      Don't have an account? Sign Up
                    </Link>
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default SignInForm;
