import React from 'react'
import { Box, Container } from "@mui/material";
import { useBaseQuery } from '../../../api/BaseRequest'
import HtmlToTextConverter from '../../../hooks/HtmlToTextConverter';
import Spinner from '../../../components/CustomLoader';

export const Shipping = () => {
    const { data, isLoading, isError } = useBaseQuery('/home/shipping-policy', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    if (isLoading) {
        // Loading state
        return (
            <Container sx={{ height: "300px" }}>
                <Spinner />;
            </Container>
        );
    }
    if (isError) {
        // Error state
        return <p>Error!</p>;
    }
    return (
        <Container sx={{ mt: "30px" }}>
            <Box >
                <HtmlToTextConverter html={data.shipping} />
            </Box >
        </Container>
    )
}
