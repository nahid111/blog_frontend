import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.css';
// Components
import Home from './components/Home.jsx';
import Dashboard from './components/dashboard/Dashboard.jsx';
import NotFound from './components/layout/NotFound.jsx';
import Layout from './components/layout/Layout.jsx';
import Login from './components/auth/Login.jsx';
import Register from './components/auth/Register.jsx';
import CreateProfile from './components/profile-forms/CreateProfile.jsx';
import PrivateRoute from './components/routing/PrivateRoute.jsx';
// Utils
import setAuthToken from './utils/setAuthToken';
// Actions
import { loadUser } from './store/actions/auth';
// Redux
import store from './store/';
import { Provider } from 'react-redux';



const App = () => {
  
  useEffect(()=>{
    setAuthToken(localStorage.token);
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
            <PrivateRoute exact path='/dashboard' component={Dashboard} />
            <PrivateRoute exact path='/create-profile' component={CreateProfile} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </Router>
    </Provider>
  );
}


export default App;



