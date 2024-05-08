import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
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

const ResetPass = ({ onToggleForm }) => {
    const theme = useTheme();
    const api = useApiStore();
    const { toggler: setSubmitting, toggle: submitting } = useToggle();

    const onSubmit = async (data) => {
        try {
            setSubmitting(true)
            await api.resetPassword(data);
            toast.success("Link Sent to Email");
            setSubmitting(false)
        } catch (error) {
            toast.error("Something went wrong")
            setSubmitting(false)
        }
    };

    const { register, handleSubmit } = useFormWrapper({ onSubmit });

    return (
        <ThemeProvider theme={theme}>
            <Grid container component="main" sx={{ height: '70vh', mb: "60px", mt: "60px" }}>
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
                <Grid item xs={12} sm={8} md={5} >
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
                            Enter Your Email
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email"
                                name="email"
                                autoComplete="email"
                                variant='standard'
                                autoFocus
                                {...register('email', { required: 'Email is required' })}
                            />
                            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2, borderRadius: "25px" }} disabled={submitting}>
                                {submitting ? "Submitting..." : "  Reset Password"}
                            </Button>
                              
                            <Grid container>
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

export default ResetPass;
