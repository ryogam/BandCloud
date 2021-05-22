import React from "react";
import Header from "views/components/block/Header";
import Footer from "views/components/block/Footer";
import Top from "views/pages/Top/Top";
import Contact from "views/pages/Contact/Contact";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Top} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
