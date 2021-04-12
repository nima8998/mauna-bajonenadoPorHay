import React from 'react';
import '../css/Feed.css'
import NavBar from './NavBar'
import { ItemListContainer }  from '../container/ItemListContainer.jsx'
import Hero from './Hero'

export default function Feed() {
    return (
        <div className="Feed">
            <NavBar />
            <div className="Feed_container">
                <ItemListContainer greeting="Bajoneando por hay" />
                <Hero/>
            </div>
        </div>
    )
}
