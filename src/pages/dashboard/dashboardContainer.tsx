import React from "react";
import Dashboard from "./dashboard";
import {connect} from "react-redux";
import Loader from "../../components/loader";
import {history} from "../../redux/store";
import {authorizationFailure} from "../../redux/actions/authActionCreators";
import {USER_NOT_AUTHORIZED} from "../../utils/errorTexts";

interface DashboardProps {
  loading: boolean,
  isAuthorized: boolean,
  authorizationFailure: any
}

function DashboardContainer(props: DashboardProps) {
  if (props.loading) {
    return <Loader/>
  }

  if (!props.isAuthorized) {
    props.authorizationFailure({error: USER_NOT_AUTHORIZED});
  }

  return <Dashboard/>
}

const mapStateToProps = (state: any) => ({
  loading: state.auth.loading,
  isAuthorized: state.auth.isAuthorized
});

const mapDispatchToProps = (dispatch: any) => ({
  authorizationFailure: (data: any) => dispatch(authorizationFailure(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardContainer);