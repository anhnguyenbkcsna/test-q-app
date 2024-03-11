import React from "react";
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import './style.css';

// Arrow function
const Header = () => {

  return (
    <header>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <Button variant="contained" >Default</Button>
    </header>
  );
};

export default Header;