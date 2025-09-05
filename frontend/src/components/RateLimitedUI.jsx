import React from 'react'
import { ZapIcon } from 'lucide-react'

const RateLimitedUI = () => {
  return (
    <div className='max-w-6xl mx-auto px-4 py-8'>
      <div className='bg-primary/10 border border-primary/30 rounded-lg shadow-md'>
      <div className='flex flex-col md:flex-row items-center p-6'>
        <div className='felx-shrink-0 bg-primary/20 p-4 rounded-fullmb-4 md:mb-0 md:mr-6'>
        <ZapIcon className='size-10 text-primary'/>
        </div>
        <div className='felx-1 text-center md:text-left'>
          <h3 className='text-xl font-bold mb-2'>Rate Limited Reached </h3>
          <p className='text-base-content mb-1'>You've too many requests in the short periods Please wait a moment</p>
          <p className='text-sm text-base-content/70'>Try again in a few second for the best experience</p>
        </div>
      </div>
      </div>

    </div>
  )
}

export default RateLimitedUI
