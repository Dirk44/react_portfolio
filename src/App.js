import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import './App.css';
import Navigate from "./components/Nav";
import Footer from "./components/Footer";
import { Container, Row } from "react-bootstrap";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

function App() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <div className="body">
        <Navigate/>
        <Container fluid>
          <Row>
            <Switch>
              <Route exact path='/' component={About} />
              <Route exact path='/portfolio' component={Portfolio} />
              <Route exact path='/contact' component={Contact} />
              <Route component={About} />
            </Switch>
          </Row>
        </Container>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
