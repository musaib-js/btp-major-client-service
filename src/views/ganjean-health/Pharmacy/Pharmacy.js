import {
  Grid,
  TextField,
  Typography,
  Button,
  useMediaQuery,
  Box,
} from "@mui/material";
import PrescriptionImg from "../../../assets/images/prescription.png";
import React, { useRef, useState } from "react";
import useApiStore from "../../../api/api";
import useFormWrapper from "../../../components/Form";
import useToggle from "../../../hooks/Toggle";
import { toast } from "react-toastify";
import PharmacyImage from "../../../assets/images/PharmacyImage.jpg";
export const Pharmacy = () => {
  const inputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const api = useApiStore();
  const handleImageClick = () => {
    inputRef.current.click();
  };
  const { toggler: setSubmitting, toggle: submitting } = useToggle();
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  const onSubmit = async (data) => {
    try {
      setSubmitting(true);
      data.prescription = selectedFile;
      await api.medicineOrder(data);
      toast.success("Order Submitted Successfully");
      setSubmitting(false);
      reset();
    } catch (error) {
      toast.error("Something went wrong");
      setSubmitting(false);
    }
  };
  const { register, handleSubmit, errors, control, Controller, reset } =
    useFormWrapper({ onSubmit });

  return (
    <Grid container mt={1} justifyContent={"space-around"}>
      <Grid
        item
        justifyContent={"center"}
        alignItems={"center"}
        lg={5}
        md={5}
        sm={10}
        padding="15px"
        style={{ overflowY: "auto" }}
      >
        <Box
          sx={{
            overflowY: "auto",
          }}
        >
          <Typography component="h1" variant="h5" align="left" gutterBottom>
            Order Medicine
          </Typography>
          <Box>
            <TextField
              margin="normal"
              fullWidth
              label="Name"
              id="name"
              name="name"
              variant="standard"
              required
              {...register("name", { required: "Name is required" })}
            />
            <TextField
              margin="normal"
              fullWidth
              label="Email"
              id="email"
              name="email"
              variant="standard"
              required
              {...register("email", { required: "Email is required" })}
            />
            <TextField
              margin="normal"
              fullWidth
              label="Phone Number"
              id="phone"
              name="phone"
              variant="standard"
              required
              {...register("phone", { required: "Phone Number is required" })}
            />
            <Typography
              align="left"
              gutterBottom
              paragraph
              sx={{ width: "100%" }}
            >
              Please upload an image of a valid prescription from your doctor.
            </Typography>
            <Typography>
              <input
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                ref={inputRef}
                onChange={handleFileChange}
              />
              <img
                src={PrescriptionImg}
                alt="Prescription"
                height="150px"
                width="150px"
                onClick={handleImageClick}
                style={{
                  cursor: "pointer",
                  padding: "15px",
                  border: "2px dotted gray",
                  backgroundColor: "#f1e8e8",
                }}
              />
            </Typography>
            <Typography align="left" paragraph sx={{ width: "100%" }}>
              <span style={{ fontWeight: "700" }}>Note: </span> Always upload a
              clean version of your prescription for better results.
            </Typography>
            {selectedFile && (
              <Typography>
                <span style={{ fontWeight: "700" }}>
                  You can preview your prescription.
                </span>
              </Typography>
            )}
            {selectedFile && (
              <Button
                type="button"
                variant="contained"
                color="primary"
                sx={{
                  width: "40%",
                  marginTop: "10px",
                  marginBottom: "30px",
                  padding: "10px",
                }}
                onClick={handleSubmit}
                disabled={submitting}
              >
                {submitting ? "Submitting..." : "Submit"}
              </Button>
            )}
          </Box>
        </Box>
      </Grid>
      <Grid
        item
        justifyContent={"flex-end"}
        lg={5}
        md={5}
        sm={10}
        sx={{
          backgroundColor: selectedFile ? "#ece7e7" : "#fff",
          padding: "30px",
          borderRadius: "15px",
          height: "75vh",
          mr: "10px",
        }}
      >
        {selectedFile ? (
          <>
            <Typography variant="h5" align="left" gutterBottom fontWeight={700}>
              Preview:
            </Typography>
            <div style={{ overflowY: "auto", height: "auto" }}>
              <img
                src={URL.createObjectURL(selectedFile)}
                alt="Selected Prescription"
                style={{
                  width: "100%",
                  borderRadius: "25px",
                  objectFit: "cover",
                  height: "auto",
                }}
              />
            </div>
          </>
        ) : (
          <img
            src={PharmacyImage}
            alt="PharmacyImage"
            width="100%"
            height="100%"
            objectFit="cover"
            background-blend-mode="lighten"
            style={{ borderRadius: "15px" }}
          />
        )}
      </Grid>
    </Grid>
  );
};
