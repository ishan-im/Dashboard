import React, { Fragment } from "react";
import classes from "./Board.module.css";
import Card from "../Card/Card";

// import { useFetch } from "../../lib/useFetch";
import BoardSection from "./Board-Section";
import {Outlet,} from 'react-router-dom'
function Board({data, error, status} ) {

 
  // const {data, error, status} = useFetch('https://jsonplaceholder.typicode.com/users')


 

  return (
    <Fragment>
      <BoardSection>
   
          {<>
            <div className={classes.title__wrapper}>
                <p className={classes.title}>User List</p>
            </div>
            {status === 'error' && <div>{error}</div>}
            {status === 'fetching' && <div>Loading...</div>}
            {status === 'fetched' && (
              <>
              {data && data.map(user => <Card key={user.id} user={user}/>)}
              </>
            )}
            </>
          }
        </BoardSection>
        <Outlet/>
    </Fragment>
  );
}

export default Board;
