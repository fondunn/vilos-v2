import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './main.style.scss'

import Header from '@components/Header/Header'

import HomePage from '@pages/HomePage/HomePage'
import WrongPage from '@pages/WrongPage'
import DetailPage from '@pages/DetailPage/DetailPage'

import { Box } from '@mui/material'

function App() {
  return (
    <Box sx={{
      minHeight: '100vh',
      backgroundColor: 'gray',
      maxWidth: '1000px',
      width: '1000px',
    }}>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/detail/:filmID' element={<DetailPage />} />
        <Route path='*' element={<WrongPage />} />
      </Routes>
    </Box>
  )
}

export default App