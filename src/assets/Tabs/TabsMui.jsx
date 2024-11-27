import React from 'react'
import { Tab, Tabs, AppBar } from '@mui/material'

const TabsMui = () => {
    const handleChange = (e, val) => {
        console.warn(val)
        setValue(val);
    }
    const [value, setValue] = React.useState(0)
    return (
        <>
            <div>React Tabs || MUI</div>
            <AppBar position='static' >
                <Tabs value={value} onChange={handleChange}>
                    <Tab label='Item 1' />
                    <Tab label='Item 2' />
                    <Tab label='Item 3' />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>Item One Details</TabPanel>
            <TabPanel value={value} index={1}>Item Two Details</TabPanel>
            <TabPanel value={value} index={2}>Item Three Details</TabPanel>
        </>
    )
}

const TabPanel = (props) => {
    const {children,index,value} = props
    return(
        <div>
            <h1>
                {
                    value === index && (<h1>{children}</h1>)
                }
            </h1>
        </div>
    )
}

export default TabsMui
