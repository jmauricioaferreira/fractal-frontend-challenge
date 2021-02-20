import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Drawer,
  List,
  Toolbar,
  ListItem,
  ListItemText,
  ListItemIcon,
  AppBar,
  Typography,
} from '@material-ui/core';
import PolygonMap from '../components/Map/Polygon';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    boxShadow: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
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
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolbarHead}>
          <Typography variant="h6" noWrap>
            Fractal
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            {['Gráficos', 'Mapas'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>aa</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <PolygonMap />
      </main>
    </div>
  );
};

export default AppPage;
