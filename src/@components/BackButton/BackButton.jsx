import React from 'react'
import CustomButton from '@components/CustomButton'
import './styles.scss'
import { useNavigate } from 'react-router-dom'
const BackButton = () => {
  const navigate = useNavigate()
  const backToPrevPage = () => {
    navigate(-1)
  }
  return (
    <div className='backButton'>
      <CustomButton title={'<- Back'} onClick={() => backToPrevPage()} />
    </div>
  )
}
export default BackButton