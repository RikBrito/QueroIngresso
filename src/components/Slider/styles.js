import { makeStyles } from "@material-ui/core/styles";
import { Text } from 'native-base';

export const useStyles = makeStyles(theme => ({
    root: {
      width: 300
    },
    margin: {
      height: theme.spacing(3)
    }
  }));

  export const marks = [
    {
      value: 0,
      label: "0Km"
    },
    {
      value: 20,
      label: "20Km"
    },
  
    {
      value: 100,
      label: "100°Km"
    }
  ];