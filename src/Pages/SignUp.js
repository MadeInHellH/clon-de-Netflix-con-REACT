import { makeStyles, Typography } from '@material-ui/core';
import React from 'react'
import { NetflixButton, NetflixInput } from '../styled/styledcomponents';
import { useState } from 'react';

const SignUp = () => {
    const classes = useStyles();
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");

    const signIn = () => { }

    const register = () => { 
        e.preventDefault();
    }


    return (
        <div className={classes.root}>
            <Typography variant='h5' align='left'>
             Sign In
            </Typography>
              <form className={classes.form}>
                <NetflixInput value={ email } 
                onChange={(e) =>setEmail(e.target.value)}
                 placeholder="Email" 
                 className={classes.email}/>

                <NetflixInput value={ password } 
                onChange={(e) =>setPassword(e.target.value)}
                placeholder="Password "
                className={classes.password}
                />
                <NetflixButton onClick={ signIn }
                type="submit" 
                wide="medium" 
                radius
                >Sign In
                </NetflixButton>
                <Typography variant='subtitle2'>
                    new to Netflix ? {"  "}
                    <span className={classes.sigmupLink}
                          onClick={ register }
                          >
                        Sign Up now.{" "}
                    </span>

                </Typography>
            </form>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
       maxWidth: "350px",
       width:  "20rem",
       height: "25rem",
       background: "rgba(0,0,0,0.65)",
       display: "flex",
       flexDirection: "column",
       justifyContent: "speace-evenly",
       alignItems: "center",
    },
    form: {
        width: "80%",
    },
    email:{
        marginBottom: theme.spacing(2),
    },
    password: {
        marginBottom: theme.spacing(4),
    },
    sigmupLink: {
        color: "#fff ",
        cursor:"pointer",
        "&:hover": {
            textDecoration: "underline",
        }
    }
  }));

export default SignUp
