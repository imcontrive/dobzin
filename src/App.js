import React, { Component } from "react";
import { connect } from "react-redux";
import Index from "./components/Index";

class App extends Component {
  render() {
    return <Index />;
  }
}

export default connect()(App);
