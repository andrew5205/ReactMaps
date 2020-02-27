import React from 'react';

import GoogleMapApp from './components/GoogleMap'


import {Router, Redirect} from '@reach/router';

import WeatherFetch from './components/WeatherFetch'
import Todos from './components/Todos'


import Items from './components/ItemsDisplay'
import NewItem from './components/NewItem'
import Item from './components/Item'
import EditItem from './components/EditItem'

function App() {
  return (
    <div>
      <GoogleMapApp class="Map"/>
      <WeatherFetch/>
        <Todos/>
        <Router>
          <Items path='items'/>
          <NewItem path='items/new'/>
          <Item path='items/:num'/>
          <EditItem path='items/:num/edit'/>
          <Redirect from='/' to='/items' noThrow/>
        </Router>
    </div>
  );
}

export default App;


