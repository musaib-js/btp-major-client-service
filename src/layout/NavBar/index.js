import React from 'react';
import {
    Button,
    Grid,
    Typography,
    Container,
    Toolbar,
    Box,
    useMediaQuery,
} from '@mui/material';
import MedicationLiquidIcon from '@mui/icons-material/MedicationLiquid';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import MedicalServicesOutlinedIcon from '@mui/icons-material/MedicalServicesOutlined';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material'

export default function Index() {
    const theme = useTheme();
    const smallSize = useMediaQuery(theme.breakpoints.down(600));
    return (
        <Box sx={{ backgroundColor: 'rgb(245, 245, 245)', width: '100%' }}>
            <Container>
                <Grid
                    container
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-around',
                        marginTop: '10px',
                        padding: '5px',
                    }}
                >
                    <Grid item xs={4} sx={{ textAlign: 'center' }}>
                        <Button LinkComponent={Link} to="/book-appointment" color="inherit"
                            sx={{
                                display: 'flex',
                                flexDirection: smallSize ? 'column' : 'row',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: smallSize ? "10px" : "16px",
                                color: "#098fff"
                            }}
                        >
                            <MedicationLiquidIcon sx={{ marginRight: '5%' }} />
                            Doctor
                        </Button>
                    </Grid>
                    <Grid item xs={4} sx={{ textAlign: 'center' }}>
                        <Button LinkComponent={Link} to="/booking-test" color="inherit"
                            sx={{
                                display: 'flex',
                                flexDirection: smallSize ? 'column' : 'row',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: smallSize ? "10px" : "16px",
                                color: "#098fff"
                            }}
                        >
                            <CalendarMonthOutlinedIcon sx={{ marginRight: '5%' }} />
                            Tests
                        </Button>
                    </Grid>
                    <Grid item xs={4} sx={{ textAlign: 'center' }}>
                        <Button LinkComponent={Link} to="/pharmacy" color="inherit"
                            sx={{
                                display: 'flex',
                                flexDirection: smallSize ? 'column' : 'row',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: smallSize ? "10px" : "16px",
                                color: "#098fff"

                            }}
                        >
                            <MedicalServicesOutlinedIcon sx={{ marginRight: '5%' }} />
                            Pharmacy
                        </Button>
                    </Grid>
                    {/* <Grid item xs={12 / number} sx={{ textAlign: 'center' }}>
                        <Button LinkComponent={Link} to="/booking-test" color="inherit"
                            sx={{
                                display: 'flex',
                                flexDirection: smallSize ? 'column' : 'row',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: smallSize ? "10px" : "16px",
                            }}
                        >
                            <MedicalServicesOutlinedIcon sx={{ marginRight: '5%' }} />
                            Pharmacy
                        </Button>
                    </Grid> */}
                </Grid>
            </Container>
        </Box>
    );
}
