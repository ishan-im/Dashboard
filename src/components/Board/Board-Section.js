import React from 'react'

import classes from "./Board.module.css";

function BoardSection({children}) {
    return (
        <div className={classes.Board__Wrapper}>
        <div className={classes.Board__Container}>
            {children}
        </div>
      </div>
    )
}
export default BoardSection