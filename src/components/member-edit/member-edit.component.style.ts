import { Theme, createStyles } from "@material-ui/core/styles";
import makeStyles from "@material-ui/styles/makeStyles/makeStyles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      // width: '500px',
      marginTop: '1em',
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    media: {
      height: 0,
      paddingTop: '56.25%',
    },
  })
);
