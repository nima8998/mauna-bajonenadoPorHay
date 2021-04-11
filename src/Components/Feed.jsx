import React from 'react';
import '../css/Feed.css'
import NavBar from './NavBar'
import { ItemListContainer }  from '../container/ItemListContainer.jsx'

export default function Feed() {
    return (
        <div className="Feed">
            <NavBar />
            <ItemListContainer greeting="Bajoneando por hay" />
        </div>
    )
}
