import React from 'react';
import NavBar from './NavBar'
import { ItemListContainer }  from '../container/ItemListContainer.jsx'

import '../css/Feed.css'

export default function Feed() {
    return (
        <div className="Feed">
            <NavBar />
            <div className="Feed_container">
                <ItemListContainer />
            </div>
        </div>
    )
}
