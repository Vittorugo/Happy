import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Landing from './pages/Landing';
import Orphanages from './pages/OrphanagesMap';

function Routes(){
   return(
      <BrowserRouter>
         <Switch>
            <Route path='/' component={Landing} exact/>
            <Route path='/orphanages' component={Orphanages} />
         </Switch>
      </BrowserRouter>
   );
}

export default Routes;

