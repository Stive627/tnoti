import React from 'react'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import color from '../color';

function Plan({type, active, handlePlan}) {
    const colorApp = color()
  return (
    <button onClick={() => handlePlan(type)} className=' p-3 border' style={active? {color:colorApp.blue} : {color:colorApp.grey}}><CheckCircleOutlineIcon className=' border' style={ active ? {color:'white', backgroundColor:colorApp.blue, borderColor:colorApp.blue} : {color:'white' , backgroundColor:'white', borderColor: 'black'}}/> {' '} {type}</button>
  )
}

export default Plan