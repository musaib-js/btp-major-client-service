import { Button, Card, CardActions, CardContent, Container, Grid, TextField, Typography, Box } from '@mui/material'
import React, { useState } from 'react'
import { Unstable_NumberInput as NumberInput } from '@mui/base/Unstable_NumberInput';
import { useParams } from 'react-router-dom';
import useFormWrapper from '../../../components/Form/index'
import useApiStore from '../../../api/api'
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'
import { useTheme } from '@emotion/react';
import useToggle from "../../../hooks/Toggle";

function LoginOTP() {
    const { phone_number } = useParams();
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const api = useApiStore();
    const theme = useTheme();
    const { toggler: setSubmitting, toggle: submitting } = useToggle();

    const handleTogglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };
    const onSubmit = async (data) => {
        try {
            setSubmitting(true)
            await api.loginOtpVerify(data);
            setSubmitting(false)
            navigate('/');
            toast.success("Login Successfull")

        } catch (error) {
            toast.error("Something went wrong");
            setSubmitting(false)
        }
    };

    const { register, handleSubmit, errors } = useFormWrapper({ onSubmit });

    return (
        <>
            <Container sx={{ marginTop: "40px" }}>
                <Card
                    component="form" noValidate
                    id="applyNowCard"
                    sx={{ padding: "1%", borderRadius: "25px" }}>
                    <CardContent>
                        <Typography variant='h4' align='center' gutterBottom>Verify OTP</Typography>
                        <TextField
                            label="OTP"
                            id='otp'
                            name='otp'
                            variant='standard'
                            type={showPassword ? 'text' : 'password'}
                            sx={{ width: "100%", marginBottom: "20px" }}
                            required
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            edge="end"
                                            onClick={handleTogglePasswordVisibility}
                                        >
                                            {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                            {...register('otp', { required: 'OTP is required' })}
                        />
                        <TextField
                            label="Phone Number"
                            id='phone_number'
                            name='phone_number'
                            sx={{ display: 'none' }}
                            hidden
                            value={phone_number}
                            {...register('phone_number')}
                        />
                    </CardContent>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Button
                            type="button"
                            variant="contained"
                            color="primary"
                            sx={{ width: '30%', marginTop: '30px', marginBottom: '30px', padding: '10px', borderRadius: "25px" }}
                            onClick={handleSubmit}
                            disabled={submitting}>
                            {submitting ? "Submitting..." : "Submit"}
                        </Button>
                    </Box>
                </Card>
            </Container>
        </>
    )
}

export default LoginOTP