import React from "react";
import classes from './Header.module.css'

import {BiSearch} from 'react-icons/bi'

function Header() {
  return( 

        <header className={`${classes.Header__Wrapper} container-fluid`}>
            <div className={classes.Header__Container}>

            <div className={classes.Header__Title__Wrapper}>
                <h3>Users</h3>
                </div>

                <div className={classes.Searchbar__Wrapper}>
                    <BiSearch className={classes.Search}/>
                    <input className={classes.Header__input} placeholder='Search for Products'/>
                </div>

                <div className={classes.Header__Button__Wrapper}>
                        <button className={classes.button}>Search</button>
                    </div>
                    </div>
        </header>)
}

export default Header;
