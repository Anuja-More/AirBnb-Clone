import React from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'
import { useRouter } from 'next/router'
//next 13 use next/navigation for nextRouter
const Logo = props => {
    const router =  useRouter()
  return (
    <Image alt='Logo' className='hidden
     md:block cursor-pointer
    ' 
    height= '100'
    width='100'
    src="/images/logo.png"
     ></Image>
  )
}

Logo.propTypes = {}

export default Logo