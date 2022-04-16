import React from 'react';
import './styles.scss'
import { AppBar, Box, Typography } from '@mui/material';
import CustomButton from '@components/CustomButton';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <AppBar position='static'>
      <Box className='header'>
        <Box
          flexGrow={1}
          sx={{ ml: 5, display: { xs: 'none', md: 'flex' } }}>
          <Link to='/'>
            <Typography variant='h6'>
              VILOS
            </Typography>
          </Link>
        </Box>
        <Box flexGrow={1} className='buttonsContainer'>
          <Link to='/'>
            <CustomButton title={'Home'} />
          </Link>
          <Link to='search'>
            <CustomButton title={'Search Movie'} />
          </Link>
        </Box>
      </Box>
    </AppBar>
  )
}

export default Header