import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    zIndex: theme.zIndex.drawer + 1,
    boxShadow: 'none',
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="fixed" className={classes.root}>
      <Toolbar>
        <Typography variant="h6" noWrap>
          Fractal
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
