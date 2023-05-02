import React from 'react'
import Modals from './modals/modals'
import Navbar from './Navbar/Navbar'
export const Layout = ({children}) => {
  return (
   <>
 {/* <Modals actionLabel="Submit" title="Login" isOpen="false"/> */}
   <Navbar/>
   <main>{children}</main>
   </>
  )
}
