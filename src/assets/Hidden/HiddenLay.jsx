import React from 'react'
import { Grid , Hidden} from '@mui/material'


const HiddenLay = () => {
  return (
    <>
    {/* <h2>Hiiden Layout || MUI</h2> */}
    <Grid container spacing={2} xs={12} item>
        <Grid item lg={3} sm={6} xs={12}><h1 style={{backgroundColor:'yellowgreen'}}>Block</h1></Grid>
        <Grid item lg={3} sm={6} xs={12}><h1 style={{backgroundColor:'yellowgreen'}}>Block</h1></Grid>
        <Hidden  only={['sm','lg']}><h1 style={{backgroundColor:'yellowgreen',flex:1}} >Block</h1></Hidden>
        <Grid item lg={3} sm={6} xs={12}><h1 style={{backgroundColor:'yellowgreen'}}>Block</h1></Grid>
    </Grid>
      
    </>
  )
}

export default HiddenLay
