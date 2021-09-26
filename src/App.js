import { Switch, Route } from 'react-router';


import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from "./Pages/Home"
import NotFound from './Pages/NotFound'
import Category from "./Pages/Category"

import './App.css';

function App() {

  return (
    <>
      <Header />
      <main className="main">
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/category/:name" component={Category} exact/>
          <Route component={NotFound} />
        </Switch>
      </main> 
      <Footer />
    </>
  );
}

export default App;
