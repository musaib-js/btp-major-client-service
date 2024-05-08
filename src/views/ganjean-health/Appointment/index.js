import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React from "react";
import useApiStore from "../../../api/api";
import useFormWrapper from "../../../components/Form/index";
import useToggle from "../../../hooks/Toggle";
import BookingTestImage from "../../../assets/images/bannerMobile2.jpg";
import { toast } from "react-toastify";

const AppointmentBook = () => {
  const api = useApiStore();
  const { toggler: setSubmitting, toggle: submitting } = useToggle();

  const onSubmit = async (data) => {
    try {
      setSubmitting(true);
      await api.bookAppointment(data);
      toast.success(
        "Appointment Booked Successfully! Our agent will call you soon for confirmation"
      );
      setSubmitting(false);
      reset();
    } catch (error) {
      setSubmitting(false);
      toast.error("Something went wrong");
      console.error(error);
    }
  };

  const { register, handleSubmit, errors, reset } = useFormWrapper({
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
        mt={1}
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
            Book an Appointment
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
                {...register("name", {
                  required: "Name is required",
                })}
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
                label="Email Address"
                name="email"
                variant="standard"
                autoComplete="email"
                {...register("email", {
                  required: "Email ID is required",
                })}
              />

              <TextField
                margin="normal"
                required
                fullWidth
                label="Address"
                name="address"
                variant="standard"
                autoComplete="address"
                {...register("address")}
              />

              <TextField
                margin="normal"
                fullWidth
                label="Date (Optional)"
                name="date"
                variant="standard"
                autoComplete="date"
                value={null}
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
                {...register("date")}
              />

              <TextField
                margin="normal"
                fullWidth
                label="Time (Optional)"
                value={null}
                name="time"
                variant="standard"
                autoComplete="time"
                type="time"
                InputLabelProps={{
                  shrink: true,
                }}
                {...register("time")}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, borderRadius: "25px" }}
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
          backgroundColor: "#fff",
          padding: "30px",
          borderRadius: "15px",
          height: "75vh",
          mr: "10px",
        }}
      >
        <img
          src={BookingTestImage}
          alt="BookingTestImage"
          width="100%"
          height="100%"
          objectFit="cover"
          background-blend-mode="lighten"
        />
      </Grid>
    </Grid>
  );
};

export default AppointmentBook;
