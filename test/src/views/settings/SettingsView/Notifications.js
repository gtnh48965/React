import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
  Button,
  Card,
  CardContent,
  // CardHeader,
  Divider,
  Grid,
  makeStyles,
  // TextField,
} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles(({
  root: {},
  item: {
    display: 'flex',
    flexDirection: 'column'
  }
}));

const colorIcon = {
  color: '#DADADA',
};
const ColrText = {
  color: '#8C8C8C',
};

const widthBigtext = {
  width: '200px',
};

const blackText = {
  color: '#404040'
};
const botNan = {
  borderRadius: 'initial',
};

const Notifications = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <form
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Card>

        <Divider />
        <CardContent>
          <Grid
            container
            spacing={6}
            wrap="wrap"
          >
            <Grid
              className={classes.item}
              item
            >

              <InputBase
                style={widthBigtext}
                margin="normal"
                defaultValue="MyFirstProject"
                color="primary"
                inputProps={
                    {
                      style: {
                        fontSize: 30
                      }
                    }
                  }
                InputLabelProps={
                    {
                      style: {
                        fontSize: 30
                      }
                    }
              }
              />
            </Grid>
            <Grid>
              <Box mt={4}>
                <BorderColorIcon style={colorIcon} />
                <DeleteIcon style={colorIcon} />
              </Box>
            </Grid>
            <Grid className={classes.item} item md={9} sm={9} xs={9}>
              <Grid item md={12} sm={12} xs={12}>
                <Box root md={10} sm={10} xs={10}>
                  <Typography variant="h6" style={ColrText} color="secondary">TODI</Typography>
                  <Box mt={0}>
                    <Typography variant="h6" style={blackText} color="secondary">No task</Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
            <Grid className={classes.item} item md={3} sm={3} xs={3}>
              <Box display="flex" mb={1} justifyContent="flex-end">
                <Button variant="outlined" style={botNan} disabled>
                  Clear not completed
                </Button>
              </Box>
            </Grid>
            <Grid className={classes.item} item md={9} sm={9} xs={9}>
              <Grid>
                <Box>
                  <Typography variant="h6" style={ColrText} color="secondary">COMPLETED</Typography>
                  <Box mt={0}>
                    <Typography variant="h6" style={blackText} color="secondary">No task</Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
            <Grid className={classes.item} item md={3} sm={3} xs={3}>
              <Box display="flex" mb={4} justifyContent="flex-end">
                <Button variant="outlined" style={botNan} disabled>
                  Clear not completed
                </Button>
              </Box>
            </Grid>

          </Grid>
        </CardContent>
        <Divider />
      </Card>
    </form>
  );
};

Notifications.propTypes = {
  className: PropTypes.string
};

export default Notifications;
