import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/About";
import Blog from "./components/Blog";
import BlogDetails from "./components/BlogDetails";
import Contact from "./components/Contact";
import Coming from "./components/Coming";
import Error404 from "./components/Error404";
import Error from "./components/Error";
import Index from "./components/Index";
import Faq from "./components/Faq";
import Login from "./components/Login";
import Merchants from "./components/Merchants";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Partner from "./components/Partner";
import Terms from "./components/Terms";
import Signup from "./components/Signup";
import ResetPassword from "./components/ResetPassword";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route path="/about" component={About} />
          <Route path="/blog" component={Blog} />
          <Route path="/blog-details" component={BlogDetails} />
          <Route path="/contact" component={Contact} />
          <Route path="/faq" component={Faq} />
          <Route path="/login" component={Login} />
          <Route path="/merchants" component={Merchants} />
          <Route path="/partner" component={Partner} />
          <Route path="/privacy-policy" component={PrivacyPolicy} />
          <Route path="/sign-up" component={Signup} />
          <Route path="/reset-password" component={ResetPassword} />
          <Route path="/terms" component={Terms} />
          <Route
            render={function() {
              return <Error />;
            }}
          />
        </Switch>
      </Router>
    );
  }
}

export default connect()(App);
