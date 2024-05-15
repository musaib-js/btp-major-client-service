// api.js
import { useBaseMutation } from "./BaseRequest";
import SimpleAlert from "../components/Alert/index";
import { useNavigate } from "react-router-dom";

const handleSuccess = () => {
  return (
    <SimpleAlert
      severity={"success"}
      message={"Application Submitted Successfully"}
    />
  );
};

const handleFailed = () => {
  return (
    <SimpleAlert
      severity={"danger"}
      message={"Something Went Wrong ! Please try after sometime"}
    />
  );
};
const useApiStore = () => {
  const navigate = useNavigate();
  const registerMutation = useBaseMutation("/users/register/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const loginMutation = useBaseMutation("/users/login/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const loginWithOtpMutation = useBaseMutation("/users/otp-auth-login/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const generateReportMutation = useBaseMutation("/health/generate-report/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const loginOtpVerificationMutation = useBaseMutation(
    "/users/otp-auth-validate/",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const verifyOtpMutation = useBaseMutation("/users/verify/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const resetPasswordMutation = useBaseMutation("/password_reset/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const resetPasswordConfirmMutation = useBaseMutation(
    "/password_reset/confirm/",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const testBookMutation = useBaseMutation("/health/test/", {
    method: "POST",
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  const medicineOrderMutation = useBaseMutation("/health/medicine-order/", {
    method: "POST",
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  const appointmentBookMutation = useBaseMutation("/health/appointments/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const jobApplyMutation = useBaseMutation("/work/apply/", {
    method: "POST",
    headers: {
      "Content-Type": "multipart/form-data",
      //'Content-Type': 'application/json',
    },
  });

  const contactUsMutation = useBaseMutation("/home/contact-us/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const dashboardMutation = useBaseMutation("/update/profile", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const changePassword = useBaseMutation("/users/change-password/", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
  });

  // getting response data functions

  const register = async (formData) => {
    try {
      await registerMutation.mutateAsync(formData);
      window.location.href = `/verify-otp/${formData.email}`;
    } catch (error) {
      console.error(error);
      throw error; // Rethrow the error to handle it in the SignUpForm component
    }
  };

  const login = async (formData) => {
    try {
      const res = await loginMutation.mutateAsync(formData);
      localStorage.setItem("access_token", res.access_token);
      localStorage.setItem("refresh_token", res.refresh_token);
      localStorage.setItem("email", res.email);
      localStorage.setItem("role", res.role);
      localStorage.setItem("phone_number", res.phone_number);
      localStorage.setItem("first_name", res.first_name);
      localStorage.setItem("username", res.username);
      console.log(res.role);
      if (res.role === "doctor") {
        window.location.pathname = "/doctor-dashboard";
      } else if (res.role === "user") {
        window.location.pathname = "/health";
      }
    } catch (error) {
      console.log(error);
      if (error.response.status === 403) {
        window.location.href = `/verify-otp/${error.response.data.email}`;
      } else throw error;
    }
  };

  const loginWithOtp = async (formData) => {
    try {
      await loginWithOtpMutation.mutateAsync(formData);
      window.location.href = `/verify-login-otp/${formData.phone_number}`;
    } catch (error) {
      throw error;
    }
  };

  const loginOtpVerify = async (formData) => {
    try {
      const res = await loginOtpVerificationMutation.mutateAsync(formData);
      localStorage.setItem("access_token", res.access_token);
      localStorage.setItem("refresh_token", res.refresh_token);
      localStorage.setItem("email", res.email);
      localStorage.setItem("role", res.role);
      localStorage.setItem("phone_number", res.phone_number);
      localStorage.setItem("first_name", res.first_name);
      localStorage.setItem("username", res.username);
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const verifyOtp = async (formData) => {
    try {
      const res = await verifyOtpMutation.mutateAsync(formData);
      localStorage.setItem("access_token", res.access_token);
      localStorage.setItem("refresh_token", res.refresh_token);
      localStorage.setItem("email", res.email);
      localStorage.setItem("role", res.role);
      localStorage.setItem("phone_number", res.phone_number);
      localStorage.setItem("first_name", res.first_name);
      localStorage.setItem("username", res.username);
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const resetPassword = async (formData) => {
    try {
      await resetPasswordMutation.mutateAsync(formData);
    } catch (error) {
      throw error;
    }
  };

  const resetPasswordConfirm = async (formData) => {
    try {
      await resetPasswordConfirmMutation.mutateAsync(formData);
    } catch (error) {
      throw error;
    }
  };

  const testBook = async (formData) => {
    console.log(formData);
    try {
      await testBookMutation.mutateAsync(formData);
    } catch (error) {
      console.error(error);
      throw error; // Rethrow the error to handle it in the SignInForm component
    }
  };

  const medicineOrder = async (formData) => {
    console.log(formData);
    try {
      await medicineOrderMutation.mutateAsync(formData);
    } catch (error) {
      console.error(error);
      throw error; // Rethrow the error to handle it in the SignInForm component
    }
  };

  const bookAppointment = async (formData) => {
    console.log(formData);
    try {
      await appointmentBookMutation.mutateAsync(formData);
    } catch (error) {
      console.error(error);
      throw error; // Rethrow the error to handle it in the SignInForm component
    }
  };

  const jobApply = async (formData) => {
    try {
      await jobApplyMutation.mutateAsync(formData);
      handleSuccess();
    } catch (error) {
      handleFailed();
      throw error; // Rethrow the error to handle it in the SignInForm component
    }
  };

  const contactUs = async (formData) => {
    try {
      await contactUsMutation.mutateAsync(formData);
    } catch (error) {
      throw error;
    }
  };

  const dashboardEdit = async (formData) => {
    try {
      await dashboardMutation.mutateAsync(formData);
    } catch (error) {
      throw error;
    }
  };

  const updatePassword = async (formData) => {
    try {
      await changePassword.mutateAsync(formData);
    } catch (error) {
      throw error;
    }
  };
  const generateReport = async (formData) => {
    let data;
    try {
      data = await generateReportMutation.mutateAsync(formData);
      console.log("Report generated successfully:", data);
    } catch (error) {
      throw error;
    }
    return data;
  };

  return {
    register,
    login,
    testBook,
    bookAppointment,
    jobApply,
    contactUs,
    medicineOrder,
    verifyOtp,
    loginWithOtp,
    loginOtpVerify,
    resetPassword,
    resetPasswordConfirm,
    dashboardEdit,
    updatePassword,
    generateReport,
  };
};

export default useApiStore;
