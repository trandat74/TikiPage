// import { useState } from 'react';
import Cart from 'components/Cart/Cart';
import Home from 'components/Home/Product';
import ProductDetail from 'components/Home/ProductDetail/ProductDetail';
import { Route, Switch, useHistory, useRouteMatch } from 'react-router';
import './App.css';
// import AddFamily from './components/AddFamily';
import Footer from './components/Footer';
import Header from './components/Header';
import Help from './components/Help/Help';
function App() {
  const search = useRouteMatch();
  const url = useHistory()
  const path = useRouteMatch()
  const handleSearch = (history) => {
    console.log(history)

  }

  return (

    // Router....
    <div className="App">
      <Header onSearch={handleSearch} />
      <Switch>
        {/* <Route path='/help' component={Help} exact></Route> */}
        <Route path='/tikipage' component={Home} exact></Route>
        <Route path='/cart' component={Cart} exact ></Route>
        <Route path={`${search.url}product/:productId`} exact component={ProductDetail} />

      </Switch>
      {/* <Product /> */}
      <Footer />
    </div>


  );
}
export default App;
