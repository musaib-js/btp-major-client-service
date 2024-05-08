// routes/routeConfig.js
import Home from "../views";
import About from "../views/ganjean-health/about";
import ContactUs from "../views/ganjean-health/contact/";
import Pricing from "../views/ganjean-health/pricing";
import Privacy from "../views/ganjean-health/privacyPolicy";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import PriceChangeOutlinedIcon from "@mui/icons-material/PriceChangeOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import PolicyOutlinedIcon from "@mui/icons-material/PolicyOutlined";
import OtherHousesOutlinedIcon from "@mui/icons-material/OtherHousesOutlined";
import HealthPortal from "../views/ganjean-health/Home/Health";
import Login from "../views/ganjean-health/Login";
import SignUp from "../views/ganjean-health/SignUp";
import BookingTest from "../views/ganjean-health/booking/";
import AppointmentBook from "../views/ganjean-health/Appointment";
import Jobs from "../views/CareersPage/Jobs";
import JobDetails from "../views/CareersPage/JobDetails";
import ResetPassword from "../views/ganjean-health/Login/ResetPassword";
import Contact from "../views/ganjean-health/contact/";
import { Cancellation } from "../views/ganjean-health/Cancellation/Cancellation";
import { Shipping } from "../views/ganjean-health/Shipping/Shipping";
import { Pharmacy } from "../views/ganjean-health/Pharmacy/Pharmacy";
import OTP from "../views/ganjean-health/Login/OTP";
import LogOutIcon from "@mui/icons-material/Logout";
import DashBoard from "../views/ganjean-health/DashBoard/Index";
import LoginWithOTP from "../views/ganjean-health/Login/LoginWithOTP";
import LoginOTP from "../views/ganjean-health/Login/LoginOTP";
import ResetPass from "../views/ganjean-health/Login/ResetPass";
import { MedicineOrders } from "../views/ganjean-health/DashBoard/MedicineOrders";
import Appointments from "../views/ganjean-health/DashBoard/Appointments";
import LabTests from "../views/ganjean-health/DashBoard/LabTests";
import ChangePassword from "../views/ganjean-health/Login/ChangePassword";
import DoctorDashboard from "../views/ganjean-health/Doctor-Dashboard/DoctorDashboard";
import PatientDetails from "../views/ganjean-health/Doctor-Dashboard/Patient-Details";

const routesConfig = [
  {
    label: "Home",
    path: "/",
    component: <Home />,
    icon: <OtherHousesOutlinedIcon />,
    isSideBarLink: false,
  },
  {
    label: "Login",
    path: "/login",
    component: <Login />,
    icon: <OtherHousesOutlinedIcon />,
    isSideBarLink: false,
  },
  {
    label: "Sign Up",
    path: "/register",
    component: <SignUp />,
    icon: <OtherHousesOutlinedIcon />,
    isSideBarLink: false,
  },
  {
    label: "Booking Test",
    path: "/booking-test",
    component: <BookingTest />,
    icon: <OtherHousesOutlinedIcon />,
    isSideBarLink: false,
  },
  {
    label: "Book Appointment",
    path: "/book-appointment",
    component: <AppointmentBook />,
    icon: <OtherHousesOutlinedIcon />,
    isSideBarLink: false,
  },
  {
    label: "Health Portal",
    path: "/health",
    component: <HealthPortal />,
    icon: <OtherHousesOutlinedIcon />,
    isSideBarLink: false,
  },
  {
    label: "About Us",
    path: "/about",
    component: <About />,
    icon: <InfoOutlinedIcon />,
    isSideBarLink: true,
  },
  {
    label: "Pricing",
    path: "/pricing",
    component: <Pricing />,
    icon: <PriceChangeOutlinedIcon />,
    isSideBarLink: true,
  },
  {
    label: "Privacy Policy",
    path: "/privacy-policy",
    component: <Privacy />,
    icon: <PolicyOutlinedIcon />,
    isSideBarLink: true,
  },
  {
    label: "Careers",
    path: "/careers",
    component: <Jobs />,
    icon: <PolicyOutlinedIcon />,
    isSideBarLink: true,
  },
  {
    label: "JobDetails",
    path: "/careers/jobDetails/:id",
    component: <JobDetails />,
    icon: <PolicyOutlinedIcon />,
    isSideBarLink: false,
  },
  {
    label: "Reset-Password",
    path: "/users/reset-password-form",
    component: <ResetPassword />,
    icon: <PolicyOutlinedIcon />,
    isSideBarLink: false,
  },

  {
    label: "Cancellation Policy",
    path: "/cancellation-policy",
    component: <Cancellation />,
    icon: <PolicyOutlinedIcon />,
    isSideBarLink: true,
  },
  {
    label: "Shipping Policy",
    path: "/shipping-policy",
    component: <Shipping />,
    icon: <PolicyOutlinedIcon />,
    isSideBarLink: true,
  },
  {
    label: "Contact Us",
    path: "/contact-us",
    component: <Contact />,
    icon: <PolicyOutlinedIcon />,
    isSideBarLink: true,
  },
  {
    label: "Pharmacy",
    path: "/pharmacy",
    component: <Pharmacy />,
    icon: <PolicyOutlinedIcon />,
    isSideBarLink: false,
  },
  {
    label: "OTP",
    path: "/verify-otp/:email",
    component: <OTP />,
    icon: <PolicyOutlinedIcon />,
    isSideBarLink: false,
  },

  {
    label: "Dashboard",
    path: "/dashboard",
    component: <DashBoard />,
    icon: <LogOutIcon />,
    isSideBarLink: false,
  },
  {
    label: "Login With OTP",
    path: "/login-with-otp",
    component: <LoginWithOTP />,
    icon: <LogOutIcon />,
    isSideBarLink: false,
  },
  {
    label: "OTP Verify",
    path: "/verify-login-otp/:phone_number",
    component: <LoginOTP />,
    icon: <LogOutIcon />,
    isSideBarLink: false,
  },
  {
    label: "Reset Password",
    path: "/reset-password",
    component: <ResetPass />,
    icon: <LogOutIcon />,
    isSideBarLink: false,
  },
  {
    label: "Medicine Orders",
    path: "/medicine-orders",
    component: <MedicineOrders />,
    icon: <LogOutIcon />,
    isSideBarLink: false,
  },
  {
    label: "Appointments",
    path: "/appointments",
    component: <Appointments />,
    icon: <LogOutIcon />,
    isSideBarLink: false,
  },
  {
    label: "Lab Tests",
    path: "/lab-tests",
    component: <LabTests />,
    icon: <LogOutIcon />,
    isSideBarLink: false,
  },
  {
    label: "Change Password",
    path: "/update-password",
    component: <ChangePassword />,
    icon: <LogOutIcon />,
    isSideBarLink: false,
  },
  {
    label: "Doctor Dashboard",
    path: "/doctor-dashboard",
    component: <DoctorDashboard />,
    icon: <LogOutIcon />,
    isSideBarLink: false,
  },

  {
    label: "Patient Details",
    path: "/patient-details/:id",
    component: <PatientDetails />,
    isSideBarLink: false,
  },
];

export default routesConfig;
