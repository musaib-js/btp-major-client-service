import React from 'react'
import { useBaseQuery } from '../../../api/BaseRequest'
import { Container, Box } from '@mui/material'
import HtmlToTextConverter from '../../../hooks/HtmlToTextConverter'
import Spinner from '../../../components/CustomLoader'

export default function Index() {
  const { data, isLoading, isError } = useBaseQuery('/home/pricing', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (isLoading) {
    // Loading state
    return <Spinner />;
  }

  if (isError) {
    // Error state
    return <p>Error fetching data</p>;
  }
  return (
    <Container sx={{ mt: "30px" }}>
      <Box >
        <HtmlToTextConverter html={data.pricing} />
      </Box >
    </Container>
  )
}
