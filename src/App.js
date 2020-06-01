import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import HomeBody from './components/HomeBody/HomeBody';
import Footer from './components/Footer/Footer';
import PageNotFound from './components/PageNotFound/PageNotFound';
import SubHeader from './components/SubHeader/SubHeader';
import ClassBody from './components/ClassBody/ClassBody';
import PriceBody from './components/PriceBody/PriceBody';


function App() {
  return (
    
      <Router>
        <Switch>

          <Route exact path='/'>
            <Navbar />
            <Header />
            <HomeBody />
            <Footer />
          </Route>


          <Route path='/class'>
            <Navbar />
            <SubHeader header='OUR CLASSES' />
            <ClassBody/>
            <Footer />
          </Route>


          <Route path='/details'>

          </Route>


          <Route path='/price'>
            <Navbar />
            <SubHeader header='PRICING PLANS' />
            <PriceBody/>
            <Footer />
          </Route>


          <Route path='/membership'>

          </Route>

          
          <Route path='*'>
            <PageNotFound />
          </Route>

        </Switch>
      </Router>
    
  );
}

export default App;
