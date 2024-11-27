import { Grid } from '@mui/material'
import React from 'react'


const GridMui = () => {
  return (
    <>
      <h2>Grid || MUI</h2>

      <Grid item xs={12} container  spacing={2}>
        <Grid  item lg={3} sm={6} m={2} xs={12} style={{backgroundColor:'greenyellow'}}>Block 2</Grid>
        <Grid item lg={3} sm={6} m={2} xs={12}  style={{backgroundColor:'greenyellow'}}>Block 1</Grid>
        <Grid  item lg={3} sm={6} m={2} xs={12} style={{backgroundColor:'greenyellow'}}>Block 3</Grid>
        {/* <Grid  item lg={3} sm={6} m={2} xs={12} style={{backgroundColor:'greenyellow'}}>Block 4</Grid>
        <Grid  item lg={3} sm={6} m={2} xs={12} style={{backgroundColor:'greenyellow'}}>Block 5</Grid>
        <Grid  item lg={3} sm={6} m={2} xs={12} style={{backgroundColor:'greenyellow'}}>Block 6</Grid> */}
      </Grid>
    </>
  )
}

export default GridMui
