import React from 'react'
import "./appStyles.module.css"
import "./appstyles.css"

export const AppStyles = () => {
  return (
    <div>
        <h1 className='success'> Success msgs</h1>
        <h1 className='error'> error msgs</h1>
    </div>
  )
}


export default AppStyles