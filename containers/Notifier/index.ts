import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import { withSnackbar } from "notistack";

import { removeSnackbar } from "../../actions";
import Notifier from "../../components/Notifier";
import { StoreState } from "../../reducers";

const mapStateToProps = ({ basic }: StoreState) => ({
    notifications: basic.snackbars
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({ removeSnackbar }, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withSnackbar(Notifier));
