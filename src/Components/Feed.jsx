import React from 'react';
import NavBar from './NavBar'
import ItemDetailContainer from '../container/ItemDetailContainer'

import '../css/Feed.css'

export default function Feed() {
    return (
        <div className="Feed">
            <NavBar />
            <div className="Feed_container">
                <ItemDetailContainer/>
            </div>
        </div>
    )
}
