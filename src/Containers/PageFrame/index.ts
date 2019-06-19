import { connect } from "react-redux";
import { Dispatch } from "redux";
import { RouteComponentProps, withRouter } from "react-router";

import PageFrame from "../../Components/PageFrame";
import { StoreState } from "../../Reducers";

const mapStateToProps = ({ basic: { title } }: StoreState, ownProps: RouteComponentProps) => ({
    title: title,
    ...ownProps
});

const mapDispatchToProps = (dispatch: Dispatch) => ({});

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(PageFrame)
);
