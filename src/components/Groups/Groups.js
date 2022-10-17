import React, { useEffect } from 'react'

import BoardSection from '../Board/Board-Section'

import classes from '../Board/Board.module.css'

import Card from './Card'




function Groups({data, error, status}) {

  const [...groupData] = data && data.filter(user =>  user.website.split(".")[1])


  return (
    <BoardSection>
   
          {<>
            <div className={classes.title__wrapper}>
                <p className={classes.title}>Group List</p>
            </div>
            {status === 'error' && <div>{error}</div>}
            {status === 'fetching' && <div>Loading...</div>}
            {status === 'fetched' && (
              <>
              {data && data.map(user => <Card key={user.id} user={user} groupData={groupData}/>)}
              </>
            )}
            </>
          }
        </BoardSection>
  )
}

export default Groups