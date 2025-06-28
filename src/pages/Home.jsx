import React from 'react';
import styles from './Home.module.scss';
import DrawerAppBar from '../components/AppBar';
import { Box, Typography, Grid, Paper, Button } from '@mui/material';

const dashboardItems = [
  { title: 'My Notes', color: '#F9F871' },
  { title: 'Daily Goals', color: '#A0E7E5' },
  { title: 'Pomodoro Timer', color: '#B4F8C8' },
  // { title: 'Inspiration Board', color: '#FFAEBC' },
];

const Home = () => {
  return (
    <div className={styles.mainContainer}>
      <DrawerAppBar />
      <Box sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
          Welcome Back 👋
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
          What would you like to focus on today?
        </Typography>

        <Grid container spacing={3} mt={2}>
          {dashboardItems.map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Paper
                elevation={4}
                sx={{
                  backgroundColor: item.color,
                  p: 3,
                  borderRadius: 2,
                  textAlign: 'center',
                  height: '100%',
                }}
              >
                <Typography variant="h6" gutterBottom>
                  {item.title}
                </Typography>
                <Button variant="outlined" size="small">
                  Open
                </Button>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default Home;
