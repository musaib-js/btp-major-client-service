import React from "react";
import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import { useBaseQuery } from "../../../api/BaseRequest";
import Spinner from "../../../components/CustomLoader";
import { useState } from "react";
import { Document, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();
export default function Appointments() {
  const { data, isLoading } = useBaseQuery(`/health/appointments`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const handleViewPrescription = (file) => {
    window.open(file);
  };

  console.log(data);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <Grid container mt={3} spacing={4} justifyContent={"center"}>
          {data ? (
            <>
              {data.map((data) => (
                <Grid item key={data.id} lg={6} md={10}>
                  <Card sx={{ borderRadius: "25px", mb: 2 }}>
                    <CardContent>
                      <Typography variant="body1" gutterBottom>
                        <span style={{ fontWeight: 700 }}>
                          Appointment ID :{" "}
                        </span>{" "}
                        {data.id}
                        <hr
                          style={{ margin: "8px 0", border: "1px solid #ccc" }}
                        />
                      </Typography>
                      <Typography variant="body1" gutterBottom>
                        <span style={{ fontWeight: 700 }}>Booking Date : </span>{" "}
                        {data.booking_date}
                        <hr
                          style={{ margin: "8px 0", border: "1px solid #ccc" }}
                        />
                      </Typography>
                      <Typography variant="body1" gutterBottom>
                        <span style={{ fontWeight: 700 }}>Doctor Name : </span>
                        {data?.doctor?.name
                          ? data?.doctor?.name
                          : "Not Assigned"}
                        <hr
                          style={{ margin: "8px 0", border: "1px solid #ccc" }}
                        />
                      </Typography>
                      <Grid
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          flexWrap: "wrap",
                        }}
                      >
                        <Grid item sx={{ mr: "10px" }}>
                          <Typography variant="body1" gutterBottom>
                            <span style={{ fontWeight: 700 }}>
                              Appointment Date :{" "}
                            </span>
                            {data.date}
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography variant="body1" gutterBottom>
                            <span style={{ fontWeight: 700 }}>Time: </span>
                            {data.time}
                          </Typography>
                        </Grid>
                      </Grid>
                      <hr
                        style={{ margin: "8px 0", border: "1px solid #ccc" }}
                      />
                      <Grid
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          flexWrap: "wrap",
                        }}
                      >
                        <Grid item style={{ mr: "10px" }}>
                          <Typography>
                            <Typography variant="body1" gutterBottom>
                              <span style={{ fontWeight: 700 }}>
                                Confirmed:{" "}
                              </span>
                              {data.is_confirmed ? "✅" : "❌"}
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                              <span style={{ fontWeight: 700 }}>Status: </span>
                              {data.is_cancelled
                                ? "Cancelled"
                                : data.is_completed
                                ? "Deliverd"
                                : "Pending"}
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                              <span style={{ fontWeight: 700 }}>Cost: </span>{" "}
                              {data.cost}
                            </Typography>
                          </Typography>
                        </Grid>
                        <Grid item style={{ marginTop: "auto" }}>
                          <Typography align="right">
                            <Button
                              variant="contained"
                              sx={{ borderRadius: "25px" }}
                              disabled={!data.is_completed}
                              onClick={() =>
                                handleViewPrescription(data?.prescription_file)
                              }
                            >
                              View Prescription
                            </Button>
                          </Typography>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </>
          ) : (
            <Card
              sx={{
                height: "350px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CardContent sx={{ fontSize: "24px" }}>
                <Typography sx={{ fontSize: "inherit" }}>
                  NO RECORDS FOUND
                </Typography>
              </CardContent>
            </Card>
          )}
        </Grid>
      )}
    </>
  );
}
