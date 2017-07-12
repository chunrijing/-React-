import React from 'react'
import ReactDom from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import { Index } from './views/index'

//router dev
let _router='/';
if(location.hostname=='localhost'||location.hostname=='127.0.0.1'){
  _router='/dist/'
}

//router
const RouterComponent = () => (
  <Router>
      <div>
        <Route exact path={_router} component={Index}/>

      </div>
  </Router>
)

//render
ReactDom.render(<RouterComponent/>,document.body)