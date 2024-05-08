// SignUpForm.js
import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import useFormWrapper from '../../../components/Form/index';
import useApiStore from '../../../api/api';
import SignUpImage from '../../../assets/images/Signup.svg'
import { styled } from '@mui/system';
import useToggle from "../../../hooks/Toggle";
import { toast } from 'react-toastify';

const StyledTypoGraphy = styled(Typography)(({ theme }) => ({
    color: "red",
    fontSize: "12px"
}));

const SignUpForm = ({ onToggleForm }) => {
    const api = useApiStore();
    const { toggler: setSubmitting, toggle: submitting } = useToggle();

    // wiil call register api
    const onSubmit = async (data) => {
        try {
            setSubmitting(true)
            await api.register(data);
            toast.success("you are successfully registered");
            setSubmitting(false)
        } catch (error) {
            toast.error("Something went wrong")
            setSubmitting(false)
        }
    };

    //inital values
    const initialValues = {
        first_name: "",
        last_name: "",
        email: "",
        phone_number: "",
        user_name: "",
    }
    const { register, handleSubmit, formState: { errors }, getValues, watch } = useFormWrapper({ onSubmit, initialValues });

    return (

        <Grid container component="main" sx={{ height: '80vh', mb: "60px", justifyContent: "center", mt: "30px" }}>
            <Grid item xs={false}
                sm={false}
                sx={{ borderRadius: "25px" }}
                md={4.3}><img src={SignUpImage} alt="alt" /></Grid>

            <Grid item xs={12} sm={12} md={6} mb="50px" >
                <Box
                    sx={{
                        my: 2,
                        mx: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: '#098fff' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <form noValidate onSubmit={handleSubmit} style={{ width: "100%" }}>
                        <Grid item sx={{ mt: 1 }}>
                            <div>
                                <Box>
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="firstName"
                                        label="First Name"
                                        name="first_name"
                                        autoComplete="first-name"
                                        variant='standard'
                                        autoFocus
                                        {...register('first_name', {
                                            required: 'First Name is required',
                                            validate: {
                                                minLength: (v) => v.length >= 5,
                                                matchPattern: (v) => /^[a-zA-Z0-9_]+$/.test(v),
                                            },
                                        })}
                                    />
                                    {errors.first_name?.type === "required" && (
                                        <StyledTypoGraphy>First Name is required</StyledTypoGraphy>
                                    )}

                                    {errors.first_name?.type === "minLength" && (
                                        <StyledTypoGraphy>First Name should have at least 5 characters</StyledTypoGraphy>
                                    )}

                                    {errors.first_name?.type === "matchPattern" && (
                                        <StyledTypoGraphy>First Name must contain only letters, numbers and _</StyledTypoGraphy>
                                    )}

                                </Box>

                                <Box>
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        label="Last Name"
                                        name="last_name"
                                        variant='standard'
                                        autoComplete="last-name"
                                        {...register('last_name', {
                                            required: 'Last Name is required',
                                            validate: {
                                                minLength: (v) => v.length >= 5,
                                                matchPattern: (v) => /^[a-zA-Z0-9_]+$/.test(v),
                                            },
                                        })}
                                    />
                                    {errors.last_name?.type === "required" && (
                                        <StyledTypoGraphy>Last Name is required</StyledTypoGraphy>
                                    )}

                                    {errors.last_name?.type === "minLength" && (
                                        <StyledTypoGraphy>Last Name should have at least 5 characters</StyledTypoGraphy>
                                    )}

                                    {errors.last_name?.type === "matchPattern" && (
                                        <StyledTypoGraphy>Last Name must contain only letters, numbers and _</StyledTypoGraphy>
                                    )}
                                </Box>
                            </div>

                            <div>
                                <Box>
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="phoneNumber"
                                        label="Phone Number"
                                        name="phone_number"
                                        variant='standard'
                                        autoComplete="phone-number"
                                        {...register('phone_number', {
                                            required: 'Phone Number is required',
                                            validate: {
                                                minLength: (numberLength) => numberLength.length === 10,
                                                matchPattern: (pattern) => /^\d+$/.test(pattern),
                                            },
                                        })}
                                    />
                                    {errors.phone_number?.type === "required" && (
                                        <StyledTypoGraphy>Phone Number is required</StyledTypoGraphy>
                                    )}
                                    {errors.phone_number?.type === "minLength" && (
                                        <StyledTypoGraphy>Phone number should be 10 digits long</StyledTypoGraphy>
                                    )}
                                    {errors.phone_number?.type === "matchPattern" && (
                                        <StyledTypoGraphy>Phone number must contain only numbers</StyledTypoGraphy>
                                    )}
                                </Box>

                                <Box>
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        autoComplete="email"
                                        variant='standard'
                                        {...register('email', {
                                            required: 'Email is required',
                                            validate: {
                                                maxLength: (v) =>
                                                    v.length <= 50 || "The email should have at most 50 characters",
                                                matchPattern: (v) =>
                                                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
                                                    "Email address must be a valid address",
                                            },
                                        })}
                                    />
                                    {errors.email?.message && (
                                        <StyledTypoGraphy>{errors.email.message}</StyledTypoGraphy>
                                    )}
                                </Box>
                            </div>

                            <div>
                                <Box>
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="username"
                                        label="User Name"
                                        name="username"
                                        variant='standard'
                                        autoComplete="username"
                                        {...register('username', {
                                            required: 'User Name is required', validate: {
                                                minLength: (usernameLength) => usernameLength.length === 3 || "The username should have atleast 2 characters",
                                            }
                                        })}
                                    />
                                    {errors.username?.type === "required" && (
                                        <StyledTypoGraphy>User name  is required</StyledTypoGraphy>
                                    )}
                                    {errors.username?.type === "minLength" && (
                                        <StyledTypoGraphy>{errors.username.message}</StyledTypoGraphy>
                                    )}
                                </Box>
                            </div>

                            <div>
                                <Box>
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type="password"
                                        id="password"
                                        autoComplete="new-password"
                                        variant='standard'
                                        {...register('password', {
                                            required: 'Password is required',
                                            validate: {
                                                lowerCaseCheck: (value) => /^(?=.*[a-z])/.test(value),
                                                upperCaseCheck: (value) => /^(?=.*[A-Z])/.test(value),
                                                digitCaseCheck: (value) => /^(?=.*\d)/.test(value),
                                                lenghtCaseCheck: (value) => value.length >= 8,

                                            }
                                        })}
                                    />
                                    {errors.password?.type === "required" && (
                                        <StyledTypoGraphy>Password is required</StyledTypoGraphy>
                                    )}
                                    {errors.password?.type === "lowerCaseCheck" && (
                                        <StyledTypoGraphy> The password should contain at least one lowercase letter</StyledTypoGraphy>
                                    )}
                                    {errors.password?.type === "upperCaseCheck" && (
                                        <StyledTypoGraphy>  The password should contain at least one uppercase letters</StyledTypoGraphy>
                                    )}
                                    {errors.password?.type === "digitCaseCheck" && (
                                        <StyledTypoGraphy>  The password should contain at least one digit</StyledTypoGraphy>
                                    )}
                                    {errors.password?.type === "lenghtCaseCheck" && (
                                        <StyledTypoGraphy>  The password should at least 8 characters long</StyledTypoGraphy>
                                    )}

                                </Box>

                                <Box>
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        name="confirmPassword"
                                        label="Confirm Password"
                                        type="password"
                                        id="confirmPassword"
                                        autoComplete="new-password"
                                        variant='standard'
                                        {...register('confirmPassword', {
                                            required: 'Confirm Password is required',
                                            validate: {
                                                matchPassword: (value) => value === getValues('password') || 'Passwords do not match'
                                            }
                                        })}
                                    />
                                    {errors.confirmPassword && (<StyledTypoGraphy> {errors.confirmPassword.message}</StyledTypoGraphy>)}
                                </Box>
                            </div>


                            <Typography fontSize={"12px"}>By Signing up you agree to our terms and condition</Typography>
                            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2, bgcolor: "#098fff", borderRadius: "25px" }}disabled={submitting}>
                                {submitting ? "Submitting..." : "Sign Up"}
                            </Button>
                            <Grid container justifyContent="center">
                                <Grid item>
                                    <Link href="#" variant="body2" onClick={onToggleForm}>
                                        Already have an account? Sign in
                                    </Link>
                                </Grid>
                            </Grid>
                        </Grid>
                    </form>
                </Box>
            </Grid>
        </Grid>

    );
};

export default SignUpForm;