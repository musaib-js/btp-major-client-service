import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { ThemeProvider, useTheme } from '@mui/material/styles';
import useFormWrapper from '../../../components/Form/index';
import useApiStore from '../../../api/api';
import LoginImg from '../../../assets/images/Login.svg'
import { toast } from 'react-toastify';
import useToggle from "../../../hooks/Toggle";

const ChangePassword = ({ onToggleForm }) => {
    const theme = useTheme();
    const api = useApiStore();
    const { toggler: setSubmitting, toggle: submitting } = useToggle();

    const onSubmit = async (data) => {
        try {
            setSubmitting(true)
            await api.updatePassword(data);
            toast.success("Password Changed Successfully");
            setSubmitting(false)
        } catch (error) {
            toast.error("Something went wrong")
            setSubmitting(false)
        }
    };

    const { register, handleSubmit } = useFormWrapper({ onSubmit });

    return (

        <Grid container component="main" sx={{ height: '70vh', mb: "60px", mt: "60px" }}>
            <Grid item xs={12}>
                <Box
                    sx={{
                        my: 8,
                        mx: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Change Password
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Current Password"
                            name="old_password"
                            autoComplete="old_password"
                            variant='standard'
                            autoFocus
                            {...register('old_password', { required: 'Current password is required' })}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="new_password"
                            label="New Password"
                            name="new_password "
                            autoComplete="new_password "
                            variant='standard'
                            autoFocus
                            {...register('new_password ', { required: 'New password is required' })}
                        />

                        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2, borderRadius: "25px" }} disabled={submitting}>
                            {submitting ? "Submitting..." : "  Submit"}
                        </Button>

                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
};

export default ChangePassword;
