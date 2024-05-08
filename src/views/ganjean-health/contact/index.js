import { Container, Card, CardContent, Button, TextField, Box, Typography } from '@mui/material'
import React from 'react'
import useFormWrapper from '../../../components/Form/index'
import useApiStore from '../../../api/api';
import useToggle from '../../../hooks/Toggle';

const Contact = () => {
  const api = useApiStore();
  const { toggler: setSubmitting, toggle: submitting } = useToggle();

  const onSubmit = async (data) => {
    try {
      setSubmitting(true);
      await api.contactUs(data);
      setSubmitting(false);
      reset();
    } catch (error) {
      setSubmitting(false);
    }
  };
  const { register, handleSubmit, errors, control, Controller, reset } = useFormWrapper({ onSubmit });
  return (
    <>
      <Container sx={{ marginTop: "10px" }}>
        <Typography variant="body1" paragraph>
          <strong>
            Thank you for reaching out to Ganjean Multiventures. Your inquiries,
            feedback, and collaboration opportunities are important to us. Here
            are the details to get in touch:
          </strong>
        </Typography>
        <Box my={3}>

          <Typography variant="h6">Address:</Typography>
          <Typography>Panun Ganjean Model Town A,</Typography>
          <Typography>Sopore, Baramulla,</Typography>
          <Typography>Jammu and Kashmir, India - 193201</Typography>


          <Typography variant="h6">Email:</Typography>
          <Typography>For general inquiries and business opportunities, please email us at hr@ganjean.com.</Typography>

          <Typography variant="h6">Phone:</Typography>
          <Typography>Feel free to give us a call at +91 8899224432. Our dedicated team is ready to assist you during our business hours.</Typography>

          <Typography variant="h6">Business Hours</Typography>
          <Typography>Monday - Friday: 9:00 AM - 6:00 PM (IST)</Typography>

        </Box>
        <Typography variant="body1" paragraph>
          Connect with Us: Follow us on social media for the latest updates,
          news, and announcements.
        </Typography>
        <Typography variant="body1" paragraph>
          We value face-to-face interactions. If you're in the area, drop by our
          office to meet the team and discuss opportunities. Please note that if
          you have specific inquiries related to Ganjean Health or Ganjean.com,
          kindly mention it in the subject line of your email or during your
          call to help us direct your request to the appropriate department.
        </Typography>
        <Typography variant="body1" paragraph>
          We appreciate your interest in Ganjean Multiventures and look forward
          to connecting with you soon.
        </Typography>
        <Card
          component="form" noValidate onSubmit={handleSubmit}
          id="applyNowCard"
          sx={{ padding: "1%" }} elevation={5}>
          <CardContent>
            <TextField
              label="Name"
              id='name'
              name='name'
              variant='standard'
              sx={{ width: "100%", marginBottom: "20px" }}
              required
              {...register('name', { required: 'Name is required' })}
            />
            <TextField
              label="Email"
              id='email'
              name='email'
              variant='standard'
              sx={{ width: "100%", marginBottom: "20px" }}
              required
              {...register('email', { required: 'Email is required' })}


            />
            <TextField
              label="Phone Number"
              id='phone'
              name='phone'
              variant='standard'
              sx={{ width: "100%", marginBottom: "20px" }}
              required
              {...register('phone', { required: 'Phone Number is required' })}


            />
            <TextField
              label="Message"
              id='message'
              name='message'
              variant='standard'
              multiline
              rows={5}
              sx={{ width: "100%", marginBottom: "20px" }}
              required
              {...register('message', { required: 'Message is required' })}

            />
          </CardContent>
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
      </Container >

    </>
  )
}

export default Contact;