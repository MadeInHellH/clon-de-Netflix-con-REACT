import { Button, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import HeroBanner from '../images/Banner2020.jpeg';

const Banner = () => {
    const classes = useStyles();

    const truncate = (string, n) => string?.length > n ? `${string.substr(0, n-1)}...` : string;

    return (
        <div className={classes.root}>
              <div className={classes.content}>
                  <Typography variant="h2" component="h1">
                      Movie Title
                  </Typography>
                 <div className={classes.buttons}>
                  <Button>Play</Button>
                  <Button>My List</Button>
                  </div>
                   <Typography style={{ wordWrap: "break-word" }} variant= "h6" classname={classes.description}>
                       {
                           truncate("Movie description Movie descriptionMovie descriptionMovie descriptionMovie descriptionMovie descriptionMovie descriptionMovie descriptionMovie descriptionMovie descriptionMovie descriptionMovie descriptionMovie descriptionMovie descriptionMovie descriptionovie description Movie descriptionMovie descriptionMovie descriptionMovie descriptionMovie descriptionMovie descriptionMovie descriptionMovie descriptionMovie descriptionMovie descriptionMovie descriptionMovie descriptionMovie descriptionMovie description, 160")
                       }
                   </Typography>
                   <div className={classes.fadeBottom} />
              </div>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
     backgroundImage: `url(${HeroBanner})`,
     position: "relative",
     height: "440px",
     objecFit: "contain",
     backgroundSize: "cover",
     backgroundPosition: "center",
     color: "#fff",
    },
    buttons: {
        "& button": {
            cursor: "pointer",
            color: "#fff",
            fontweight: 700,
            borderRadius: "5px",
            padding: theme.spacing(1, 4, 1, 4),
            marginRight: "1rem",
            backgroundColor: "rgba(51,51,51,0.5)",
        },
        "& button:hover": {
            color: "#000",
            backgroundColor: "#e6e6e6",
        },
    },
    fadeBottom: {
        position: "absolute",
        top: "30vh",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 99,
        backgroundImage: 
        "linear-gradient(180deg, transparent, rgba(37,37,37,0.61), #111)",
    }
  }));

export default Banner
