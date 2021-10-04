import Banner from 'components/Banner/Banner';
import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import Page from './Pages/Page';



function Home() {
    const match = useRouteMatch();
    // {`${match.url}:productId`} 

    

    return (
        <div>
           <Banner />
            <Switch>
                <Route path={match.url} component={Page} />
               
            </Switch>
           
        </div>
    );
}

export default Home;