import React from 'react'
import Header from '../ProfileView/Header'
import AvatarDisplay from './AvatarDisplay'
import StatusDisplay from './StatusDisplay'

const ProfileView = () => {
  return (
    <>
      <Header />
      <AvatarDisplay />
      <StatusDisplay />
    </>
  )
}

export default ProfileView