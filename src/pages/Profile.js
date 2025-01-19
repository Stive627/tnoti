import React, { useState } from 'react'
import NextConnexion from '../components/NextConnexion'
import color from '../color'
import TextInput from '../components/TextInput'
import BirthFinal from '../components/BirthFinal'
import Birth from '../components/Birth'
import Plan from '../components/Plan'

function Profile({username}) {
    const colorApp = color()
    const [usernameProfile, setUsernameProfile] =useState(username)
    const [day, setDay] = useState('01')
    const [month, setMonth] = useState('January')
    const [year, setYear] = useState('')
    const months = ['January', 'February', 'March', 'April' ,'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const days = ['01', '02', '03', '04' ,'05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31']
    const [plan, setPlan] = useState('')
    const disabled = year && plan

  return (
   <NextConnexion>
    <div className=' border p-4 my-2' style={{borderColor:colorApp.blurborder}}>
      <p className=' text-[21px] mb-2'>Username</p>
      <TextInput value={usernameProfile} placeholder={'Username'} handleChange={(value) => setUsernameProfile(value)}/>
      <p className=' text-[21px] my-2'>Date of Birth</p>
      <div className=' flex justify-center'>
        <div className=' flex justify-between flex-row'>
          <BirthFinal value={day}  list={days} handleValue={(value)=>setDay(value)}/>
          <BirthFinal value={month} list={months} handleValue={(value)=>setMonth(value)}/>
          <Birth maxLength={4} title={'Year'} placeholder={'0000'} handleValue={(value)=>setYear(value)} value={year} />
        </div>
      </div>
      <p className=' text-[21px] '>How do you plan to use TNoti?</p>
      <div className=' flex justify-center gap-3'>
        <Plan type={'Personal'} active={plan === 'Personal'} handlePlan={(value)=> setPlan(value)}/>
        <Plan type={'Work'} active={plan === 'Work'} handlePlan={(value)=> setPlan(value)}/>
      </div>
      <div className=' flex justify-center'><button disabled={disabled} className=' px-3 py-2 text-lg' style={{backgroundColor:colorApp.blue, color:'white'}}>Save Profile</button></div>
    </div>
   </NextConnexion>
  )
}

export default Profile