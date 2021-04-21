import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import PacientCreate from './pages/PacientCreate';
import PacientList from './pages/PacientList';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={PacientList}/>
                <Route path="/newpacient" exact component={PacientCreate}/>
            </Switch>
        </BrowserRouter>
    )
}