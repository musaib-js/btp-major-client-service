import React from 'react'
import { Container, Grid, Typography, Card, CardMedia, CardContent, useTheme, Box, useMediaQuery } from '@mui/material'
import Bg from "../../assets/images/CareersPageBanner.png";
import { useNavigate } from 'react-router-dom';
import HtmlCoverter from "../../hooks/HtmlToTextConverter";
import { useBaseQuery } from "../../api/BaseRequest";
import Spinner from "../../components/CustomLoader/"
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Jobs = () => {
    const navigate = useNavigate();
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down(600));
    const handleCardCLick = (id) => {
        navigate(`/careers/jobDetails/${id}`);
    };

    const { data, error, isLoading, isSuccess } = useBaseQuery(`/work/jobs`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    return (
        <>
            {isLoading ? (<Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", height: "300px" }}><Spinner /></Box>) : (
                <>

                    <Grid container marginTop={5} marginBottom={5}>
                        <Card
                            sx={{
                                width: "100%",
                            }}>
                            <CardMedia component="img"
                                height= {isSmallScreen? "auto" : "auto"} // Use auto for responsive height
                                width="100%" // Use 100% for responsive width
                                image={Bg}
                                title="Grow with Ganjean"
                                style={{ objectFit: isSmallScreen ? "cover" : "cover" }}
                            />

                        </Card>
                    </Grid>
                    <Container >
                        {data ? data.map((item) => (
                            <Card
                                key={item.id}
                                sx={{
                                    margin: "15px 0px",
                                    width: "100%",
                                    cursor: "pointer",
                                    transition: '0.25s',
                                    '&:hover': {
                                        transform: 'scale(1.05)',
                                    },
                                }}
                                onClick={() => handleCardCLick(item.id)}
                            >
                                <CardContent >
                                    <Typography variant='h5' align='left' gutterBottom>
                                        {item.title}
                                    </Typography>
                                    <Typography variant='p' align='left' gutterBottom>
                                        <HtmlCoverter html={item.description.slice(0, 220)} />
                                    </Typography>
                                    <Typography variant='body-1' align='left' gutterBottom>
                                        Domain: {item.job_type}
                                    </Typography>
                                    <div style={{ textAlign: 'right' }}>
                                    <LocationOnIcon sx={{mt: "2px", color: theme.palette.primary.main}}/> 
                                        <Typography variant='body-1' align='right'>
                                        {item.location}
                                        </Typography>
                                    </div>
                                </CardContent>
                            </Card>
                        )) : (
                            <Card
                                sx={{ height: '350px', display: 'flex', justifyContent: "center", alignItems: 'center' }}
                            >
                                <CardContent
                                    sx={{ fontSize: '24px' }}
                                >
                                    <Typography sx={{ fontSize: 'inherit' }}>
                                        NO RECORDS FOUND
                                    </Typography>
                                </CardContent>
                            </Card>
                        )
                        }
                    </Container>
                </>
            )}
        </>
    );
}

export default Jobs