import React from 'react'

function BiographySections({heading, bodyText}) {
  return (
    <div className="container">
         <h4>{heading}</h4>
         <p>{bodyText}</p>
    </div>
  )
}

export default BiographySections