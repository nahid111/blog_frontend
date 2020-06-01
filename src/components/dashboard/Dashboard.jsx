import React, { Fragment, useEffect }  from "react";
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../store/actions/profile";
import Spinner from '../layout/Spinner.jsx';


const Dashboard = ({ getCurrentProfile, auth: { user }, profile: { profile, loading } }) => {
  useEffect(()=>{
    getCurrentProfile();
  }, [getCurrentProfile]);

  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <div className="row">
        <div className="col-12">
          <div className="jumbotron mt-5 bg-dark text-white text-center">
            <h1>Welcome {user && user.name}</h1>
            <p>This is a Protected Route</p>
          </div>
        </div>
      </div>

      {profile !== null ? (
        <Fragment>Has</Fragment>
      ) : (
        <Fragment>
          <Link to="/create-profile" className="btn btn-info my-1">
            Create Profile
          </Link>
        </Fragment>
      )}
    </Fragment>
  );
};


Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};


const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile
});


export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);

