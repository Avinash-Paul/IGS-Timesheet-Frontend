import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ExtensionIcon from '@mui/icons-material/Extension';
import Styles from './MenuAppBar.module.css';
import { useNavigate } from 'react-router-dom'; 


const MenuAppBar = ({ title }) => {
  const [auth, setAuth] = React.useState(true);
  const navigate = useNavigate(); 


  const handleMenu = () => {
    navigate('/Table');
  };

 

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className={Styles.appBar}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <ExtensionIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {title}
          </Typography>
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="add table"
                onClick={handleMenu} // Directly trigger navigation
                color="inherit"
              >
                <AddCircleOutlineIcon />
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
          }  

export default MenuAppBar;
