import { ClassNames } from '@emotion/react'
import { makeStyles } from '@material-ui/core'
import React from 'react'
import Banner from '../components/Banner/Banner'
import CoinsTable from '../components/CoinsTable'



const Homepage = () => {
  return (
    <>
      <Banner />
      <CoinsTable />
    </>
  )
}

export default Homepage

