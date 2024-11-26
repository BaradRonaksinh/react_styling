import { Slider } from '@mui/material'
import React, { useState } from 'react'

const SliderUi = () => {
  const [val,setVal] = useState([40,50])
  const updateValue = (e,item) => {
    setVal(item)
  }
  return (
    <div>
      <div>
        <h2>MUI || Slider with Functoing</h2>
      </div>
      <div>
        <Slider 
        value={val}
        onChange={updateValue}/>
      </div>
    </div>
  )
}

export default SliderUi
