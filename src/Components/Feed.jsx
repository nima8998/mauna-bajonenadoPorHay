import React from 'react';
import NavBar from './NavBar'
import ItemDetailContainer from '../container/ItemDetailContainer'
import ItemListContainer from '../container/ItemListContainer'
import { BrowserRouter, Switch, Route } from "react-router-dom";


import '../css/Feed.css'

export default function Feed() {
    return (

            <div className="Feed">
                <BrowserRouter>
                    <NavBar />

                    <Switch>

                        <Route path='/item/:id/:paramTitle/:paramPrice/:paramStock/:paramImg/:paramDesc'>
                            <ItemDetailContainer/>
                        </Route>

                        <Route path='/feed'>
                            <ItemListContainer/>
                        </Route>

                        <Route path='/:paramCategory'>
                            <ItemListContainer/>
                        </Route>
                    </Switch>    
                </BrowserRouter>   
            </div>
    )
}
