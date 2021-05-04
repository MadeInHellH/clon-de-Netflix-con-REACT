import { Button, makeStyles, Typography } from '@material-ui/core';
import logo from "../images/netf-2.png";
import BannerL from "../images/BLogin.jpg";
import { NetflixButton, NetflixInput } from '../styled/styledcomponents';

const Login = () => {
    const classes = useStyles();
    return (
        <div classname={classes.root}>
            <img src={ logo} alt="logo" className={classes.logo}/>
            <NetflixButton className={classes.session}>Iniciar sesion</NetflixButton>
            <div className={classes.info}>
            <Typography variant="h4" gutterBottom>
                        Ulimited films, TV programes and more.
            </Typography>
            <Typography variant="h5" gutterBottom>
                        Wacht anywhere. Cancel at any time.
            </Typography>
            <Typography variant="h6" gutterBottom>
                        Ready to wacht ? Enter your mail to create or restar your 
                        membership.
            </Typography>
            <div className={classes.inputBlock}>
                <NetflixInput placeholder="Email anddress"/>
                <NetflixButton>GET STARTED</NetflixButton>
            </div>

            </div>
        </div>
        
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
     position: "relative",
     height: "100vh",
     backgrounImage: `url('${BannerL}')`,
     objecFit: "contain",
     backgroundSize: "cover",
     backgroundPosition: "center",
     backgrouRepeat: "no-repeat",
     display: "flex",
     justifyContent: "center",
     alignItems: "center",
    },
    logo: {
        position: "fixed",
        top: 0,
        left: 20,
        width: "150px",
        cursor: "pointer",
    },
    session: {
      position: "fixed",
      zIndex: 15,
      right: 20,
      top: 20,
    },
    info: {
        color: "#fff",
        zIndex: 15,
        textAlign: "center",
        "& h4": {
            fontweight: 800,
        },
        "& h5": {
            fontweight: 400,
        },


    }
  }));
  
export default Login
