import { connect } from "react-redux";
import { Dispatch } from "redux";
import { RouteComponentProps, withRouter } from "react-router";

import PageFrame from "../../Components/PageFrame";
import { StoreState } from "../../Reducers";

const mapStateToProps = ({ basic: { title, loading, isLogin } }: StoreState, ownProps: RouteComponentProps) => ({
    title,
    loading,
    isLogin,
    ...ownProps
});

const mapDispatchToProps = (dispatch: Dispatch) => ({});

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(PageFrame)
);
