import React from 'react'
import { Link } from 'react-router-dom'

export default function Page() {
  return (
    <div>
        <h3>Welcome to the practice page</h3>
        <p>Click <Link className='link' to="/">Here</Link> to back home</p>
    </div>
  )
}
