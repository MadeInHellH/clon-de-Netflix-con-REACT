import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { NetflixButton } from '../styled/styledcomponents';
import { useHistory } from 'react-router';
import { setPrice } from '../features/PriceSlice';
import { useDispatch } from 'react-redux';


const Plans = ({cost, children, color, wide}) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const handleClick = (cost) => {
         dispatch(setPrice(cost))
         history.push("/checkout" )
    }

    return (
        <div className={classes.root}>
        <Typography className={classes.standart} variant="h5">
            {children}
        </Typography>
        <NetflixButton 
            color={color} 
            wide={wide} 
            onClick={ ()=> handleClick(cost)}
            >
                Subscribe
                </NetflixButton>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "& button": {
        marginBottom: theme.spacing(2)
       },
    },
    standard: {
        fontSize: "1.2rem",
    },
  }));
export default Plans
