import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import Index from "./components/Index";
import Terms from "./components/Terms";
import Login from "./components/Login";
import Faq from "./components/Faq";
import Signup from "./components/Signup";
import ResetPassword from "./components/ResetPassword";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Partner from "./components/Partner";
import About from "./components/About";
import Error404 from "./components/Error404";
import Error from "./components/Error";
import Contact from "./components/Contact";
import Coming from "./components/Coming";
import BlogDetails from "./components/BlogDetails";

import Merchants from "./components/Merchants";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route path="/about" component={About} />
          <Route path="/merchants" component={Merchants} />
          <Route path="/contact" component={Contact} />
          <Route path="/login" component={Login} />
          <Route path="/sign-up" component={Signup} />
        </Switch>
      </Router>
    );
  }
}

export default connect()(App);
