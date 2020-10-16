import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Tugas15 from './tugas15';
import Tugas9 from '../Tugas-9/tugas9';
import Tugas10 from '../Tugas-10/tugas10';
import Tugas11 from '../Tugas-11/tugas11';
import Tugas12 from '../Tugas-12/tugas12';
import Tugas13 from '../Tugas-13/tugas13';
import Tugas14 from '../Tugas-14/tugas14';

function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Tugas15} />
                <Route path="/tugas9" component={Tugas9} />
                <Route path="/tugas10" component={Tugas10} />
                <Route path="/tugas11" component={Tugas11} />
                <Route path="/tugas12" component={Tugas12} />
                <Route path="/tugas13" component={Tugas13} />
                <Route path="/tugas14" component={Tugas14} />
            </Switch>
        </Router>
    );
}

export default Routes;