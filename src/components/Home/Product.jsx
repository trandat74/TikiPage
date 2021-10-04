import Banner from 'components/Banner/Banner';
import Cart from 'components/Cart/Cart';
import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import Page from './Pages/Page';
import ProductDetail from './ProductDetail/ProductDetail';



function Home() {
    const match = useRouteMatch();
    // {`${match.url}:productId`} 
    const search = useRouteMatch();




    return (
        <div>
            <Banner />
            <Switch>
                <Route path={match.url} component={Page} />
                {/* <Route path='/help' component={Help} exact></Route> */}
                {/* <Route path='/tikipage' component={Home} exact></Route> */}
                <Route path='/cart' component={Cart} exact ></Route>
                <Route path={`${match.url}/product/:productId`} component={ProductDetail} />


            </Switch>

        </div>
    );
}

export default Home;