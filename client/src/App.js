import React from "react";
import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router
} from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Register from "./component/Register";
import Navigation from "./component/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import MyInfo from "./component/MyInfo";
import Home from "./component/Home";
import { Login } from "./component/Login";
import Logout from "./component/Logout";
/*
1. 
*/

const PrivateRoute = ({ component, ...options }) => {
  const token = localStorage.getItem('token');
  const finalComponent = token ? component : Register;

  return <Route {...options} component={finalComponent} />;
};

function App() {
  // Route bichih heseg
  return (
    <Router>
      <Navigation />
      <Container className="pt-4">
        <Row className="justify-content-md-center">
          <Col md="8">
            <Switch>
              <Redirect exact from="/" to="/home" />
              <Route path="/home" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/logout" component={Logout} />
              <Route path="/register" component={Register} />
              <PrivateRoute path="/my-info" component={MyInfo} />
            </Switch>
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
