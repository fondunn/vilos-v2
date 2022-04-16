import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import './main.style.scss'

import Header from '@components/Header/Header'

import HomePage from '@pages/HomePage/HomePage'
import WrongPage from '@pages/WrongPage'
import DetailPage from '@pages/DetailPage/DetailPage'
// import SearchPage from '@pages/SearchPage/SearchPage'

const SearchPage = React.lazy(() => import('@pages/SearchPage/SearchPage'))

import { Box } from '@mui/material'

function App() {
  return (
    <Box className='rootDiv'>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />

        <Route path='/detail/:filmID' element={
          <Suspense fallback={<div>Loading...</div>}>
            <DetailPage />
          </Suspense>
        } />

        <Route path='/search' element={
          <Suspense fallback={<div>Loading...</div>}>
            <SearchPage />
          </Suspense>
        } />

        <Route path='*' element={
          <Suspense fallback={<div>Loading...</div>}>
            <WrongPage />
          </Suspense>
        }


        />

      </Routes>
    </Box>
  )
}

export default App