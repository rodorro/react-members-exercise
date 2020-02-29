import { Theme, createStyles } from "@material-ui/core/styles";
import makeStyles from "@material-ui/styles/makeStyles/makeStyles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    close: {
      // padding: theme.spacing.unit / 2,
    },
  })
);
