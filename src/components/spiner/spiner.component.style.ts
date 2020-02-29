import { Theme, createStyles } from "@material-ui/core/styles";
import makeStyles from "@material-ui/styles/makeStyles/makeStyles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
    },
    container: {
      // display: "flex",
      // flexDirection: "column",
      width: "100%",
      alignSelf: "center",
    }
  })
);
