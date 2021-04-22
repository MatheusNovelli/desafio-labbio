import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import PacientCreate from './pages/PacientCreate';
import PacientDetails from './pages/PacientDetails';
import PacientEdit from './pages/PacientEdit';
import PacientList from './pages/PacientList';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={PacientList}/>
                <Route path="/newpacient" exact component={PacientCreate}/>
                <Route path="/pacientedit/:id" exact component={PacientEdit}/>
                <Route path="/pacientdetails/:id" exact component={PacientDetails}/>
            </Switch>
        </BrowserRouter>
    )
}