import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import useApiStore from "../../../api/api";
import useFormWrapper from "../../../components/Form/index";
import useToggle from "../../../hooks/Toggle";
import BookingTestImage from "../../../assets/images/BookingTestImage.jpg";
import { toast } from "react-toastify";

const SignUpForm = ({ onToggleForm }) => {
  const api = useApiStore();
  const [selectedFile, setSelectedFile] = useState(null);
  const { toggler: setSubmitting, toggle: submitting } = useToggle();

  const onSubmit = async (data) => {
    try {
      setSubmitting(true);
      await api.testBook(data);
      toast.success("Test Booked Successfully");
      setSubmitting(false);
      reset();
    } catch (error) {
      toast.error("Something went wrong");
      setSubmitting(false);
      console.error(error);
    }
  };

  const { register, handleSubmit, errors, Controller, control, reset } =
    useFormWrapper({
      onSubmit,
    });

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
          <Typography component="h1" variant="h5" align="left">
            Book a Test
          </Typography>
          <form noValidate onSubmit={handleSubmit}>
            <Box>
              <TextField
                margin="normal"
                fullWidth
                label="Name"
                name="name"
                autoComplete="name"
                error={errors.name}
                variant="standard"
                {...register("name")}
              />

              <TextField
                margin="normal"
                required
                fullWidth
                label="Phone Number"
                name="phone_number"
                autoComplete="phone-number"
                variant="standard"
                {...register("phone_number", {
                  required: "Phone number is required",
                })}
              />

              <TextField
                margin="normal"
                required
                fullWidth
                hidden
                label="Email"
                name="email"
                autoComplete="email"
                variant="standard"
                value={localStorage.getItem("email")}
                {...register("email", {
                  required: "Email is required",
                })}
              />

              <TextField
                margin="normal"
                fullWidth
                label="Address"
                name="address"
                variant="standard"
                autoComplete="address"
                {...register("address")}
              />

              <TextField
                margin="normal"
                required
                fullWidth
                label="Test Name"
                name="test_name"
                variant="standard"
                autoComplete="test-name"
                {...register("test_name")}
              />

              <TextField
                margin="normal"
                fullWidth
                label="Test Date"
                name="test_date"
                type="date"
                variant="standard"
                InputLabelProps={{
                  shrink: true,
                }}
                {...register("test_date")}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                label="Pincode"
                name="pincode"
                variant="standard"
                autoComplete="pincode"
                {...register("pincode")}
              />
              <Controller
                control={control}
                name="prescription"
                render={({ field }) => (
                  <>
                    <TextField
                      margin="normal"
                      type="file"
                      accept="image/*"
                      variant="standard"
                      onChange={(e) => {
                        field.onChange(e.target.files[0]);
                        if (e.target.files[0]) {
                          setSelectedFile(
                            URL.createObjectURL(e.target.files[0])
                          );
                        }
                        const formData = new FormData();
                        formData.append("prescription", e.target.files[0]);
                      }}
                    />
                    {errors.prescription && (
                      <p style={{ color: "red" }}>
                        {errors.prescription.message}
                      </p>
                    )}
                  </>
                )}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleSubmit}
                disabled={submitting}
              >
                {submitting ? "Submitting..." : "Submit"}
              </Button>
            </Box>
          </form>
        </Box>
      </Grid>
      <Grid
        item
        justifyContent={"flex-end"}
        lg={5}
        md={5}
        sm={10}
        mt={1}
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
            <Typography
              variant="h5"
              align="center"
              gutterBottom
              fontWeight={700}
            >
              Preview:
            </Typography>
            <div style={{ overflowY: "auto" }}>
              <img
                src={selectedFile}
                alt="Selected Prescription"
                style={{ width: "100%", borderRadius: "5px" }}
              />
            </div>
          </>
        ) : (
          <img
            src={BookingTestImage}
            alt="BookingTestImage"
            width="100%"
            height="100%"
            objectFit="cover"
            background-blend-mode="lighten"
          />
        )}
      </Grid>
    </Grid>
  );
};

export default SignUpForm;
