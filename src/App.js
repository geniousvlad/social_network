import React, { Component, Suspense } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Route, withRouter, BrowserRouter } from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import { connect, Provider } from "react-redux";
import { compose } from "redux";
import { initializeApp } from './redux/app-reducer';
import Preloader from "./components/Common/Preloader/Preloader";
import store from './redux/redux-store';
import { withSuspense } from "./hoc/withSuspense";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

// import News from "./components/News/News";
// import Music from "./components/Music/Music";
// import Settings from "./components/Settings/Settings";



class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }

    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          {/* <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} /> */}

          <Route path="/dialogs"
           render={ withSuspense(DialogsContainer) } />

          <Route path="/profile/:userId?"
           render={ withSuspense(ProfileContainer) } />

          <Route path="/users" render={() => <UsersContainer />} />

          <Route path="/login" render={() => <Login />} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
});

let AppContainer = compose (
               withRouter,
               connect (mapStateToProps, {initializeApp})) (App);

const VlBlogApp = (props) => {
  return <BrowserRouter>
    <Provider store={ store }>
      <AppContainer />
    </Provider>
  </BrowserRouter>
}

export default VlBlogApp;
