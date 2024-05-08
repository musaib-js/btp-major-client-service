import { Box, Grid, IconButton, Typography } from '@mui/material';
import React from 'react';
import { chooseUs } from './constant';

export default function index() {
    const itemsPerRow = {
        xs: 2,
        sm: 3,
        md: 4,
        lg: 6,
    };
    return (
        <>
            <Grid container direction={"column"} mt={5} sx={{ backgroundColor: "#f3fbf7", padding: "25px" }}>
                <Typography variant='h5' align='center' fontWeight="700" sx={{ mt: "10px", mb: "15px" }}>Why Choose Us</Typography>
                <Grid item display={"flex"} alignItems={"center"} justifyContent={"space-around"} flexWrap={"wrap"} sx={{ width: "100%", paddingTop: "10px" }}>
                    {chooseUs.map((item, index) => (
                        <Box display={"flex"} alignItems={"center"} key={index}
                            sx={{
                                width: `calc(${100 / itemsPerRow.md}% - 10px)`,
                                mb: 2,
                                '@media (max-width: 600px)': {
                                    width: `calc(${100 / itemsPerRow.xs}% - 10px)`,
                                },
                                '@media (min-width: 601px) and (max-width: 960px)': {
                                    width: `calc(${100 / itemsPerRow.sm}% - 10px)`,
                                },
                                '@media (min-width: 961px) and (max-width: 1280px)': {
                                    width: `calc(${100 / itemsPerRow.md}% - 10px)`,
                                },
                                '@media (min-width: 1281px)': {
                                    width: `calc(${100 / itemsPerRow.lg}% - 10px)`,
                                },
                            }}
                        >
                            <IconButton sx={{ backgroundColor: "#fff" }}>
                                {item.icon}
                            </IconButton>
                            <Typography sx={{ fontWeight: 500, marginLeft: "8px", marginRight: "8px", fontSize: "18px" }}>{item.label}</Typography>
                        </Box>
                    ))}
                </Grid>
            </Grid>
        </>
    )
}
