import React from "react";
import { useParams } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState, useEffect } from "react";
import useFormWrapper from "../../../components/Form/index";
import { useBaseQuery } from "../../../api/BaseRequest";
import { Button } from "@mui/material";
import SideNavBar from "./Navbar/index";
import useApiStore from "../../../api/api";

const PatientDetails = () => {
  const { id } = useParams();
  const api = useApiStore();
  console.log(id);
  const { data } = useBaseQuery(`/health/appointments`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const onSubmit = async (data) => {
    console.log(data, "formdata string");
    // const payload = {
    //   appointment_id: parseInt(id),
    //   symptoms: formdata?.symptoms,
    //   diagnosis: formdata?.diagnosis,
    //   advice: formdata?.advice,
    //   prescription: formdata?.prescription,
    // };
    // console.log(payload);
    // try {
    //   await api.generateReport(payload);
    // } catch {
    //   console.error("Error");
    // }
  };
  const { register, handleSubmit } = useFormWrapper({ onSubmit });
  const [openNav, setOpenNav] = useState(true);

  return (
    <Box p={2} sx={{ ml: 44 }}>
      <SideNavBar openNav={openNav} onCloseNav={() => setOpenNav(false)} />
      <Box>
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Patient Details
        </Typography>
        <Box
          mt={4}
          sx={{ width: 800 }}
          noValidate
          component="form"
          onSubmit={handleSubmit}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <label style={{ minWidth: "150px" }} htmlFor="firstName">
              First Name
            </label>
            <TextField
              {...register("firstName", { required: true })}
              label="First Name"
              variant="outlined"
              fullWidth
              margin="normal"
              defaultValue={data?.[0]?.name.split(" ")[0]}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <label style={{ minWidth: "150px" }} htmlFor="lastName">
              Last Name
            </label>
            <TextField
              {...register("last_name", { required: true })}
              label="Last Name"
              variant="outlined"
              fullWidth
              margin="normal"
              defaultValue={data?.[0]?.name.split(" ")[1]}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <label style={{ minWidth: "150px" }} htmlFor="phonenumber">
              Phone Number
            </label>

            <TextField
              {...register("phoneNumber", { required: true })}
              variant="outlined"
              fullWidth
              margin="normal"
              disabled
              defaultValue={data?.[0]?.phone_number}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <label style={{ minWidth: "150px" }} htmlFor="email">
              Email
            </label>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              disabled
              margin="normal"
              defaultValue={data?.[0]?.email}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <label style={{ minWidth: "150px" }} htmlFor="address">
              Address
            </label>
            <TextField
              {...register("address", { required: true })}
              label="Address"
              variant="outlined"
              fullWidth
              margin="normal"
              defaultValue={data?.[0]?.address}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <label style={{ minWidth: "150px" }} htmlFor="diagnosis">
              Diagnosis
            </label>
            <TextField
              label="Write your Diagnosis"
              variant="outlined"
              fullWidth
              name="diagnosis"
              multiline
              required
              rows={4}
              margin="normal"
              {...register("diagnosis", { required: true })}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <label style={{ minWidth: "150px" }} htmlFor="symptoms">
              Symptoms
            </label>
            <TextField
              label="Write the Symptoms"
              variant="outlined"
              fullWidth
              multiline
              required
              name="symptoms"
              rows={4}
              margin="normal"
              {...register("symptoms", { required: true })}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <label style={{ minWidth: "150px" }} htmlFor="prescription">
              Prescription
            </label>
            <TextField
              label="Prescription"
              variant="outlined"
              fullWidth
              multiline
              required
              name="prescription"
              rows={4}
              margin="normal"
              {...register("prescription", { required: true })}
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <label style={{ minWidth: "150px" }} htmlFor="advice">
              Advice
            </label>
            <TextField
              label="Advice"
              variant="outlined"
              fullWidth
              multiline
              required
              name="advice"
              rows={2}
              margin="normal"
              {...register("advice", { required: true })}
            />
          </Box>
          <Button sx={{ ml: 19 }} variant="contained" type="submit">
            Save
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default PatientDetails;
