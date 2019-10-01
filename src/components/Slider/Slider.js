import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import NavigationIcon from "@material-ui/icons/Navigation";
import {
    useStyles, marks
  } from './styles';



function valuetext(value) {
  return `${value}Km`;
}

export default function slider() {
  const classes = useStyles();

  return (
    <View className={classes.root}>
      SLIDER
      <Slider
        defaultValue={30}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={10}
        marks
        min={10}
        max={110}
      />
    </View>
  );
}
