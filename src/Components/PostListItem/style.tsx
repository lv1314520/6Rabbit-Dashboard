import { createStyles } from "@material-ui/core/styles";
import { Theme } from "@material-ui/core/styles/createMuiTheme";

const styles = (_: Theme) =>
    createStyles({
        "post-avatar": {
            marginRight: "16px"
        },
        "author-username": {
            marginRight: "12px"
        },
        "post-list-item-container": {
            display: "flex",
            alignItems: "flex-start"
        },
        "post-list-item-info": {
            color: "rgba(134, 142, 150, 0.8)",
            fontSize: "12px"
        }
    });

export default styles;