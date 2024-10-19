import React from 'react'
import { Link } from 'react-router-dom'

export default function TopBar() {
  return (
    <div className='d-flex container top-bar'>
    <h1>store</h1>
    <Link to='/' className="register-nav">Go to the website</Link>

      
    </div>
  )
}
