import React from 'react'
import { Button, Card, CardContent, Grid, Typography } from '@mui/material'
import { useBaseQuery } from '../../../api/BaseRequest'
import Spinner from '../../../components/CustomLoader'
export default function LabTests() {

    const { data, isLoading } = useBaseQuery(`/health/test`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    })
    return (
        <>
            {
                isLoading ?
                    (
                        <Spinner />
                    ) :
                    (
                        <Grid container mt={3} spacing={2} justifyContent={'center'}>
                            {data ? (
                                <>
                                    {
                                        data.map((data) => (
                                            <Grid item key={data.id} lg={6} md={12} sm={12}>
                                                <Card sx={{ borderRadius: "25px", mb: 2 }}>
                                                    <CardContent>
                                                        <Typography variant='body1' gutterBottom>
                                                            <span style={{ fontWeight: 700 }}>Test ID : </span> {data.id}
                                                            <hr style={{ margin: '8px 0', border: '1px solid #ccc' }} />
                                                        </Typography>
                                                        <Typography variant='body1' gutterBottom>
                                                            <span style={{ fontWeight: 700 }}>Booking Date : </span> {data.booking_date}
                                                            <hr style={{ margin: '8px 0', border: '1px solid #ccc' }} />
                                                        </Typography>
                                                        <Typography>
                                                            <Typography variant='body1' gutterBottom>
                                                                <span style={{ fontWeight: 700 }}>Test Name : </span>{data.test_name}
                                                            </Typography>
                                                            <Typography align='right' gutterBottom>
                                                                <Button variant='contained' sx={{ borderRadius: "25px" }}>View Prescription</Button>
                                                            </Typography>
                                                            <hr style={{ margin: '8px 0', border: '1px solid #ccc' }} />
                                                        </Typography>
                                                        <Grid display={'flex'} justifyContent={'space-between'} flexWrap={'wrap'}>
                                                            <Grid item sx={{ mr: "10px" }}>
                                                                <Typography variant='body1' gutterBottom>
                                                                    <span style={{ fontWeight: 700 }}>Test Date : </span>{data.test_date}
                                                                </Typography>
                                                            </Grid>
                                                            <Grid item>
                                                                <Typography variant='body1' gutterBottom>
                                                                    <span style={{ fontWeight: 700 }}>Sample Collected : </span>
                                                                    {data.is_picked_up ? "✅" : "❌"}
                                                                </Typography>
                                                            </Grid>
                                                        </Grid>
                                                        <hr style={{ margin: '8px 0', border: '1px solid #ccc' }} />
                                                        <Grid style={{ display: "flex", justifyContent: "space-between", flexWrap: 'wrap' }}>
                                                            <Grid item style={{ mr: "10px" }}>
                                                                <Typography variant='body1' gutterBottom>
                                                                    <span style={{ fontWeight: 700 }}>Address : </span>{data.address}
                                                                </Typography>
                                                            </Grid>
                                                            {/* <div style={{ borderLeft: "2px solid #ccc", height: "200px" }}></div> */}
                                                            <Grid item style={{  flexDirection: "column" }}>
                                                                <Typography>
                                                                    <Typography variant='body1' gutterBottom>
                                                                        <span style={{ fontWeight: 700 }}>Confirmed: </span>
                                                                        {data.is_confirmed ? "✅" : "❌"}
                                                                    </Typography>
                                                                    <Typography variant='body1' gutterBottom>
                                                                        <span style={{ fontWeight: 700 }}>Status: </span>
                                                                        {data.is_cancelled ? ("Cancelled") : (data.is_completed ? ("Deliverd") : ("Pending"))}
                                                                    </Typography>
                                                                    <Typography variant='body1' gutterBottom>
                                                                        <span style={{ fontWeight: 700 }}>Cost: </span>{data.cost}
                                                                    </Typography>
                                                                    <div style={{ marginTop: "auto", marginBottom: 0 }}>
                                                                        <Typography align='right'  >
                                                                            <Button variant='contained' sx={{ borderRadius: "25px" }}>View Report</Button>
                                                                        </Typography>
                                                                    </div>
                                                                </Typography>
                                                            </Grid>
                                                        </Grid>
                                                    </CardContent>
                                                </Card>
                                            </Grid>
                                        ))
                                    }
                                </>
                            ) : (
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
                            )}
                        </Grid >
                    )
            }
        </>
    )
}
