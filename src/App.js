import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home"
import About from "./routes/About"
import Navigation from "./components/Navigation"
import Detail from "./routes/Detail";

function App() {
    return <HashRouter>
      <Navigation />
      <Route path="/" exact = {true} component={Home}/>
      <Route path="/about" exact = {true} component={About}/>
      <Route paht="/movie/:id" component={Detail}/>

      {/* <Route path="/home" exact = {true} component={Home}>
        <h1>Home</h1>
      </Route>
      <Route path="/home/introduction" component={About}>
       <h1>Introduction</h1>
      </Route>
      <Route path="/about" component={About}>
       <h1>About</h1>
      </Route> */}
    </HashRouter>

    //<BrowserRouter></BrowserRouter>
}


export default App;

 