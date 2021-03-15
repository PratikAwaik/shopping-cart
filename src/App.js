import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import Posters from "./components/Posters/Posters";
import Cart from "./components/Cart/Cart";
import Contact from "./components/Contact/Contact";
import { ItemContext } from "./components/Posters/ItemContext";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./styles/App.css";

function App() {
  const [quantity, setQuantity] = useState({});

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
        <ItemContext.Provider value={{ quantity, setQuantity }}>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/posters" component={Posters} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </ItemContext.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
