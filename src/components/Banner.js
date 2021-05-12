import { AccordionSummary, Button, makeStyles, Typography } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import HeroBanner from '../images/Banner2020.jpeg';
import requests from "../Requests";

const Banner = () => {
    const classes = useStyles();
    const [ movie, setMovie] = useState([]);

    const truncate = (string, n) => string?.length > n ? `${string.substr(0, n-1)}...` : string;

    useEffect(() => { 
         const fetchData = async () => {
             const request = await axios.get(requests.fetchNetflixOriginals)
             //tenemos un  array de peliculas en request.data
             //generamos un numero ramdon entre  0 y la longitud  del array, para  obtener un indice aleatorio
             const random = Math.floor(Math.random()* request.data.results.length -1)
             //mostraremos en pantalla request.data.results[random]
             setMovie(request.data.results[random]);
             return request;
         }
         fetchData();
         //probar lo que dice en el tiempo del video "5:38:28"  console.log(move) (overview para la descripcion)
    }, []);

    console.log(movie);

    return (
        <div className={classes.root} style={{
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            position: "relative",
            height: "440px",
            objecFit: "contain",
            backgroundSize: "cover",
            backgroundPosition: "center",
            color: "#fff",
        }}>
              <div className={classes.content}>
                  <Typography variant="h2" component="h1">
                      {movie?.title || movie?.name || movie?.original_name}
                  </Typography>
                 <div className={classes.buttons}>
                  <Button>Play</Button>
                  <Button>My List</Button>
                  </div>
                   <Typography style={{ wordWrap: "break-word" }} variant= "h6" classname={classes.description}>
                       {
                           truncate(movie?.overview, 160)
                       }
                   </Typography>
                   <div className={classes.fadeBottom} />
              </div>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
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
