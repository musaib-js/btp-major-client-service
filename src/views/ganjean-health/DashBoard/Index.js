import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Paper,
  Typography,
  Grid,
  Container,
  TextField,
  IconButton,
  CircularProgress,
  Avatar,
  Button,
  Box
} from "@mui/material";
import { useBaseQuery } from "../../../api/BaseRequest";
import CustomLoader from "../../../components/CustomLoader/index";
import EditIconBtn from "@mui/icons-material/Edit";
import SaveIconBtn from "@mui/icons-material/Save";
import { Link } from "react-router-dom";
import useApiStore from "../../../api/api";
import useToggle from '../../../hooks/Toggle';
import avatar from "../../../assets/images/user.png"

export default function Dashboard() {
  const { data, isLoading, refetch } = useBaseQuery(`/users/profile`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const { toggler: setSubmitting, toggle: submitting } = useToggle();
  const api = useApiStore();

  const [editMode, setEditMode] = useState(false);
  const [editedData, setEditedData] = useState({});

  const handleEditClick = () => {
    setEditMode(true);
  };

  const saveEditedData = async (data) => {
    try {
      setSubmitting(true);
      await api.dashboardEdit(data);
      window.location.href = '/dashboard'
      setSubmitting(false);
    } catch (error) {
      setSubmitting(false);
    }
  };


  const handleSaveClick = () => {
    saveEditedData(editedData)
    refetch()
    setEditMode(false);
  };

  const handleChange = (e) => {
    if (e && e.target) {
      const { name, value } = e.target;
      setEditedData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  return (
    <>
      {isLoading ? (
        <CustomLoader />
      ) : (
        <Container container sx={{ mt: 5 }}>
          <Card
            sx={{ mb: 5, p: 1, borderRadius: "25px" }}
            component={Paper}
            elevation={1}
          >
            <Grid container sx={{justifyContent: "center"}}  >
              <Grid item sx={{ display: "flex",flexGrow: 1 }}>
                <CardContent>
                  <Grid item display={"flex"}>
                    <Typography variant="h6" gutterBottom sx={{ ml: 1 }}>
                      Username
                    </Typography>
                    <IconButton onClick={handleEditClick} disabled={editMode}>
                      <EditIconBtn color={editMode ? "" : "primary"} />
                    </IconButton>
                    <IconButton onClick={handleSaveClick} disabled={!editMode}>
                      <SaveIconBtn color={!editMode ? "" : "primary"} />
                    </IconButton>
                    {submitting && <CircularProgress />}
                  </Grid>
                  <TextField
                    variant="standard"
                    name="alternate_phone_number"
                    id="alternate_phone_number"
                    defaultValue={data.alternate_phone_number ? data.alternate_phone_number : "Phone Number"}
                    disabled={!editMode}
                    fullWidth
                    sx={{ mb: 1 }}
                    onChange={handleChange}
                  />
                  <TextField
                    variant="standard"
                    name="address"
                    id="address"
                    defaultValue={data?.address ? data?.address : "Address"}
                    disabled={!editMode}
                    fullWidth
                    sx={{ mb: 1 }}
                    onChange={handleChange}
                  />
                  <>
                    {/* <Typography variant="body1" gutterBottom sx={{ ml: 1 }}>Grocery Orders : 0</Typography> */}
                    <Typography variant="body1" gutterBottom sx={{ ml: 1 }}>
                      Medicine Orders : {data.number_of_medicine_orders}
                    </Typography>
                    <Typography variant="body1" gutterBottom sx={{ ml: 1 }}>
                      Lab Tests : {data.number_of_lab_tests}
                    </Typography>
                    <Typography variant="body1" gutterBottom sx={{ ml: 1 }}>
                      Doctor Appointment : {data.number_of_appointments}
                    </Typography>

                    <Box> <Link to={'/update-password'}> <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2, borderRadius: "25px" }} disabled={submitting}
                    >
                      {submitting ? "Submitting..." : "Change password"}
                    </Button></Link></Box>
                  </>
                </CardContent>
              </Grid>
              <Grid
                item
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "start",
                }}
              >
                <CardMedia
                  component="img"
                  height="150px"
                  width="150px"
                  sx={{
                    objectFit: "cover",
                    //backgroundColor: "#098fff",
                    borderRadius: "25px",

                  }}
                  image={data.profile_pic ? data?.profile_pic : avatar}
                  alt="Profile Picture"
                  srcset={avatar}
                />
              </Grid>
            </Grid>
          </Card>

          <Link to="/medicine-orders" style={{ textDecoration: "none" }}>
            <Card
              sx={{
                mb: 2,
                borderRadius: "25px",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.02)",
                  cursor: "pointer",
                },
              }}
              component={Paper}
              elevation={3}
            >
              <CardContent>Medicine Orders</CardContent>
            </Card>
          </Link>
          <Link to="/appointments" style={{ textDecoration: "none" }}>
            <Card
              sx={{
                mb: 2,
                borderRadius: "25px",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.02)",
                  cursor: "pointer",
                },
              }}
              component={Paper}
              elevation={3}
            >
              <CardContent>Appointments</CardContent>
            </Card>
          </Link>
          <Link to="/lab-tests" style={{ textDecoration: "none" }}>
            <Card
              sx={{
                mb: 2,
                borderRadius: "25px",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.02)",
                  cursor: "pointer",
                },
              }}
              component={Paper}
              elevation={3}
            >
              <CardContent>Lab Tests</CardContent>
            </Card>
          </Link>


        </Container>
      )}
    </>
  );
}
