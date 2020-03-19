import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

const MyComp = props => {
  console.log("props 1: ", props);
  return (
    <>
      <h1> component X </h1>
      <button onClick={() => props.history.push("/3")}> ir</button>
    </>
  );
};

const SecondComponent = props => {
  console.log("las props del dos: ", props);

  return (
    <div className="container">
      <div className="square">A</div>
      <div className="square">B </div>
      <div className="square">C</div>
      <div className="square">D</div>
    </div>
  );
};
function App() {
  return (
    <div className="App">
      <header> Router demo </header>
      <main>
        <Router>
          <Switch>
            <Route path="/1/:user?" component={MyComp}></Route>
            <Route path="/2" component={SecondComponent}></Route>
            <Route path="/3" component={() => <p> ruta 3</p>}></Route>
            <Route exact path="/" component={() => <h1>ruta Home</h1>}></Route>
            <Route component={() => <h1>Error: 404 you lost ?</h1>}></Route>
          </Switch>

          <hr />

          <nav>
            <ul>
              <li>
                <Link to="/1"> Ruta primera</Link>
              </li>
              <li>
                <Link to="/2"> Ruta segunda</Link>
              </li>
              <li>
                <Link to="/3"> Ruta tercera</Link>
              </li>
            </ul>
          </nav>
        </Router>
      </main>

      <footer> el footer </footer>
    </div>
  );
}

export default App;
