import { Button, Card, CardContent, Container, TextField, Typography, Box } from '@mui/material'
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import useFormWrapper from '../../../components/Form/index'
import useApiStore from '../../../api/api'
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { toast } from 'react-toastify'

function ResetPassword() {

    const navigate = useNavigate();
    const api = useApiStore();
    const { search } = useLocation();
    const queryParams = new URLSearchParams(search);
    const token = queryParams.get('token');
    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    
    };

    const onSubmit = async (data) => {
        try {
            await api.resetPasswordConfirm(data);
            navigate('/login');
            toast.success("Password Reset Successfull! Please login with your new password")

        } catch (error) {
            toast.error("Something went wrong");
        }
    };

    const { register, handleSubmit, errors } = useFormWrapper({ onSubmit });
    return (
        <>
            <Container sx={{ marginTop: "40px" }}>
                <Card
                    component="form" noValidate
                    onSubmit={handleSubmit}
                    id="applyNowCard"
                    sx={{ padding: "1%", borderRadius: "25px" }}>
                    <CardContent>
                        <Typography variant='h4' align='center' gutterBottom>Reset Passsword</Typography>
                        <TextField
                            label="New Password"
                            id='password'
                            name='password'
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
                            {...register('password', { required: 'Password is required' })}
                        />
                        <TextField
                            label="Token"
                            id='token'
                            name='token'
                            sx={{ display: 'none' }}
                            hidden
                            value={token}
                            {...register('token')}
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
                            sx={{ width: '30%', marginTop: '30px', marginBottom: '30px', padding: '10px' }}
                            onClick={handleSubmit}
                        >
                            Submit
                        </Button>
                    </Box>

                </Card>
            </Container>
        </>
    )
}

export default ResetPassword