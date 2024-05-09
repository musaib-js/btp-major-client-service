import React from "react";
import { useParams } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState, useEffect } from "react";
import useFormWrapper from "../../../components/Form/index";
import { ToastContainer, toast } from "react-toastify";
import { useBaseQuery } from "../../../api/BaseRequest";
import { Button } from "@mui/material";
import SideNavBar from "./Navbar/index";
import useApiStore from "../../../api/api";

const PatientDetails = () => {
  const { id } = useParams();
  const api = useApiStore();
  const { data } = useBaseQuery(`/health/appointments/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log(data);

  const onSubmit = async (formdata) => {
    const payload = {
      appointment_id: parseInt(id),
      symptoms: formdata?.symptoms,
      diagnosis: formdata?.diagnosis,
      advice: formdata?.advice,
      prescription: formdata?.prescription,
    };
    console.log(payload);
    try {
      let data = await api.generateReport(payload);
      console.log(data?.message);
      toast.success(data?.message);
    } catch {
      console.error(errors);
    }
    handleReset();
  };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useFormWrapper({ onSubmit });
  const [openNav, setOpenNav] = useState(true);

  const handleReset = () => {
    reset();
  };
  console.log(data?.name?.split(" ")[0]);
  return (
    <Box p={2} sx={{ ml: 44 }}>
      <ToastContainer />
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
              variant="outlined"
              fullWidth
              margin="normal"
              value={data?.name?.split(" ")[0]}
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
              variant="outlined"
              fullWidth
              margin="normal"
              value={data?.name?.split(" ")[1]}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <label style={{ minWidth: "150px" }} htmlFor="phone_number">
              Phone Number
            </label>

            <TextField
              variant="outlined"
              fullWidth
              name="phone_number"
              margin="normal"
              disabled
              value={data?.phone_number}
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
              variant="outlined"
              fullWidth
              name="email"
              disabled
              margin="normal"
              value={data?.email}
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
              variant="outlined"
              fullWidth
              margin="normal"
              value={data?.address}
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
