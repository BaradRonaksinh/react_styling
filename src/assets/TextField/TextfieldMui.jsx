import React from 'react'
import { TextField } from '@mui/material'

const TextfieldMui = () => {
    const getData = (e) => {
        console.warn(e.target.value)
    }
  return (
    <div>
      <h2>Textfield || MUI</h2>
      <div>
        <TextField 
        label="Enter Name"
        color='primary'
        variant='outlined'
        type='text'
        onChange={getData}/>
      </div>
    </div>
  )
}

export default TextfieldMui
