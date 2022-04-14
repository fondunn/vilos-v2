import React from 'react'

import { Box, Button } from '@mui/material'

export const CustomButton = ({
  title = 'Search',
  onClick = (() => { }),
  size = 'small',
  style = ''
}) => {
  return (
    <Box>
      <Button
        variant="contained"
        onClick={onClick}
        size={size}
        type='submit'
        classlist={style}
        sx={{
          backgroundColor: style
        }}
      >
        {title}
      </Button>
    </Box>
  )
}