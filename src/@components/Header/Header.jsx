import React from 'react';
import AppBar from '@mui/material/AppBar';
import { Box, Typography } from '@mui/material';
import SearchForm from '@components/SearchForm';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <AppBar position='static'>
      <Box
        sx={{
          display: 'flex',
          height: '70px',
          alignItems: 'center',
          backgroundColor: 'darkgrey'
        }}
      >
        <Box
          flexGrow={1}
          sx={{ ml: 5, display: { xs: 'none', md: 'flex' } }}>
          <Link to='/'
          >
            <Typography
              variant="h6"
            >
              VILOS
            </Typography>
          </Link>
        </Box>
        <Box flexGrow={1}>
          <SearchForm />
        </Box>
      </Box>
    </AppBar>
  )
}

export default Header