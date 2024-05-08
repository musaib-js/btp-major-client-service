import { useState } from "react";
import Box from "@mui/material/Box";
import SideNavBar from "./Navbar/index";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { DataGrid } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Checkbox from "@mui/material/Checkbox";
import { doctorInfo } from "./Doctor-info";
import { useBaseQuery } from "../../../api/BaseRequest";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { green, red } from "@mui/material/colors";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import PatientDetails from "./Patient-Details";

const DoctorDashboard = () => {
  const [openNav, setOpenNav] = useState(true);
  const [searchDate, setSearchDate] = useState(null);
  const navigate = useNavigate();
  const handleDetails = (id) => {
    navigate(`/patient-details/${id}`);
    console.log("details");
  };
  const { data } = useBaseQuery(`/health/appointments`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log(data);
  const [filteredRows, setFilteredRows] = useState([]);
  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };
  const handleSearch = () => {
    if (!searchDate || !data) {
      setFilteredRows([]);
    }

    console.log("Search Date:", searchDate);

    const formattedSearchDate = formatDate(searchDate);
    console.log("Formatted Search Date:", formattedSearchDate);

    const filteredRows = data.filter(
      (row) => row.booking_date === formattedSearchDate
    );

    if (filteredRows.length === 0) {
      setFilteredRows([{ id: 0, message: "No data" }]);
    } else {
      setFilteredRows(filteredRows);
    }
  };
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const columns = [
    {
      field: "",
      headerName: "",
      width: 100,
      headerClassName: "header-blue",
      renderCell: (params) => <Checkbox {...label} />,
    },
    {
      field: "id",
      headerName: "ID",
      width: 100,
      headerClassName: "header-blue",
    },
    {
      field: "name",
      headerName: "Name",
      width: 200,
      headerClassName: "header-blue",
    },
    {
      field: "phone_number",
      headerName: "Phone Number",
      width: 200,
      headerClassName: "header-blue",
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,
      headerClassName: "header-blue",
    },
    {
      field: "address",
      headerName: "Address",
      width: 200,
      headerClassName: "header-blue",
    },
    {
      field: "date",
      headerName: "Date",
      width: 150,
      headerClassName: "header-blue",
    },
    {
      field: "booking_date",
      headerName: "Booking Date",
      width: 150,
      headerClassName: "header-blue",
    },
    {
      field: "time",
      headerName: "Time",
      width: 150,
      headerClassName: "header-blue",
    },
    {
      field: "is_confirmed",
      headerName: "Status",
      width: 150,
      headerClassName: "header-blue",
      renderCell: (params) => (
        <>
          {params.value ? (
            <CheckCircleIcon sx={{ color: green[500], mt: 1 }} />
          ) : (
            <CancelIcon sx={{ color: red[500], mt: 1 }} />
          )}
        </>
      ),
    },
    {
      field: "actions",
      headerName: "Details",
      width: 230,
      renderCell: (params) => (
        <IconButton onClick={() => handleDetails(params.row.id)}>
          <MoreVertIcon />
        </IconButton>
      ),
      headerClassName: "header-blue",
    },
  ];
  console.log(data?.[0]?.doctor?.name);
  return (
    <Box sx={{ display: "flex" }}>
      <SideNavBar openNav={openNav} onCloseNav={() => setOpenNav(false)} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: "background.default",
          p: 3,
          overflow: "auto",
        }}
      >
        <h1>Welcome to the Doctor Dashboard, {data?.[0]?.doctor?.name}</h1>
        <Box
          sx={{
            display: "flex",
            gap: 10,
            flexWrap: "wrap",
            justifyContent: "space-between",
            marginBottom: 5,
          }}
        >
          <Card
            sx={{
              width: 200,
              background:
                "linear-gradient(to bottom, #BBDEFB 20%, #E3F2FD 80%)",
              boxShadow: 5,
              borderRadius: "10px",
            }}
          >
            <CardContent>
              <Typography variant="h5" component="div">
                Specialization
              </Typography>
              <Typography variant="body2">
                {data?.[0]?.doctor?.specialization}
              </Typography>
            </CardContent>
          </Card>
          <Card
            sx={{
              width: 200,
              background:
                "linear-gradient(to bottom, #BBDEFB 20%, #E3F2FD 80%)",
              boxShadow: 5,
              borderRadius: "10px",
            }}
          >
            <CardContent>
              <Typography variant="h5" component="div">
                Degree
              </Typography>
              <Typography variant="body2">
                {data?.[0]?.doctor?.degree}
              </Typography>
            </CardContent>
          </Card>
          <Card
            sx={{
              width: 200,
              background:
                "linear-gradient(to bottom, #BBDEFB 20%, #E3F2FD 80%)",
              boxShadow: 5,
              borderRadius: "10px",
            }}
          >
            <CardContent>
              <Typography variant="h5" component="div">
                No. of Appointments
              </Typography>
              <Typography variant="body2">
                {data?.[0]?.doctor?.number_of_appointments}
              </Typography>
            </CardContent>
          </Card>
          <Card
            sx={{
              width: 200,
              background:
                "linear-gradient(to bottom, #BBDEFB 20%, #E3F2FD 80%)",
              boxShadow: 5,
              borderRadius: "10px",
            }}
          >
            <CardContent>
              <Typography variant="h5" component="div">
                Address
              </Typography>
              <Typography variant="body2">
                {data?.[0]?.doctor?.address}
              </Typography>
            </CardContent>
          </Card>
        </Box>
        <Box mb={2}>
          <Box
            sx={{
              marginBottom: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box sx={{ width: 180, bgcolor: "whitesmoke" }}>
                <DatePicker
                  selected={searchDate}
                  onChange={(date) => setSearchDate(date)}
                  dateFormat="yyyy-MM-dd"
                  placeholderText="Select Date"
                  sx={{
                    "& .react-datepicker__input": {
                      height: "100px",
                    },
                  }}
                />
              </Box>
              <Button variant="contained" onClick={handleSearch} sx={{ ml: 2 }}>
                Search
              </Button>
            </Box>
            <Button
              variant="contained"
              sx={{
                ml: 2,
                bgcolor: "green",
                color: "white",
              }}
            >
              Add Patient
            </Button>
          </Box>
        </Box>
        <Box>
          <DataGrid
            rows={
              filteredRows.length
                ? filteredRows
                : data?.map((row) => ({
                    id: row.id,
                    name: row.name,
                    phone_number: row.phone_number,
                    email: row.email,
                    address: row.address,
                    date: row.date,
                    booking_date: row.booking_date,
                    time: row.time,
                    is_confirmed: row.is_confirmed,
                  })) || []
            }
            columns={columns}
            pageSize={5}
            pageSizeOptions={[10, 25, 50]}
            rowHeight={40}
            autoHeight
            sx={{
              "& .header-blue": {
                backgroundColor: "#E3F2FD",
                fontWeight: "bold",
              },
              boxShadow: 2,
              "& .MuiDataGrid-cell:hover": {
                color: "primary.main",
              },
              "& .MuiDataGrid-cell:focus": {
                outline: "none",
              },
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default DoctorDashboard;