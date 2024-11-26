import { Select ,MenuItem} from '@mui/material'
import React from 'react'

const SelectMui = () => {
    const [course, setCourse] = React.useState("")
    const updateSelValue = (e,val) => {
        console.warn(e.target.value)
        setCourse(e.target.value)
    }
  return (
    <div>
      <h2>Select - Box || MUI</h2>

      <div>
        <Select 
        value={course} 
        displayEmpty
        onChange={updateSelValue}>
            <MenuItem value="">Select Course</MenuItem>
            <MenuItem value={1}>NodeJS</MenuItem>
            <MenuItem value={2}>PHP</MenuItem>
            <MenuItem value={3}>JAVA</MenuItem>
            <MenuItem value={4}>Javascript</MenuItem>
        </Select>
      </div>
    </div>
  )
}

export default SelectMui
