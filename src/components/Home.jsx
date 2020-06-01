import React from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

const Home = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className="jumbotron text-center mt-5" style={{ backgroundColor: "#61DAFB" }} >
      <h1 className="display-1">React + Bootstrap</h1>
      <hr />
      <p className="lead">Blog Frontend using React-Redux + Bootstrap</p>
    </div>
  );
};

Home.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Home);
