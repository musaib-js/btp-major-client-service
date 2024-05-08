import { Container, Grid, Card, CardMedia, CardContent, Typography, Button, TextField, Box, useTheme, useMediaQuery } from '@mui/material'
import React from 'react'
import Bg from "../../assets/images/CareersPageBanner.png";
import BgM from "../../assets/images/CareersPageBannerMobile.png";
import { useParams } from 'react-router-dom'
import { Link } from 'react-scroll'
import useFormWrapper from '../../components/Form/index'
import useApiStore from '../../api/api';
import { Unstable_NumberInput as NumberInput } from '@mui/base/Unstable_NumberInput';
import HtmlToTextConverter from '../../hooks/HtmlToTextConverter';
import useToggle from '../../hooks/Toggle';
import { useBaseQuery } from '../../api/BaseRequest';
import Spinner from '../../components/CustomLoader';
import { toast } from 'react-toastify'
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/system';

const StyledTypoGraphy = styled(Typography)(({ theme }) => ({
    color: "red",
    fontSize: "12px"
}));

const Job = () => {
    const { id } = useParams();
    const api = useApiStore();
    const theme = useTheme();
    const { toggler: setSubmitting, toggle: submitting } = useToggle();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down(600));

    const { data: jobDetails, isLoading } = useBaseQuery(`/work/jobs/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    const onSubmit = async (data) => {
        try {
            setSubmitting(true);
            await api.jobApply(data);
            toast.success("Application Submitted Successfully");
            setSubmitting(false);
            reset();
        } catch (error) {
            toast.error("Something went wrong")
            setSubmitting(false);
        }
    };
    const { register, handleSubmit, formState: { errors }, Controller, control, reset } = useFormWrapper({ onSubmit });

    return (
        <>
            <Grid container marginTop={5} marginBottom={5}>
                <Card
                    sx={{
                        width: "100%",
                    }}>
                    <CardMedia component="img"
                        height="300px"
                        image={isSmallScreen ? BgM : Bg}
                        title="Doctor"
                    />

                </Card>
            </Grid>
            {/* {console.log(isLoading)} */}
            {isLoading ? (<Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", height: "300px" }}><Spinner /></Box>) : (<Container >
                <Typography variant='h4' align='center'>
                    {jobDetails?.title}
                </Typography>
                <Link
                    to='applyNowCard'
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Button
                            type="button"
                            variant="contained"
                            color="primary"
                            sx={{ width: '40%', marginTop: '30px', marginBottom: '30px', padding: '15px' }}
                        // onClick={handleApplyNow}
                        >
                            Apply Now
                        </Button>
                    </Box>
                </Link>
                <Card sx={{
                    marginBottom: "50px"
                }}
                    elevation={2}
                >
                    <CardContent>
                        <Typography variant='block-1' align='center' gutterBottom>
                            <HtmlToTextConverter html={jobDetails?.description} />
                        </Typography>
                    </CardContent>
                </Card>
                <Card
                    component="form" noValidate onSubmit={handleSubmit}
                    id="applyNowCard"
                    sx={{ padding: "1%" }} elevation={0}>
                    <CardContent>
                        <Typography variant='h6' align='left' gutterBottom>
                            Apply Now
                        </Typography>
                        <div>
                            <TextField
                                label="Name"
                                id='name'
                                name='name'
                                variant='standard'
                                sx={{ width: "100%", marginBottom: "20px" }}
                                required
                                {...register('name', {
                                    required: 'Name is required', validate: {
                                        minLength: (v) => v?.length >= 5,
                                        matchPattern: (v) => /^[a-zA-Z0-9_]+$/.test(v),
                                    },
                                })}
                            />
                            {errors?.name?.type === "required" && (
                                <StyledTypoGraphy>Name is required</StyledTypoGraphy>
                            )}

                            {errors?.name?.type === "minLength" && (
                                <StyledTypoGraphy>Name should have at least 5 characters</StyledTypoGraphy>
                            )}
                        </div>
                        <div>
                            <TextField
                                label="Email"
                                id='email'
                                name='email'
                                variant='standard'
                                sx={{ width: "100%", marginBottom: "20px" }}
                                required
                                {...register('email', {
                                    required: 'Email is required', validate: {
                                        maxLength: (v) =>
                                            v.length <= 50 || "The email should have at most 50 characters",
                                        matchPattern: (v) =>
                                            /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
                                            "Email address must be a valid address",
                                    },
                                })}
                            />
                            {errors?.email?.message && (
                                <StyledTypoGraphy>{errors?.email?.message}</StyledTypoGraphy>
                            )}
                        </div>

                        <div>
                            <TextField
                                required
                                sx={{ width: "100%", marginBottom: "20px" }}
                                id="phoneNumber"
                                label="Phone Number"
                                name="phone_number"
                                variant='standard'
                                autoComplete="phone-number"
                                {...register('phone_number', {
                                    required: 'Phone Number is required',
                                    validate: {
                                        minLength: (numberLength) => numberLength.length === 10,
                                        matchPattern: (pattern) => /^\d+$/.test(pattern),
                                    },
                                })}
                            />
                            {errors?.phone_number?.type === "required" && (
                                <StyledTypoGraphy>Phone Number is required</StyledTypoGraphy>
                            )}
                            {errors?.phone_number?.type === "minLength" && (
                                <StyledTypoGraphy>Phone number should be 10 digits long</StyledTypoGraphy>
                            )}
                            {errors?.phone_number?.type === "matchPattern" && (
                                <StyledTypoGraphy>Phone number must contain only numbers</StyledTypoGraphy>
                            )}
                        </div>

                        <div>
                            <TextField
                                label="Address"
                                id='address'
                                name='address'
                                variant='standard'
                                sx={{ width: "100%", marginBottom: "20px" }}
                                required
                                {...register('address', { required: 'Address is required' })}

                            />
                            {errors?.address?.message && (
                                <StyledTypoGraphy>{errors?.address?.message}</StyledTypoGraphy>
                            )}
                        </div>

                        <div>
                            <TextField
                                label="Tell us about yourself"
                                id='about'
                                name='about'
                                multiline
                                rows={5}
                                variant='standard'
                                sx={{ width: "100%", marginBottom: "20px" }}
                                required
                                {...register('about', { required: 'This field is required' })}

                            />
                            {errors?.about?.message && (
                                <StyledTypoGraphy>{errors?.about?.message}</StyledTypoGraphy>
                            )}
                        </div>

                        <NumberInput
                            label="Job"
                            id='job'
                            name='job'
                            required
                            hidden
                            value={id}
                            {...register('job', { required: 'Address is required' })}
                        />
                    </CardContent>

                    {/*
                    <Box>
                        <Controller
                            control={control}
                            name="resume"
                            render={({ field }) => (
                                <>
                                    <label htmlFor="resume">
                                        <IconButton
                                            color="primary"
                                            component="span"
                                            sx={{
                                                background: "#f86009",
                                                width: "18%",
                                                borderRadius: "25px",
                                                "&:hover": {
                                                    background: "#f86009", // Add the same background color for hover
                                                },
                                            }}
                                        >
                                            <CloudUploadIcon
                                                sx={{
                                                    color: "#fff", // Set the color to white
                                                }}
                                            />
                                            <Typography fontsize="14px" color="#fff" ml="15px">Upload file</Typography>
                                        </IconButton>

                                    </label>

                                    <input
                                        type="file"
                                        accept=".pdf, .docx"
                                        id="resume"
                                        onChange={(e) => {
                                            field.onChange(e.target.files[0]);
                                            const formData = new FormData();
                                            formData.append('resume', e.target.files[0]);
                                        }}
                                        style={{
                                            display: 'none',
                                        }}
                                    />
                                    {field.value ? <span style={{ fontSize: "12px", marginLeft: "15px" }}>{field.value.name} </span> : <span style={{ fontSize: "12px", marginLeft: "15px" }}>Only PDF and docx formats are allowed.</span>}


                                    {errors.resume && <p style={{ color: 'red' }}>{errors.resume.message}</p>}
                                </>
                            )}
                        />

                    </Box>
                     */}
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Button
                            type="button"
                            variant="contained"
                            color="primary"
                            sx={{ width: '40%', marginTop: '30px', marginBottom: '30px', padding: '10px' }}
                            onClick={handleSubmit}
                            disabled={submitting}
                        >
                            {submitting ? "Submitting..." : "Submit"}
                        </Button>
                    </Box>
                </Card>
            </Container>)}

        </>
    )
}

export default Job