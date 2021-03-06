import { createStyles } from "@material-ui/core/styles";
import { Theme } from "@material-ui/core/styles/createMuiTheme";

const styles = (theme: Theme) =>
    createStyles({
        root: {
            padding: theme.spacing(2)
        },
        "search-input-container": {
            margin: theme.spacing(2, 0),
            padding: theme.spacing(0.5),
            display: "flex",
            justifyContent: "center"
        },
        input: {
            marginLeft: 8,
            flex: 1
        },
        iconButton: {
            padding: 10
        }
    });

export default styles;
