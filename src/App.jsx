import React, { useState } from 'react';
import LocalClock from './components/Local-Clock/index';
import ClockList from './components/Clock-List';
import { generate } from 'shortid';

import { 
  Container, 
  AppBar, 
  Toolbar, 
  Typography, 
  Box,
  CssBaseline,
  Paper,
  Stack,
} from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const App = () => {
  const int = {
    id: '',
    title: 'I am Local Clock',
    timezone: '',
    offset: 0,
    date: null,
  };

  const [LocalClockValue, setLocalClockValue] = useState({ ...int });
  const [ClockListValue, setClockListValue] = useState([]);

  const upadateClock = (data) => {
    setLocalClockValue({
      ...LocalClockValue,
      ...data,
    });
  };

  const CreateClock = (data) => {
    data.id = generate();
    setClockListValue((prev) => [...prev, data]);
  };

  const deleteItem = (id) => {
    let newArr = ClockListValue.filter((item) => item.id !== id);
    setClockListValue(newArr);
  };

  const UpdateLocal = (updatedClock) => {
    const updatedArr = ClockListValue.map((clock) => {
      if (updatedClock.id === clock.id) {
        return updatedClock;
      }
      return clock;
    });
    setClockListValue(updatedArr);
  };

  return (
    <>
      <CssBaseline />
      {/* Navbar */}
      <AppBar position="static" color="primary" enableColorOnDark>
        <Toolbar>
          <AccessTimeIcon sx={{ mr: 1 }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            TrackZone
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
        <Stack spacing={4}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>
              My Clock
            </Typography>
            <LocalClock
              clock={LocalClockValue}
              local={true}
              updateFunc={upadateClock}
              CreateClock={CreateClock}
            />
          </Paper>

          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>
              Other Clocks
            </Typography>
            <ClockList
              arrofClockValue={ClockListValue}
              upadateClock={UpdateLocal}
              deleteItem={deleteItem}
              LocalClock={LocalClockValue.date}
            />
          </Paper>
        </Stack>
      </Container>

      {/* Footer */}
      <Box
        component="footer"
        sx={{
          py: 2,
          px: 2,
          mt: 'auto',
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
          textAlign: 'center',
        }}
      >
        <Typography variant="body2" color="text.secondary">
          &copy; 2025 TrackZone by Md Zihad Mia
        </Typography>
      </Box>
    </>
  );
};

export default App;
