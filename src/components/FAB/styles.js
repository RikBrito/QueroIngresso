import { makeStyles } from "@material-ui/core/styles";
import { Text } from 'native-base';

export const useStyles = makeStyles(theme => ({
    margin: {
      margin: theme.spacing(1)
    },
    extendedIcon: {
      marginRight: theme.spacing(1)
    }
  }));