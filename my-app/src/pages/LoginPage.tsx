import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice';
import { Button, TextField, Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    dispatch(login(username));
    navigate('/main');
  };


  return (
    <Container
      maxWidth={false}
      sx={{
        width: {
          xs: '75%',   // 모바일 환경에서는 가로 길이의 3/4
          sm: '360px'  // 웹 환경에서는 360px 고정
        },
        margin: '0 auto',

      }}
    >
      <h3 style={{ fontSize: "32px", color: 'black' }}>
        테스트테스트
      </h3>
      <Typography variant="h4" gutterBottom>Login</Typography>
      <TextField
        label="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={handleLogin} fullWidth>Login</Button>
    </Container>
  );
};

export default LoginPage;
