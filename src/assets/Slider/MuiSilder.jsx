import { Slider } from '@mui/material'
import React from 'react'


const MuiSilder = () => {
    const mark = [
        {
            value:0,
            label:'start'
        },
        {
            value:250,
            label:'warmup'
        },
        {
            value:500,
            label:'middle'
        },
        {
            value:750,
            label:'landing'
        },
        {
            value:1000,
            label:'end'
        },
    ]
    const getValue = (e,val) => { //there is a 2 argument event,value
        console.warn(val)
    }
    return (
        <div style={{height:200 , width: 250, margin: 40 }}>  //In Style we can use 2 curly braces one is js object & is css and  *-*-* css attribute between use is ' , ' \\
            <h2>Mui || Slider</h2>
            <Slider
                color='secondary'
                defaultValue={150}
                max={1000} 
                // step={100}
                valueLabelDisplay='auto'
                // onChange={getValue}
                marks={mark}
                orientation='vertical'/>
        </div>
    )
}

export default MuiSilder
