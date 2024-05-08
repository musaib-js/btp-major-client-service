import * as React from 'react';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';

export default function SimpleAlert({ severity, message }) {
    return (
        <Alert sx={{ zIndex: 110 }} icon={<CheckIcon fontSize="inherit" />} severity={severity}>
            {message}
        </Alert>
    );
}
SimpleAlert.defaultProps = {
    severity: "success",
    message: "Successfully Submitted",
};