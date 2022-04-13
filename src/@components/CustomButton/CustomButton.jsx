import React from 'react'

import { Box, Button } from '@mui/material'

export const CustomButton = ({
  title = 'Search',
  onClick = (() => { }),
  size = 'small'
}) => {
  return (
    <Box>
      <Button
        variant="contained"
        onClick={onClick}
        size={size}
      >
        {title}
      </Button>
    </Box>
  )
}