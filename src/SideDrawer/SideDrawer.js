import React from 'react';

import './SideDrawer.css';
const availableRange=require('../Config.json').range;
const SideDrawer = props =>{
    let drawerClasses = 'side-drawer';
    if(props.show){
        drawerClasses='side-drawer open';
    }
    return(
        <nav className={drawerClasses}>
            <ul>
            {availableRange.map((range, index) => {
        return <li key={index} onClick={()=>props.getData(range.value)}>{range.name}</li>
      })}
            </ul>
        </nav>
    )
};
export default SideDrawer;