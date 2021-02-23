import React from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  List,
  ListItem,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PublicIcon from '@material-ui/icons/Public';
import AssessmentOutlinedIcon from '@material-ui/icons/AssessmentOutlined';

import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: 'transparent',
  },
  heading: {
    fontSize: theme.typography.pxToRem(16),
    fontWeight: theme.typography.fontWeightRegular,
    borderBottom: 0,
  },
  accordion: {
    width: '100%',
    backgroundColor: 'transparent',
  },

  accordionDetails: {
    padding: 0,
    backgroundColor: 'rgba(88, 118, 55, 0.5)',
  },

  accordionList: {
    width: '100%',
    padding: 0,
    '& li': {
      cursor: 'pointer',
    },
    '& :hover': {
      backgroundColor: 'rgba(88, 118, 55, 0.2)',
    },
  },

  listITem: {
    width: '100%',
  },
}));

const AccordionSidebar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Accordion className={classes.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <AssessmentOutlinedIcon />
          <Typography className={classes.heading}>Gráficos</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.accordionDetails}>
          <List className={classes.accordionList}>
            <Link to="/graficos/coluna">
              <ListItem>
                <Typography>Coluna</Typography>
              </ListItem>
            </Link>
            <Link to="/graficos/linha">
              <ListItem>
                <Typography>Linha</Typography>
              </ListItem>
            </Link>
          </List>
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <PublicIcon />
          <Typography className={classes.heading}>Mapas</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.accordionDetails}>
          <List className={classes.accordionList}>
            <Link to="/mapas/poligono">
              <ListItem>
                <Typography>Polígono</Typography>
              </ListItem>
            </Link>
            <Link to="/mapas/linhas">
              <ListItem>
                <Typography>Linhas</Typography>
              </ListItem>
            </Link>
            <Link to="/mapas/pontos">
              <ListItem>
                <Typography>Pontos</Typography>
              </ListItem>
            </Link>
          </List>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default AccordionSidebar;
