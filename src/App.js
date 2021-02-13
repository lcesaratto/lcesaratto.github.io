import { HashRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Awards from "./components/Awards";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Header className="App-header" />
        <section>
          <Switch>
            <Route
              path="/"
              exact
              render={() => <Projects className="App-body" />}
            />
            <Route
              path="/awards"
              exact
              render={() => <Awards className="App-body" />}
            />
            <Route
              path="/skills"
              exact
              render={() => <Skills className="App-body" />}
            />
          </Switch>
        </section>
        <Footer className="App-footer" />
      </Router>
    </div>
  );
}

export default App;
