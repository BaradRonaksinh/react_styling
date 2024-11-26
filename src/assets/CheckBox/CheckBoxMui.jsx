import React, { useState } from 'react'
import { Checkbox } from '@mui/material'
// import { FavoriteBorder } from '@mui/icons-material'
// import { Favorite } from '@mui/icons-material'


const CheckBoxMui = () => {
    const [name, setName] = useState([])
    
    const getValue = (e) => {
        let data = name;
        data.push(e.target.value)
        console.warn(data)
    }
  return (
    <>
      <h2>React Mui || CheckBox</h2>
      {/* If You have pass the Value its fine But try to get Then use Event  -->> (e) */}
      <Checkbox color='primary' value='Ronaksinh' onChange={(e) =>{getValue(e)}}></Checkbox>
      <Checkbox color='primary' value='Dakshsinh' onChange={(e) =>{getValue(e)}}></Checkbox>
      <Checkbox color='primary' value='Snehkumar' onChange={(e) =>{getValue(e)}}></Checkbox>

      <h2>Favorite Icon</h2>

      {/* <Checkbox 
      color='primary'
      value='acv'
      onChange={(e) => {getValue(e)}}
      icon={<FavoriteBorder />}
      checkedIcon={<Favorite />}/> */}
    </>
     
  )
}

export default CheckBoxMui
