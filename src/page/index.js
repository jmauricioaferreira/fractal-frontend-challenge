import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Drawer, Toolbar, AppBar, Typography } from '@material-ui/core';
import PolygonMap from '../components/MapStructure/PolygonMap';
import AccordionSidebar from '../components/Accordion';
import Header from '../components/Header';

import AppRoutes from '../routes';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {},
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'hidden',
    backgroundColor: theme.palette.secondary.main,
    height: '100vh',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  toolbarHead: {},
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
}));

const AppPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <AccordionSidebar />
        </div>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <AppRoutes />
      </main>
    </div>
  );
};

export default AppPage;
