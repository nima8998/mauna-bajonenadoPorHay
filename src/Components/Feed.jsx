import React from 'react';
import NavBar from './NavBar'
import ItemDetailContainer from '../container/ItemDetailContainer'
// import ItemListContainer from '../container/ItemListContainer'

import '../css/Feed.css'

export default function Feed() {
    return (

            <div className="Feed">
                <NavBar />
                <ItemDetailContainer/>
                {/* <ItemListContainer/> */}
            </div>
    )
}
