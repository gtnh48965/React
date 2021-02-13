import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import {
  Container,
  Card,
  CardHeader,
  Divider,
  FormControlLabel,
  makeStyles,
  Box,
  // Backdrop,
} from '@material-ui/core';

const borderNone = {
  boxShadow: 'none',
};

const ColrText = {
  color: '#8C8C8C',
  padding: '6px'
};

const theme = createMuiTheme();
const ColorSecondary = {
  color: 'red',
  border: '1px solid red',
  borderRadius: 'initial'
};
const Bacground = {
  background: 'white',
  marginTop: '40px'
};

const borderCC = {
  borderColor: '#E6E6E6',
  position: 'relative'
};
const margAcon = {
  position: 'absolute',
  right: '0'
};
// const Absol = {
//   position: 'relative'
// };
theme.typography.h3 = {
  fontSize: '1.2rem',
  '@media (min-width:600px)': {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2rem',
  },
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
};

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    height: '100%',
    with: '100%',
  }
}));

const TrafficByDevice = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <div className={classes.root} style={Bacground}>
      <Container fixed style={Bacground}>
        <Box mb={3} ml={1} style={Bacground}>
          <ThemeProvider theme={theme}>
            <Typography variant="h3">INBOX</Typography>
          </ThemeProvider>
        </Box>
        <Card className={clsx(classes.root, className)} {...rest} style={borderNone}>
          <Grid container spacing={3}>
            <Grid className={classes.item} item md={9} sm={9} xs={9}>
              <Grid item md={12} sm={12} xs={12}>
                <Box root md={10} sm={10} xs={10}>
                  <CardHeader h2 title="TODO" style={ColrText} />
                </Box>
              </Grid>
            </Grid>
            <Grid className={classes.item} item md={3} sm={3} xs={3}>
              <Box display="flex" mt={1} justifyContent="flex-end">
                <Button variant="outlined" className="MuiButton-outlinedSecondary" style={ColorSecondary}>
                  Clear not completed
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12}>
              {/* <CardHeader h2 title="TODO" /> */}
              <Box borderBottom={1} style={borderCC} display="flex" flexDirection="row">
                <Box ml={1} mb={2}>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="4517 Washington Ave. Manchester, Kentucky 39495"
                  />
                </Box>
                <MoreVertIcon style={margAcon} />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box borderBottom={1} style={borderCC} display="flex" flexDirection="row">
                <Box ml={1} mb={2}>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="2715 Ash Dr. San Jose, South Dakota 83475"
                  />
                </Box>
                <MoreVertIcon style={margAcon} />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box borderBottom={1} style={borderCC} display="flex" flexDirection="row">
                <Box ml={1} mb={2}>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="2118 Thornridge Cir. Syracuse, Connecticut 35624"
                  />
                </Box>
                <MoreVertIcon style={margAcon} />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box borderBottom={1} style={borderCC} display="flex" flexDirection="row">
                <Box ml={1} mb={2}>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="6391 Elgin St. Celina, Delaware 10299"
                  />
                </Box>
                <MoreVertIcon style={margAcon} />
              </Box>
            </Grid>
            <Grid className={classes.item} item md={9} sm={9} xs={9}>
              <Grid item md={12} sm={12} xs={12}>
                <Box root md={10} sm={10} xs={10}>
                  <CardHeader h2 title="COMPLETED" style={ColrText} />
                </Box>
              </Grid>
            </Grid>
            <Grid className={classes.item} item md={3} sm={3} xs={3}>
              <Box display="flex" justifyContent="flex-end">
                <Button variant="outlined" color="secondary" style={ColorSecondary}>
                  Clear not completed
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box borderBottom={1} style={borderCC} display="flex" flexDirection="row">
                <Box ml={1} mb={2}>
                  <FormControlLabel
                    control={(
                      <Checkbox defaultChecked />
                )}
                    label="4517 Washington Ave. Manchester, Kentucky 39495"
                  />
                </Box>
                <MoreVertIcon style={margAcon} />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box borderBottom={1} style={borderCC} display="flex" flexDirection="row">
                <Box ml={1} mb={2}>
                  <FormControlLabel
                    control={(
                      <Checkbox defaultChecked />
                )}
                    label="4517 Washington Ave. Manchester, Kentucky 39495"
                  />
                </Box>
                <MoreVertIcon style={margAcon} />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box borderBottom={1} style={borderCC} display="flex" flexDirection="row">
                <Box ml={1} mb={2}>
                  <FormControlLabel
                    control={(
                      <Checkbox defaultChecked />
                )}
                    label="4517 Washington Ave. Manchester, Kentucky 39495"
                  />
                </Box>
                <MoreVertIcon style={margAcon} />
              </Box>
            </Grid>

            <Divider />
          </Grid>

        </Card>
      </Container>
    </div>

  );
};

TrafficByDevice.propTypes = {
  className: PropTypes.string
};

export default TrafficByDevice;
