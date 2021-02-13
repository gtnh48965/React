import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import CloseIcon from '@material-ui/icons/Close';
import Link from '@material-ui/core/Link';
import './TopBar.css';
import {
  AppBar,
  Badge,
  Box,
  Hidden,
  IconButton,
  Toolbar,
  makeStyles
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import Logo from 'src/components/Logo';
// import { borderRadius } from '@material-ui/system';

const margModal = {
  marginTop: '121px',
  position: 'relative'
};

const Grey = {
  color: '#8C8C8C',
  marginRight: '30px'
};
const PositionClose = {
  position: 'absolute',
  top: '0',
  border: '2px solid #B3B3B3',
  marginTop: '54px',
  color: '#B3B3B3',
  borderRadius: '100%'
};
const refactoringUITwo = {
  flexDirection: 'column',
  marginRight: '70px',
  marginTop: '57px',
  display: 'flex',
};
const refactoringUI = {
  flexDirection: 'initial',
  display: 'flex',
  height: '878px',
  minWidth: '600px',
  position: 'relative',
};
const botTask = {
  borderRadius: 'initial',
  backgroundColor: '#1400FD'
};
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  avatar: {
    width: 60,
    height: 60
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));
const borderTop = {
  border: '1px solid #E6E6E6'
};
const colorGraf = {
  backgroundColor: '#FCFCFC',
};

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}
const TopBar = ({
  className,
  onMobileNavOpen,
  ...rest
}) => {
  const classes = useStyles();
  const [notifications] = useState([]);

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <AppBar
      className={clsx(classes.root, className)}
      elevation={0}
      {...rest}
      color="default"
      boxShadow={3}
    >
      <Toolbar theme style={borderTop}>
        <RouterLink to="/">
          <Logo />
        </RouterLink>
        <Box flexGrow={1} />
        <Hidden mdDown>
          <IconButton color="inherit">
            <Badge
              badgeContent={notifications.length}
              color="primary"
              variant="dot"
            >
              {/* <NotificationsIcon /> */}
            </Badge>
          </IconButton>
          <IconButton color="inherit">
            {/* <InputIcon /> */}
          </IconButton>
        </Hidden>
        <Button style={Grey} onClick={handleClickOpen}>Statistics</Button>
        <Dialog
          className={classes.root}
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <div style={refactoringUI}>
            <DialogTitle style={margModal} id="alert-dialog-title">
              <Typography variant="h1" component="h2">
                Statistics
              </Typography>

              <Breadcrumbs separator="" aria-label="breadcrumb" style={refactoringUITwo}>
                <div style={refactoringUITwo}>
                  <Link color="textPrimary" onClick={handleClick}>
                    Material-UI
                  </Link>
                  <Link color="inherit" onClick={handleClick}>
                    Core
                  </Link>
                </div>
              </Breadcrumbs>
            </DialogTitle>
            <DialogContent style={colorGraf}>
              <DialogContentText style={colorGraf} id="alert-dialog-description">
                as
              </DialogContentText>
            </DialogContent>
            <Button onClick={handleClose} style={colorGraf} color="primary">
              <CloseIcon style={PositionClose} fontSize="large" />
            </Button>

          </div>
        </Dialog>
        <Button color="primary" style={botTask} variant="contained">Add new task</Button>
        <Hidden lgUp>
          <IconButton
            color="inherit"
            onClick={onMobileNavOpen}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

TopBar.propTypes = {
  className: PropTypes.string,
  onMobileNavOpen: PropTypes.func
};

export default TopBar;
