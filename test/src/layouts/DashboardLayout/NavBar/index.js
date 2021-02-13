import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Divider,
  Drawer,
  Hidden,
  List,
  // Typography,
  makeStyles
} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import {
  BarChart as BarChartIcon,
  // Lock as LockIcon,
  Settings as SettingsIcon,

} from 'react-feather';
import NavItem from './NavItem';

const Babackground = {
  background: '#FAFAFA',
};

const blackText = {
  color: '#404040'
};
const ColrText = {
  color: '#8C8C8C',
};

const items = [
  {
    href: '/app/dashboard',
    icon: BarChartIcon,
    title: 'inbox',
  },
  {
    href: '/app/settings',
    icon: SettingsIcon,
    title: 'project',
  },
];
const BottomBot = {
  margin: '15px',
  color: '#1400FD',
  borderColor: '#1400FD',
  borderRadius: 'initial'
};
const useStyles = makeStyles(() => ({
  mobileDrawer: {
    width: 256
  },
  desktopDrawer: {
    width: 256,
    top: 64,
    height: 'calc(100% - 64px)'
  },
  avatar: {
    cursor: 'pointer',
    width: 64,
    height: 64
  }
}));

const NavBar = ({ onMobileClose, openMobile }) => {
  const classes = useStyles();

  const content = (
    <Box
      style={Babackground}
      height="100%"
      display="flex"
      flexDirection="column"
    >

      <Divider />
      <Box p={2} style={blackText}>
        <List style={blackText}>
          <div style={ColrText}> All</div>
          {items.map((item) => (
            <NavItem
              href={item.href}
              key={item.title}
              title={item.title}
              style={blackText}
            />
          ))}
          <div style={ColrText}> My project</div>
        </List>
      </Box>
      <Button variant="outlined" style={BottomBot} color="primary">
        Add new project
      </Button>
      <Box flexGrow={1} />

    </Box>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          classes={{ paper: classes.mobileDrawer }}
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer
          anchor="left"
          classes={{ paper: classes.desktopDrawer }}
          open
          variant="persistent"
          style={blackText}
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};

NavBar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool
};

NavBar.defaultProps = {
  onMobileClose: () => {},
  openMobile: false
};

export default NavBar;
