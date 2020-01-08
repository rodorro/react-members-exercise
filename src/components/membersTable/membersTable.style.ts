import { Theme, createStyles } from "@material-ui/core/styles";
import makeStyles from "@material-ui/styles/makeStyles/makeStyles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: "flex",
      flexDirection: "column"
    },
    title: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginBottom: "1rem"
    },
    input: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      marginBottom: "1rem"
    },
    table: {
      minWidth: 650,
      marginBottom: "1rem"
    }
  })
);
