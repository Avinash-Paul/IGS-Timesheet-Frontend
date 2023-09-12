import React, { useState } from 'react';
import {
  Grid,
  Paper,
  Typography,
  IconButton,
  CssBaseline,
  TextField,
  Button,
  createTheme,
  ThemeProvider,
} from '@mui/material'; // Updated import paths
import { styled } from '@mui/system';
import EditIcon from '@mui/icons-material/Edit';
import WithSidebar from '../../WithSidebar';

// Define your theme with the desired color
const theme = createTheme({
  palette: {
    primary: {
      main: '#2085b5', // Your theme color
    },
  },
});

const mapInformation = {
  firstName: 'First Name',
  lastName: 'Last Name',
  email: 'Email',
  phone: 'Phone',
  employeeId: 'Employee ID',
  designation: 'Designation',
};

const user = {
  firstName: 'First Name',
  lastName: 'Last Name',
  email: 'email@gmail.com',
  phone: '123456789',
  employeeId: '123',
  designation: 'Some Position',
};

const UserInfoFormItem = (formState, onChange, propt, index) => {
  // Define your component styles using `styled` from MUI
  const FormPaper = styled(Paper)(({ theme }) => ({
    backgroundColor: 'white',
    color: theme.palette.primary.main,
    padding: '1em',
    width: '60%',
    [theme.breakpoints.down(1200)]: {
      width: '70%',
    },
    [theme.breakpoints.down(1000)]: {
      width: '80%',
    },
    [theme.breakpoints.down(900)]: {
      width: '90%',
    },
    [theme.breakpoints.down(800)]: {
      width: '100%',
    },
  }));

  return (
    <WithSidebar>
    <Grid
      item
      xs={6}
      key={`display-${index}`}
      container
      direction="column"
      alignItems="center"
    >
      <FormPaper>
        <Grid item xs={12}>
          <Typography variant="subtitle1">{mapInformation[propt]}</Typography>
        </Grid>
        <Grid item xs={12} align="center">
          <TextField
            defaultValue={formState[propt]}
            name={Object.keys(user)[index]}
            onChange={onChange}
          />
        </Grid>
      </FormPaper>
    </Grid>
    </WithSidebar>
  );
};

const UserInfoGridItem = (formState, propt, index) => {
  // Define your component styles using `styled` from MUI
  const GridPaper = styled(Paper)(({ theme }) => ({
    backgroundColor: '#2085b5',
    color: 'white',
    padding: '1em',
    width: '60%',
    [theme.breakpoints.down(1200)]: {
      width: '70%',
    },
    [theme.breakpoints.down(1000)]: {
      width: '80%',
    },
    [theme.breakpoints.down(900)]: {
      width: '90%',
    },
    [theme.breakpoints.down(800)]: {
      width: '100%',
    },
  }));

  return (
    <Grid
      item
      xs={6}
      key={`display-${index}`}
      container
      direction="column"
      alignItems="center"
    >
      <GridPaper>
        <Grid item xs={12}>
          <Typography variant="subtitle1">{mapInformation[propt]}</Typography>
        </Grid>
        <Grid item xs={12} align="center">
          <Typography variant="h6">{formState[propt]}</Typography>
        </Grid>
      </GridPaper>
    </Grid>
    
  );
};

export default function Profile() {
  const [isForm, setIsForm] = useState(false);
  const [formInput, setFormInput] = useState(user);

  const handleEdit = () => setIsForm(true);

  const handleChange = (e) => {
    const value = e.target.value;
    setFormInput((prev) => ({
      ...prev,
      [e.target.name]: value,
    }));
  };

  const handleSubmit = () => {
    setFormInput(formInput);
    setIsForm(false);
  };

  const toggleRender = () => {
    if (isForm) {
      return Object.keys(user).map((key, index) =>
        UserInfoFormItem(formInput, handleChange, key, index)
      );
    }

    return Object.keys(user).map((key, index) =>
      UserInfoGridItem(formInput, key, index)
    );
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Grid container spacing={2}>
          <Grid item xs={12} container spacing={2}>
            <Grid item sm={6} md={4} align="right">
              <Paper
                style={{ border: '2px solid', height: '200px', width: '200px' }}
              >
                Profile Picture
              </Paper>
            </Grid>
            <Grid item sm={6} md={8} alignt="left" container>
              <Grid item xs={12} container alignItems="flex-end">
                <Typography variant="h4">{`${user.firstName}`}</Typography>
                <IconButton
                  style={{ backgroundColor: '#594f8d', marginLeft: '1rem' }}
                  onClick={handleEdit}
                >
                  <EditIcon style={{ color: 'white' }} />
                </IconButton>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h4">{`${user.lastName}`}</Typography>
              </Grid>
            </Grid>
          </Grid>
          {toggleRender()}
          <Grid item xs={12} align="center">
            {!isForm ? (
              <div></div>
            ) : (
              <Button
                style={{ color: 'white', backgroundColor: '#594f8d' }}
                onClick={handleSubmit}
              >
                SAVE
              </Button>
            )}
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
    
  );
}

