import React from 'react'
import styles from'./Home.module.scss'
import DrawerAppBar from '../components/AppBar'
import Button from '@mui/material/Button'

const Home = () => {
  return (
    <div className={styles.mainConatiner}>
        <DrawerAppBar/>
        <div className={styles.buttonContainer}>
        <Button variant="contained">View All Jobs</Button>
        <Button variant="contained">Add Jobs</Button>
        </div>
    </div>
  )
}

export default Home
