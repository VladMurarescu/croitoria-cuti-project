import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import AboutUs from "./pages/AboutUs/AboutUs";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ErrorComponent from "./components/ErrorComponent/ErrorComponent";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/products">
          <Products />
        </Route>
        <Route exact path="/about-us">
          <AboutUs />
        </Route>
        <Route path="*">
          <ErrorComponent />
        </Route>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
