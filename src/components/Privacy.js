import React from 'react'
import color from '../color'

function Privacy({handleClose}) {
    const colorApp = color()
  return (
    <div onClick={(e) => {e.stopPropagation(); handleClose()}} className=' absolute right-0 bottom-0 left-0 top-0 w-full h-full'>
        <div style={{backgroundColor:colorApp.blurgrey}} className=' w-full h-full flex justify-center'>
            <div onClick={(e) => e.stopPropagation()}  className=' w-1/3 bg-white my-4'>
            <p className=' text-[21px] font-semibold'>Terms of services</p>
            <div>
              <ol>
                <li>Data Privacy:
                  <ul>
                    <li>Your personal data, such as login credentials and 
           preferences, will be stored securely and used solely to 
           improve your experience with TNoti.</li>
                    <li>We do not sell, share, or trade your information with third 
                    parties without your explicit consent.</li>
                  </ul>
                </li>
                <li>AI Confidentiality:
                  <ul>
                    <li>Our virtual assistant is designed to prioritize your privacy. </li>
                    <li>All interactions with the AI are kept confidential and are not 
                    shared externally.</li>
                  </ul>
                </li>
                <li>Usage Tracking: 
                  <ul>
                    <li>To enhance your experience, we may collect anonymous
           usage data, such as app performance metrics. This data 
           cannot be traced back to individual users</li>
                  </ul>
                </li>
                <li>Secure Access:
                  <ul>
                    <li>Always use a secure password for your account. TNoti 
           employs advanced encryption technologies to protect 
           your information.</li>
                  </ul>
                </li>
              </ol>
              <p>By using TNoti, you agree to these rules and our commitment to 
              your privacy.</p>
            </div>
            <button onClick={(e)=> {e.stopPropagation();handleClose()}} style={{backgroundColor:colorApp.blue}} className=' font-semibold text-[18px] text-white float-right p-2 my-4'>I Understand</button>
            </div>
        </div>
    </div>
  )
}

export default Privacy