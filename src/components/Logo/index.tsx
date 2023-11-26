import React from 'react'
import './logo.css'
import Link from 'next/link'

const logo: React.FC = () => {
  return (
    <div className='register-title'>
        <h1><Link href="/">NEXT BUS</Link></h1>
    </div>
  )
}

export default logo