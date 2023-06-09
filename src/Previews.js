import React, { Component } from 'react'
import ygt from '../src/assets/images/ygt.JPG'
import { Avatar, Container } from '@mui/material'


const Previews = () => {
    return (
     <Container maxWidth="sm">
      <Avatar alt="Remy Sharp" src={ygt} sx={{width:"169px", height:"153px"}}/>
        

     </Container>
    )
  }
  
export default Previews