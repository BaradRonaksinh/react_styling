import React from 'react'
import { Container } from '@mui/material'


const ContainerMui = () => {
  return (
    <div>
      <Container maxWidth="lg" style={{backgroundColor:'skyblue'}} fixed>
      <h3 >Container || MUI</h3>
      </Container>
      <Container maxWidth="lg" style={{backgroundColor:'skyblue'}} >
      <h3 >Container || MUI</h3>
      </Container>
      <Container maxWidth="md" style={{backgroundColor:'skyblue'}}>
      <h3 >Container || MUI</h3>
      </Container>
      <Container maxWidth="sm" style={{backgroundColor:'skyblue'}}>
      <h3 >Container || MUI</h3>
      </Container>
      <Container maxWidth="xs" style={{backgroundColor:'skyblue'}}>
      <h3 >Container || MUI</h3>
      </Container>
    </div>
  )
}

export default ContainerMui
