import { useState } from "react";
import Box from "@mui/material/Box";
import SideNavBar from "./Navbar/index";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { DataGrid } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "react-datepicker/dist/react-datepicker.css";
import Checkbox from "@mui/material/Checkbox";
import { useBaseQuery } from "../../../api/BaseRequest";
import { green, red } from "@mui/material/colors";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import Spinner from "../../../components/CustomLoader";

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

  const { data:doctorProfile, isLoading, refetch } = useBaseQuery(`/users/profile`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  
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
        <h1>Welcome to the Doctor Dashboard, {doctorProfile?.name}</h1>
        {isLoading? <Spinner /> : (
        <Box
          sx={{
            display: "flex",
            gap: 5,
            flexWrap: "wrap",
            justifyContent: "space-between",
            marginBottom: 5,
          }}
        >
          <Card
            sx={{
              width: 200,
              background:
                "linear-gradient(to bottom, #098fff 20%, #E3F2FD 80%)",
              boxShadow: 5,
              borderRadius: "10px",
            }}
          >
            <CardContent>
              <Typography variant="h5" component="div">
                Specialization
              </Typography>
              <Typography variant="body2">
                {doctorProfile?.specialization}
              </Typography>
            </CardContent>
          </Card>
          <Card
            sx={{
              width: 200,
              background:
                "linear-gradient(to bottom, #098fff 20%, #E3F2FD 80%)",
              boxShadow: 5,
              borderRadius: "10px",
            }}
          >
            <CardContent>
              <Typography variant="h5" component="div">
                Degree
              </Typography>
              <Typography variant="body2">
                {doctorProfile?.degree}
              </Typography>
            </CardContent>
          </Card>
          <Card
            sx={{
              width: 200,
              background:
                "linear-gradient(to bottom, #098fff 20%, #E3F2FD 80%)",
              boxShadow: 5,
              borderRadius: "10px",
            }}
          >
            <CardContent>
              <Typography variant="h5" component="div">
                No. of Appointments
              </Typography>
              <Typography variant="body2">
                {doctorProfile?.number_of_appointments}
              </Typography>
            </CardContent>
          </Card>
          <Card
            sx={{
              width: 200,
              background:
                "linear-gradient(to bottom, #098fff 20%, #E3F2FD 80%)",
              boxShadow: 5,
              borderRadius: "10px",
            }}
          >
            <CardContent>
              <Typography variant="h5" component="div">
                Address
              </Typography>
              <Typography variant="body2">
                {doctorProfile?.address}
              </Typography>
            </CardContent>
          </Card>
        </Box>
        )}

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
