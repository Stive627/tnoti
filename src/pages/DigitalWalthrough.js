import React, { useState } from 'react'
import color from '../color'
import { useNavigate } from 'react-router-dom'

function DigitalWalthrough() {
    const colorApp = color()
    const navigate = useNavigate()
    const [indx, setIndx] = useState(0)
    const nextIndx = () => setIndx(indx + 1)
    const backIndx = () => setIndx(indx <= 1 ? indx : indx -1)
  return (
    <div className=' absolute w-full h-full' style={{backgroundColor:'rgba(217, 217, 217, 1)'}}>
        <div className=' w-full h-full flex justify-center items-center '>
        {indx === 0 && <div className=' border p-4 w-1/3 ' style={{borderColor:colorApp.blurborder}}>
                            <h2 className=' text-center'>Would you like a digital walkthrough?</h2>
                            <div className=' flex flex-row justify-between gap-3'>
                                <button onClick={() => navigate('/home')} className=' border p-3' style={{borderColor:colorApp.blurborder}}>I'm good</button>
                                <button className=' border p-3' style={{borderColor:colorApp.blurborder, backgroundColor:colorApp.blue, color:'white'}}>Yes</button>
                            </div>
                       </div>
        }
        
        </div>
    </div>
  )
}

export default DigitalWalthrough