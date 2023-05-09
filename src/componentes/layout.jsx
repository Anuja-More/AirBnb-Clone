import ToasterProvider from '../providers/ToasterProvider';
import React from 'react'
import RegisterModal from './modals/RegisterModal'
import Navbar from './Navbar/Navbar'
import LoginModal from './modals/LoginModal';
import RentModal from './modals/rentmodal';
import ClientOnly from './ClientOnly';
export const Layout = ({children}) => {
  return (
   <>
      <ToasterProvider />
      <LoginModal />
      <RentModal />
      <RegisterModal />
      <Navbar />
      <ClientOnly />
    <div className="pb-20 pt-28">
        {children}
      </div>
   </>
  )
}
