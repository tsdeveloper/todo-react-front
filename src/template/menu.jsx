import React from 'react';
import fontawesome from '@fortawesome/fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fas } from '@fortawesome/free-solid-svg-icons'
// import { far } from '@fortawesome/free-regular-svg-icons'
// import { fab } from '@fortawesome/free-brands-svg-icons'

// // Add both three icon sets
// library.add(fas, far, fab)

// console.log(Object.keys(library.definitions.fas))
// console.log(Object.keys(library.definitions.far))
// console.log(Object.keys(library.definitions.fab))


export default  props =>  (
 
    <div className="container-fluid">
      
    <nav className='navbar navbar-expand-lg navbar-light bg-light d-flex align-content-center justify-content-start'>
    <FontAwesomeIcon icon="address-book" size="1x" />
        <a href="#" className="navbar-brand">Navbar</a>    
    </nav>

    </div>
 )   
