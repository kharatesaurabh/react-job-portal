import React from 'react'
import DrawerAppBar from '../components/AppBar'
import Button from '@mui/material/Button'

const Home = () => {
  const styles = {
    mainContainer: {
      padding: '2rem',
      backgroundColor: '#f8f8f8',
      minHeight: '100vh',
      fontFamily: "'Segoe UI', sans-serif",
    },
    weddingTitle: {
      fontFamily: "'Segoe Script', cursive",
      fontSize: '3rem',
      textAlign: 'center',
      margin: '2rem 0',
      color: '#ff4081',
      background: 'linear-gradient(90deg, #ff8a00, #e52e71)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      animation: 'fadeInUp 1s ease-out',
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'center',
      gap: '1rem',
      marginTop: '2rem',
    }
  }

  return (
    <div style={styles.mainContainer}>
      <DrawerAppBar />

      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>

      <h1 style={styles.weddingTitle}>Sarfaraz ❤️ weds Fatima</h1>

      <div style={styles.buttonContainer}>
        <Button variant="contained">View All Jobs</Button>
        <Button variant="contained">Add Jobs</Button>
      </div>
    </div>
  )
}

export default Home
