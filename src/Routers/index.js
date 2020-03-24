import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../Pages/Home'
import Frontend from '../Pages/Frontend'
import Backend from '../Pages/Backend'
import Database from '../Pages/Database'

// Sub Navbar
import Html from '../Pages/Html'
export default () => (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/Frontend' component={Frontend} />
        <Route exact path='/Frontend/html' component={Html} />
        <Route exact path='/Backend' component={Backend} />
        <Route exact path='/Database' component={Database} />
    </Switch>
)