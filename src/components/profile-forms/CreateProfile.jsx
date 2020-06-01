import React, { Fragment, useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
// import { createProfile, getCurrentProfile } from '../../actions/profile';

const initialState = {
  company: "",
  website: "",
  location: "",
  status: "",
  skills: "",
  githubusername: "",
  bio: "",
  twitter: "",
  facebook: "",
  linkedin: "",
  youtube: "",
  instagram: "",
};

const ProfileForm = (props) => {
  /**
   * useState takes in the inital state & 
   * returns the current-state & a Function to update it
   */
  const [formData, setFormData] = useState(initialState);

  /**
   * here the initial value is set to false
   * means displaySocialInputs will be a boolean
   */
  const [displaySocialInputs, toggleSocialInputs] = useState(false);

  const {
    company,
    website,
    location,
    status,
    skills,
    githubusername,
    bio,
    twitter,
    facebook,
    linkedin,
    youtube,
    instagram,
  } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const onSubmit = (e) => {
    e.preventDefault();
    // createProfile(formData, history, profile ? true : false);
  };

  return (
    <Fragment>
      <h1 className="text-primary">Edit Your Profile</h1>
      <p className="lead">
        <i className="fas fa-user" /> Add some changes to your profile
      </p>
      <small>* = required field</small>
      <form className="mt-4" onSubmit={onSubmit}>
        <div className="form-group">
          <select
            className="form-control"
            name="status"
            value={status}
            onChange={onChange}
          >
            <option>* Select Professional Status</option>
            <option value="Developer">Developer</option>
            <option value="Junior Developer">Junior Developer</option>
            <option value="Senior Developer">Senior Developer</option>
            <option value="Manager">Manager</option>
            <option value="Student or Learning">Student or Learning</option>
            <option value="Instructor">Instructor or Teacher</option>
            <option value="Intern">Intern</option>
            <option value="Other">Other</option>
          </select>
          <small className="form-text">
            Give us an idea of where you are at in your career
          </small>
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Company"
            name="company"
            value={company}
            onChange={onChange}
          />
          <small className="form-text">
            Could be your own company or one you work for
          </small>
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Website"
            name="website"
            value={website}
            onChange={onChange}
          />
          <small className="form-text">
            Could be your own or a company website
          </small>
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Location"
            name="location"
            value={location}
            onChange={onChange}
          />
          <small className="form-text">
            City & state suggested (eg. Boston, MA)
          </small>
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="* Skills"
            name="skills"
            value={skills}
            onChange={onChange}
          />
          <small className="form-text">
            Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)
          </small>
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Github Username"
            name="githubusername"
            value={githubusername}
            onChange={onChange}
          />
          <small className="form-text">
            If you want your latest repos and a Github link, include your
            username
          </small>
        </div>
        <div className="form-group">
          <textarea
            className="form-control"
            placeholder="A short bio of yourself"
            name="bio"
            value={bio}
            onChange={onChange}
          />
          <small className="form-text">Tell us a little about yourself</small>
        </div>

        <div className="my-4">
          <button
            onClick={ () => toggleSocialInputs(!displaySocialInputs)}
            type="button"
            className="btn btn-secondary mr-2"
          >
            Add Social Network Links
          </button>
          <span>Optional</span>
        </div>

        { displaySocialInputs && ( 
          <Fragment>
            <div className="form-group" style={{display: "flex"}}>
              <i className="fab fa-twitter fa-2x mr-2" />
              <input
                type="text"
                className="form-control"
                placeholder="Twitter URL"
                name="twitter"
                value={twitter}
                onChange={onChange}
              />
            </div>

            <div className="form-group" style={{display: "flex"}}>
              <i className="fab fa-facebook fa-2x mr-2" />
              <input
                type="text"
            className="form-control"
                placeholder="Facebook URL"
                name="facebook"
                value={facebook}
                onChange={onChange}
              />
            </div>

            <div className="form-group" style={{display: "flex"}}>
              <i className="fab fa-youtube fa-2x mr-2" />
              <input
                type="text"
            className="form-control"
                placeholder="YouTube URL"
                name="youtube"
                value={youtube}
                onChange={onChange}
              />
            </div>

            <div className="form-group" style={{display: "flex"}}>
              <i className="fab fa-linkedin fa-2x mr-2" />
              <input
                type="text"
            className="form-control"
                placeholder="Linkedin URL"
                name="linkedin"
                value={linkedin}
                onChange={onChange}
              />
            </div>

            <div className="form-group" style={{display: "flex"}}>
              <i className="fab fa-instagram fa-2x mr-2" />
              <input
                type="text"
            className="form-control"
                placeholder="Instagram URL"
                name="instagram"
                value={instagram}
                onChange={onChange}
              />
            </div>
          </Fragment>
        )}

        <input type="submit" className="btn btn-primary my-1 mr-2" />
        <Link className="btn btn-secondary my-1" to="/dashboard">
          Go Back
        </Link>
      </form>
    </Fragment>
  );
};

ProfileForm.propTypes = {
  // createProfile: PropTypes.func.isRequired,
  // getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps)(withRouter(ProfileForm));
