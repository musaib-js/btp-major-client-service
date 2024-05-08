import React from 'react'
import { Button, Card, CardContent, Grid, Typography } from '@mui/material'
import { useBaseQuery } from '../../../api/BaseRequest'
import Spinner from '../../../components/CustomLoader'
export const MedicineOrders = () => {

    const { data, isLoading } = useBaseQuery(`/health/medicine-order`, {
        method: "GET",
        headers: {
            'Content-Type': "application/json",
        }
    })
    return (
        <>
            {
                isLoading ? (<Spinner />) : (
                    <Grid container mt={3} spacing={4} justifyContent={'center'}>
                        {
                            data ? (
                                <>
                                    {
                                        data.map((data) => (
                                            < Grid item key={data.id} lg={6} md={12} sm={12} >
                                                <Card sx={{ borderRadius: "25px", mb: 2 }}>
                                                    <CardContent>
                                                        <Typography variant='body1' gutterBottom>
                                                            <span style={{ fontWeight: 700 }}>Order ID : </span> {data.id}
                                                            <hr style={{ margin: '8px 0', border: '1px solid #ccc' }} />
                                                        </Typography>
                                                        <Typography variant='body1' gutterBottom>
                                                            <span style={{ fontWeight: 700 }}>Order Date : </span> {data.order_date}
                                                            <hr style={{ margin: '8px 0', border: '1px solid #ccc' }} />
                                                        </Typography>
                                                        <Grid style={{ display: "flex", justifyContent: "space-between", flexWrap: 'wrap' }}>
                                                            <Grid item sx={{ mr: "10px" }}>
                                                                <Typography variant='body1' gutterBottom>
                                                                    <span style={{ fontWeight: 700 }}>Medicine Ordered : </span>{data.medicine}
                                                                </Typography>
                                                            </Grid>
                                                            <Grid item>
                                                                <Typography align='right' gutterBottom>
                                                                    <Button variant='contained' sx={{ borderRadius: "25px" }}>View Prescription</Button>
                                                                </Typography>
                                                            </Grid>
                                                        </Grid>
                                                        <hr style={{ margin: '8px 0', border: '1px solid #ccc' }} />
                                                        <Grid style={{ display: "flex", justifyContent: "space-between", flexWrap: 'wrap' }}>
                                                            <Grid item style={{ mr: "10px" }}>
                                                                <Typography variant='body1' gutterBottom>
                                                                    <span style={{ fontWeight: 700 }}>Order Address : </span>{data.address}
                                                                </Typography>
                                                            </Grid>
                                                            {/* <div style={{ borderLeft: "2px solid #ccc", height: "200px" }}></div> */}
                                                            <Grid item style={{ flexDirection: "column" }} >
                                                                <Typography>
                                                                    <Typography variant='body1' gutterBottom>
                                                                        <span style={{ fontWeight: 700 }}>Confirmed: </span>{data.is_confirmed ? "✅" : "❌"}
                                                                    </Typography>
                                                                    <Typography variant='body1' gutterBottom>
                                                                        <span style={{ fontWeight: 700 }}>Status: </span>{data.is_doctor_appointment ? "✅" : "❌"}
                                                                    </Typography>
                                                                    <Typography variant='body1' gutterBottom>
                                                                        <span style={{ fontWeight: 700 }}>Cost: </span>{data.medicine_cost}
                                                                    </Typography>
                                                                    <Typography variant='body1' gutterBottom>
                                                                        <span style={{ fontWeight: 700 }}>Shipping Charges: </span>{data.shipping_charge}
                                                                    </Typography>
                                                                    <Typography variant='body1' gutterBottom>
                                                                        <span style={{ fontWeight: 700 }}>Total : </span>{data.total}
                                                                    </Typography>
                                                                    <Typography align='right' gutterBottom>
                                                                        <Button variant='contained' sx={{ borderRadius: "25px", width: "50%" }}>Track</Button>
                                                                    </Typography>
                                                                </Typography>
                                                            </Grid>
                                                        </Grid>
                                                    </CardContent>
                                                </Card>
                                            </Grid>
                                        ))
                                    }
                                </>
                            )
                                :
                                (
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
                    </Grid >
                )
            }
        </>
    )
}
