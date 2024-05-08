// SignInForm.js
import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import useFormWrapper from '../../../components/Form/index';
import useApiStore from '../../../api/api';
import LoginImg from '../../../assets/images/Login.svg'
import { toast } from 'react-toastify';
import useToggle from "../../../hooks/Toggle";

const LoginWithOTP = ({ onToggleForm }) => {
    const theme = useTheme();
    const api = useApiStore();
    const { toggler: setSubmitting, toggle: submitting } = useToggle();

    const onSubmit = async (data) => {
        try {
            setSubmitting(true)
            await api.loginWithOtp(data);
            toast.success("OTP Sent");
            setSubmitting(false)
        } catch (error) {
            toast.error("Something went wrong")
            setSubmitting(false)
        }
    };

    const { register, handleSubmit } = useFormWrapper({ onSubmit });

    return (
        <ThemeProvider theme={theme}>
            <Grid container component="main" sx={{ height: '80vh', mb: "60px", mt: "60px" }}>
                {/* <CssBaseline /> */}
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage: `url(${LoginImg})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        borderRadius: "25px"
                    }}
                />
                <Grid item xs={12} sm={8} md={5} square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: theme.palette.primary.main }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign in With OTP
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="phone_number"
                                label="Phone Number"
                                name="phone_number"
                                autoComplete="phone_number"
                                autoFocus
                                variant='standard'
                                {...register('phone_number', { required: 'Phone Number is required' })}
                            />
                            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2, borderRadius: "25px" }} disabled={submitting}>
                                {submitting ? "Submitting..." : "Get OTP"}
                            </Button>
                            <Grid container>
                                <Grid item xs sx={{ mx: 3 }}>
                                    <Link href="/reset-password" variant="body2">
                                        Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item sx={{ mx: 3 }}>
                                    <Link href="/login" variant="body2" onClick={onToggleForm}>
                                        Don't have an account ? Sign Up
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
};

export default LoginWithOTP;
