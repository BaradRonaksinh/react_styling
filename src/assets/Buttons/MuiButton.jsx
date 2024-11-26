import React from 'react'
import { Button, ButtonGroup } from '@mui/material'

const MuiButton = () => {
    return (
        <div>
            <h3>Button</h3>
            <Button
                color='primary'
                variant='outlined'>Click Me</Button>

            <h3>Button Group</h3>

            <ButtonGroup
                color='warning' variant='contained'>
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
            </ButtonGroup>
        </div>
    )
}

export default MuiButton
