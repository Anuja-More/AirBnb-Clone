import ToasterProvider from '@/providers/toasterProvider'
import React from 'react'
import RegisterModal from './modals/RegisterModal'
import Navbar from './Navbar/Navbar'
export const Layout = ({children}) => {
  return (
   <>
   <ToasterProvider/>
   <RegisterModal/>
   <Navbar/>
   <main>{children}</main>
   </>
  )
}
