import React from 'react';
import styles from './Home.module.scss';
import DrawerAppBar from '../components/AppBar';
import Button from '@mui/material/Button';
import { Box, Typography } from '@mui/material';

const Home = () => {
  return (
    <div className={styles.mainContainer}>
      <DrawerAppBar />
      <Box className={styles.contentWrapper}>
        <Typography variant="h4" className={styles.title}>
          Welcome to Job Portal
        </Typography>
        <Box className={styles.buttonGroup}>
          <Button variant="contained" color="primary" size="large">
            View All Jobs
          </Button>
          <Button variant="outlined" color="secondary" size="large">
            Add New Job
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default Home;
