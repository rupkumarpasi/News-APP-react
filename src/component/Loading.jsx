import React from 'react'
import loading from '../assets/Ajax-loader.gif'

export default function Loading() {

  return (
<>
<div className='text-center'>
    <img src={loading} alt="Loading" />
</div>
</>
  )
}
