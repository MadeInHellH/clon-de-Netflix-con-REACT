import { AppBar, makeStyles, Toolbar } from '@material-ui/core';
import React from 'react';
import logo from "../images/netf-2.png";

const Header = () => {
    const classes = useStyles();
    return (
        <AppBar position="sticky">
            <Toolbar>
                <img src={ logo} alt="logo" className={classes.logo}/>
            </Toolbar>
        </AppBar>
    )
}

const useStyles = makeStyles((theme) => ({
    logo: {
      width: "100px",
      cursor: "pointer",
    },
  }));
export default Header
