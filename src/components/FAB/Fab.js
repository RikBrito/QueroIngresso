import React from "react";
import Fab from "@material-ui/core/Fab";
import NavigationIcon from "@material-ui/icons/Navigation";
import {
    useStyles
  } from './styles';

export default function Fab() {
  const classes = useStyles();

  return (
    <View>
      <Fab
        variant="extended"
        size="small"
        color="primary"
        aria-label="add"
        className={classes.margin}
      >
        Musica
      </Fab>
    </View>
  );
}


