import { Grid } from '@mui/material'
import React from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../organisms/Navbar/Navbar'

export default function ProductDetail() {
  const { id } = useParams()

  return (
    <>
    <Navbar />

    <Grid container>
      
    </Grid>
    </>
  )
}
