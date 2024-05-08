import React from 'react';
import { Typography } from '@mui/material';

export default function index({ heading, textAlign, color }) {
    return (
        <Typography my={5} fontSize={"24px"} fontWeight={600} textAlign={textAlign} color={color} marginLeft={2}>
            {heading}
        </Typography>
    )
}

index.defaultProps = {
    textAlign: "left"
    // Add other default props as needed
};