import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/header/Header";
import { Home } from "./components/Home/Home";
import { Cart } from "./components/cart/Cart";
import { TemplateProvider } from './templates/TemplateProvider'

function App() {
  return (
    <TemplateProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/cart" component={Cart} />
        </Switch>
      </Router>
    </TemplateProvider>
  );
}

export default App;
