import {
    Card,
    CardContent,
    CardMedia,
    Container,
    Grid,
    IconButton,
    Paper,
    Typography,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIcon from "@mui/icons-material/ArrowForwardIos";
import testimonials from "./Data";
import SectionHeading from "../../../components/SectionHeadings";
import Slider from "../../../components/Slider/Slider";

const TestimonialsSection = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down(850));
    const CustomCard = ({ testimonial, index }) => {
        return (
            <Card
                key={index}
                // sx={{ maxWidth: "500px", width: "400px", border: "1px solid #c7c7c7", margin: '0 auto' }}
                component={Paper}
                elevation={10}
                sx={{
                    "& .MuiCardMedia-root ": {
                        width: "70px",
                        height: "70px",
                        borderRadius: "50%",
                        margin: "20px",
                    },
                    width: (isSmallScreen ? "100%" : "350px"),
                    maxWidth: "500px",
                    height: "350px",
                    maxHeight: "500px",
                    margin: "0 auto",
                    boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
                    marginTop: "30px",
                    marginBottom: "30px",
                    borderRadius: "25px"
                }}
            >
                <CardMedia
                    component="img"
                    alt={testimonial.name}
                    image={testimonial.image}
                />
                <CardContent>
                    <Typography variant="h6" gutterBottom>
                        {testimonial.name}
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary">
                        {testimonial.position}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" mt={2}>
                        {testimonial.comment}
                    </Typography>
                </CardContent>
            </Card>
        );
    };

    return (
        <Grid container direction={"column"} justifyContent={'center'} alignItems={'center'} >
            <Grid item>
                <Typography fontSize={"24px"} fontWeight={600} mt={"20px"} textAlign={"center"}>Here's What People Say</Typography>
            </Grid>
            <Grid item sx={{ width: "100%" }} >
                <Slider>
                    {testimonials.map((testimonial, index) => (
                        <CustomCard key={index} testimonial={testimonial} index={index} />
                    ))}
                </Slider>
            </Grid>
        </Grid>

    );
};

export default TestimonialsSection;
