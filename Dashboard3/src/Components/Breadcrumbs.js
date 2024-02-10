import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { FaHome } from 'react-icons/fa';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function CustomBreadcrumbs() {
  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/" onClick={handleClick} fontSize={15}>
      <FaHome size={16} style={{marginBottom:'4px'}}/> Home
    </Link>,
    <Typography key="2" color="inherit" fontSize={15}>
      Dashboard
    </Typography>,
  ];

  return (
    <Stack spacing={2}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
        style={{ padding: '2px',}}
        className='d-flex align-items-center m-2 mx-3'
      >
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  );
}
