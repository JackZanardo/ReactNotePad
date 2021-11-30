import React from 'react';
import {Route, Switch} from "react-router-dom";
import {Home, Create, Edit} from '../pages';

export function Router(props){
    const {notes, setNotes} = props.value;


    return(
        <Switch>
            <Route path='/' exact={true}>
                <Home value={{notes, setNotes}} />
            </Route>
            <Route path='/Create'>
                <Create value={{notes, setNotes}} />
            </Route>
            <Route path='/Edit/:id'>
                <Edit value={{notes, setNotes}} />
            </Route>
            <Route>
                <div>
                    404 - not found!
                </div>
            </Route>
        </Switch>
    );
}