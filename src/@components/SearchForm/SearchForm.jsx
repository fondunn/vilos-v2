import React, { useState } from 'react'
import { TextField } from '@mui/material'
import { Box } from '@mui/system'

import CustomButton from '@components/CustomButton'

export const SearchForm = () => {
  const onFormSubmit = e => {
    e.preventDefault()
    console.log('form sub and form >', e.target[0].value)
  }
  const [formValue, setFormValue] = useState('')

  const changeFormState = (e) => {
    setFormValue(e.target.value)
  }

  return (
    <Box
      component='form'
      onSubmit={onFormSubmit}
      sx={{
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <div>
        <TextField
          onChange={changeFormState}
          id="outlined-search"
          label="Search movie"
          type="search"
          size="small"
        />
      </div>
      <CustomButton title='жмакай' onClick={() => { }} />
    </Box>
  )
}