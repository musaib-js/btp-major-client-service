import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import grocery from "../../../assets/images/grocery.jpg";
import doctor from "../../../assets/images/doctor.jpg";
import { Link } from "react-router-dom";
import { Container, useTheme, useMediaQuery } from '@mui/material';

export default function MediaCard() {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down(850));
    return (
        <Container sx={{ marginTop: isSmallScreen ? "40px" : "100px", mb: isSmallScreen ? "20px" : "45px" }}>
            {/* <SectionHeading heading="Want to Explore More?" textAlign={"center"} color={theme.palette.primary.main} /> */}

            <Grid container display="flex" justifyContent="center" alignItems="center" spacing={6} >
                <Grid item xs={12} sm={6}>
                    <Link to="/health" style={{ textDecoration: "none" }}>
                        <Card sx={{ borderRadius: "12px", cursor: "pointer", mt: "15px" }}>
                            <CardContent sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
                                <Grid container spacing={2} alignItems="center">
                                    <Grid item xs={12} sm={6}>
                                        <Typography gutterBottom variant="h5" component="div" sx={{color: theme.palette.primary.main}}>
                                            Ganjean Health
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                           Medicine, Lab Tests & Appointments!
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image={doctor}
                                            alt="Card Image"
                                            sx={{ borderRadius: "12px" }}
                                        />
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Link>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <Link
                        to="/"
                        style={{ textDecoration: "none" }}>

                        <Card sx={{ borderRadius: "12px", cursor: "pointer", mt: "15px" }}>
                            <CardContent sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
                                <Grid container spacing={2} alignItems="center">
                                    <Grid item xs={12} sm={6}>
                                        <Typography gutterBottom variant="h5" component="div" sx={{color: theme.palette.primary.main}}>
                                            Ganjean Grocery
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Coming Soon!
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image={grocery}
                                            alt="Card Image"
                                            sx={{ borderRadius: "12px" }}
                                        />
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Link>
                </Grid>
            </Grid>

        </Container>



    );
}