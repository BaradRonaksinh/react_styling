import React, { useState } from 'react'
import { Radio } from '@mui/material'

const RadioMui = () => {
    const [gender, setGender] = useState("female")
    const testGender = (e) => {
        console.warn(e.target.value)
        setGender(e.target.value)
    }
  return (
    <>
      <h1>React Mui ||  Radio Button</h1>

      <span>Male</span>
      <Radio 
      value='male'
      color='warning'
      onChange={testGender}
      checked={gender==="male"}
      />
      <span>Female</span>
      <Radio 
      value='female'
      color='primary'
      onChange={testGender}
      checked={gender==="female"}
      />
    </>
  )
}

export default RadioMui
