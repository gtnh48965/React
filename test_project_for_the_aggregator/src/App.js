import React from 'react';
import Button from '@material-ui/core/Button';
import {AppBar, Container, IconButton, Toolbar,Card, 
  CardMedia, Box, Typography, Paper, Grid, CardContent,
   CardActions,
   DialogTitle,
   DialogContent,
   DialogContentText,
   } from '@material-ui/core/';
   
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

import MenuIcon from '@material-ui/icons/Menu';
import LayersIcon from '@material-ui/icons/Layers';
import PlayCircleFilldeIcon  from '@material-ui/icons/PlayCircleFilled';
import { makeStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import logo from '../src/logo.svg'
import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';


const useStyles = makeStyles((theme) => ({


  root:{
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(1)
  },
  title:{
    flexGrow:1
  },
  mainFeaturesPort: {
    position: "relative",
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),

    backgroundSize: "cover",
    backgroundRepeat:"no-repeat",
    backgroundPosition:"center"
  },
  overplay:{
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundOverpley: "rgba(0,0,0,.3)",

  },
  
  mainFeaturesPortContent: {
    position: "relative",
    // color: theme.palette.common.white,
    marginBottom: theme.spacing(6),
    marginTop:theme.spacing(8)

  },
  cardMedia:{
    paddingTop: "56.25%"
  },
  CardContent:{
    flexGrow: 1
  },
  cardGrid:{
    marginTop: theme.spacing(4)
  }

}))




const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#F7F7F7',
    },}})


const cards = [1,2,3,4,5,6];

function App() {
  const classes = useStyles();
  
  const[value, setValue] =React.useState("recents")

  const handleChange = (event, newValue) =>{
    setValue(newValue);
  };

  const [open,setOpen] = React.useState(false);

  const handleClickOpen = () =>{
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  }



  return (
    <>
  <AppBar position="fixed"  color="default">
<Container fixed>
   <Toolbar theme > 
<IconButton className={classes.menuButton}
 edge="start" color="#F7F7F7;" >
     <img src={logo} alt={"logo"}/> 

</IconButton>
<Typography variant="h6" className={classes.title}></Typography>
<Box mr={3}>
  <Button  disabled variant="outlined"  className={classes.button} onClick={handleClickOpen}>log in</Button>
  <Dialog open={open} onClose={handleClose} arial-labelleby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Log in</DialogTitle>
     
      <DialogContent> 
      <DialogContentText id="form-dialog-title">Log in to see videos</DialogContentText>
    <TextField autoFocus margin="dense"
     id="name" 
     label="email"
     type="email" 
     fullWidth />

     <TextField autoFocus
      margin="dense"
     id="pass" 
     label="Password" 
     type="password" 
     fullWidth />

    
  </DialogContent>
  <DialogActions>
    <Button onClick={handleClose} color="primary">Cancel</Button>
    <Button onClick={handleClose} color="primary">LogIn</Button>
  </DialogActions>
  </Dialog>
</Box>
<Button color="primary" variant="contained">Sing in</Button>
  </Toolbar> 
</Container>
    </AppBar>
    

    <main>
      <Paper className={classes.mainFeaturesPort}
      style={{backgroundImage : 'url(https://source.unsplash.com/random)'}}>
        <Container fixed> 
        <div className={classes.overplay}/>
          <Grid container>
              <Grid item md={6}>

                <div className={classes.mainFeaturesPortContent}>
                  <Typography
                  component="h1"
                  variant="h3"
                  color="inherit"
                  gutterBottom>
                    jhjhhfhfj            
                  </Typography>
                  <Typography
                  // component="h5"
                  variant="h5"
                  color="inherit"
                  paragraph>
                    jhjhhfhfj  asd sa d f sd f s a dsa da d
                    sd dfs dsf dsf  wr v x v sd dsf  sf fs
                    sdf  fg  hg  f d  gh re t fs sdf sdf          
                  </Typography>
                  <Button variant="contained" color="secondary">
                    Learn more
                  </Button>
                </div>

              </Grid>
          </Grid>
        </Container>
      </Paper>
      <div className={classes.mainContent}> 
      <Container maxWidth="sm">
        <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
          Web Devoloper
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" gutterBottom>
        jhjhhfhfj  asd sa d f sd f s a dsa da d
                    sd dfs dsf dsf  wr v x v sd dsf  sf fs
                    sdf  fg  hg  f d  gh re t fs sdf sdf  
                    d f sd f s a dsa da d
                    sd dfs dsf dsf  wr v x v sd dsf  sf fs
                    </Typography>
                    <div className={classes.menuButton}>
                    <Grid container spacing={2} justify="center">
                    <Grid item>
                        <Button variant="contained" color="primary">start now</Button>
                       
                    </Grid>
                    
                    <Grid item>
     
                        <Button variant="outlined" color="primary">Learn more</Button>
                    </Grid>
                    </Grid>
                    </div>
            </Container>
          </div>
          <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4}>
                {cards.map((card)=> (
                  <Grid item key={card} xs={12} sm={6} md={4}>
                      <Card className={classes.card}>
                      <CardMedia 
                      className={classes.cardMedia}
                      image="https://source.unsplash.com/random"
                      title="Image title"
                      />
                      <CardContent className={classes.CardContent}>
                        <Typography variant="h5" gutterBottom>
                          Blog post
                        </Typography>
                        <Typography >
                          Blog post. Web dev
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button size="small" color="primary">
                          View
                        </Button>
                        <Button size="small" color="primary">
                        Edit
                        </Button>
                        <LayersIcon />
                        <PlayCircleFilldeIcon />
                      </CardActions>
                      </Card>
                    </Grid>
                ))}
            </Grid>
          </Container>
     </main>
     <footer>
       <Typography variant="h6" align="center" gutterBottom>
         <BottomNavigation
         value={value}
         onChange={handleChange}
         className={classes.root}
         >
            <BottomNavigationAction
            label="Recents"
            value="recents"
            icon={<RestoreIcon/>}
            />
             <BottomNavigationAction
            label="Favorites"
            value="favorites"
            icon={<FavoriteIcon/>}
            />
             <BottomNavigationAction
            label="Nearby"
            value="nearby"
            icon={<LocationOnIcon/>}
            />
            <BottomNavigationAction
            label="Folder"
            value="folder"
            icon={<FolderIcon/>}
            />
         </BottomNavigation>
       </Typography>
      
       <Typography align="center" color="textSecondary" component="p" variant="subtitle1">
         Web Del sdk sd as as as as as as 
         sa as as as sa as sa sa as a sq
       </Typography>
     </footer>
    </>

  );
}

export default App;
