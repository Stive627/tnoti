import React from 'react'
import CheckIcon from '@mui/icons-material/Check';

function Elt({value, check, handleValue}) {
  return (
    <button onClick={()=> handleValue(value)} className=' p-2 w-full text-center  hover:bg-gray-400'><div className=' flex justify-center gap-1'><p>{check ? <CheckIcon/> : <span className=' text-transparent'>moi </span>}</p> <p>{value}</p></div></button>
  )
}

export default Elt