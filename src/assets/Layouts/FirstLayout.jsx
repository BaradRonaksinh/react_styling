import React from 'react'
import { Box, Button } from '@mui/material'


const FirstLayout = () => {
    return (
        <div>
            <h2>reacr layout || MUI</h2>
            <Box component="span" style={{color:'yellow',backgroundColor:'balck'}} m={50} >
                <Button component="span" style={{color:'yellow', backgroundColor:'balck'}} clone m={50} >Click</Button>
            </Box>
        </div>

    )
}

export default FirstLayout
