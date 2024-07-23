import React from 'react';
import { Container, AppBar, Toolbar, Typography, CssBaseline } from '@mui/material';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component={Link} to="/" style={{ color: 'inherit', textDecoration: 'none', flexGrow: 1 }}>
            Event Platform
          </Typography>
          <Typography variant="button" component={Link} to="/" style={{ color: 'inherit', textDecoration: 'none', marginRight: '20px' }}>
            Home
          </Typography>
          <Typography variant="button" component={Link} to="/events" style={{ color: 'inherit', textDecoration: 'none' }}>
            Events
          </Typography>
        </Toolbar>
      </AppBar>
      <Container style={{ marginTop: '20px' }}>
        {children}
      </Container>
    </div>
  );
};

export default Layout;
