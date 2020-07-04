import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar/Navbar";
import Home from "./components/pages/Home/Home";
import About from "./components/pages/About/About";
import Register from "./components/pages/Register/Register";
import Login from "./components/pages/Login/Login";
import Alerts from "./components/layout/Alerts/Alerts";
import ProtectedRoute from "./components/utils/ProtectedRoute";
import store from "./redux/store";

import "./App.scss";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Navbar />
          <Alerts />
          <Switch>
            <ProtectedRoute path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
