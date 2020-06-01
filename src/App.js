import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import HomeBody from './components/HomeBody/HomeBody';
import Footer from './components/Footer/Footer';
import PageNotFound from './components/PageNotFound/PageNotFound';


function App() {
  return (
    <div>
      <Router>
        <Switch>

          <Route exact path='/'>
            <Navbar />
            <Header />
            <HomeBody />
            <Footer />
          </Route>

          <Route path='/class'></Route>
          <Route path='/details'></Route>
          <Route path='/price'></Route>
          <Route path='/membership'></Route>

          

          {/* <Route path='/doctor/:pageName'></Route> */}
          <Route path='*'>
            <PageNotFound />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
