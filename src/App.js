import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { makeStyles } from "@material-ui/core"
import Login from './Pages/Login';
import Profile from './Pages/Profile';
import Paypal from './Pages/Paypal';
import Home from './Pages/Home';
import { useDispatch , useSelector } from "react-redux";
import { auth } from './firebase';
import { login, logout, selectUser } from './features/UserSlice';




function App() {
  const user = useSelector(selectUser);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
   const unsubcribe = auth.onAuthStateChanged((userAuth) => {
     if (userAuth) {
       dispatch(login({
         uid: userAuth.uid,
         email: userAuth.email
       }))
     } else {
       dispatch(logout)
     }
   })
   return unsubcribe;
 }, [dispatch])


  return (
    <div className={classes.root}>
      
     <Router>
           <Switch>
             <Route path='/login'>
               <Profile />
             </Route>
             <Route path='/profile'>
               <Profile />
             </Route>
             <Route path='/checkout'>
               <Paypal />
             </Route>
             <Route path='/'>
               <Home />
             </Route>
           </Switch>
      </Router> 
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
   
     
     minHeight: "100vh",
    backgroundColor: "#111"
  },
}));

export default App;
 