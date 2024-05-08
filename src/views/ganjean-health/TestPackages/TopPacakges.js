import React from 'react';
import { Grid, Box, Divider, useTheme, useMediaQuery } from '@mui/material';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from "../../../components/Button";
import SectionHeading from "../../../components/SectionHeadings";
import ModalToggle from '../../../hooks/ModalToggle.js';
import Modal from '../../../components/Modal/index.js';
import Slider from '../../../components/Slider/Slider.js';
import HtmlToTextConverter from '../../../hooks/HtmlToTextConverter';
import Spinner from "../../../components/CustomLoader"


export default function TopPackages({ data, isLoading }) {
    const { open, handleOpen, handleClose, selectedItem, setSelectedItem } = ModalToggle();
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down(850));
    const CustomCard = ({ item, index }) => {
        return (
            <Card key={index} sx={{
                maxWidth: "500px",
                width: (isSmallScreen ? "100%" : "350px")
                , border: "1px solid #c7c7c7", margin: '0 auto', borderRadius: "25px"
            }}>
                <CardHeader
                    title={<Typography fontSize={"20px"} fontWeight={700} color={"#098fff"}>{item.name}</Typography>}
                />

                <Divider />
                <CardContent sx={{ padding: 0 }}>
                    <img src={item.image} alt='img' style={{ width: "100%", height: "220px" }} />
                </CardContent>

                <CardActions disableSpacing sx={{ backgroundColor: "#f3fbf7", justifyContent: "space-between" }}>
                    <Box>
                        <Typography sx={{ fontWeight: 600 }}>₹{item.cost}</Typography>
                        <Typography sx={{ color: "#bdbcbc", fontWeight: 600, textDecoration: 'line-through' }}>
                            ₹{item.cost + 500}
                        </Typography>
                    </Box>

                    <IconButton sx={{ '&:hover': { backgroundColor: 'transparent' } }} onClick={() => { setSelectedItem(item); handleOpen(); }}>
                        <Button label={"Book Now"} sx={{ borderRadius: "25px" }} />
                    </IconButton>
                </CardActions>
            </Card>
        );
    }
    return (
        <Grid container direction={"column"} spacing={3} justifyContent={'center'} >
            <Grid item mb="-30px">
                <SectionHeading heading={"Top Health Packages"} />
            </Grid>
            {!isLoading ? (
                <Grid item sx={{ width: "100%" }} >
                    <Slider>
                        {data.data.filter(item => item.is_top).map((item, index) => (
                            <CustomCard key={index} item={item} index={index} />
                        ))}
                    </Slider>
                </Grid>
            ) : (<Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", height: "300px" }}><Spinner /></Box>)}
            {/* Single Modal outside the loop */}
            {open && (
                <Modal title={selectedItem?.name} open={open} handleClose={handleClose}>
                    {selectedItem && <HtmlToTextConverter html={selectedItem?.description} />}
                </Modal>
            )}
        </Grid>
    );
}