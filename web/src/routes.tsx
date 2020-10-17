import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Landing from './pages/Landing';
import OrphanagesMap from './pages/OrphanagesMap';
import Orphanage from './pages/Orphanage';
import createOrphanage from './pages/CreateOrphanage';

function Routes(){
   return(
      <BrowserRouter>
         <Switch>
            <Route path='/' component={Landing} exact/>
            <Route path='/app' component={OrphanagesMap} />
            <Route path='/orphanages/create' component={createOrphanage} />
            <Route path='/orphanages/:id' component={Orphanage} />
 
         </Switch>
      </BrowserRouter>
   );
}

export default Routes;

