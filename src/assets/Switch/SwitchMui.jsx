import React from 'react'
import { Switch } from '@mui/material'

const SwitchMui = () => {
    const getValue = (e,val) => {
        console.warn(val)
    }
  return (
    <div>
      <h2>MUI || Switch </h2>

      <div>
        <Switch 
        color='warning'
        size='small'
        onChange={getValue}/>
      </div>
    </div>
  )
}

export default SwitchMui
