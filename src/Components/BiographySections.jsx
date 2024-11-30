import React from 'react';

function BiographySections({ heading, bodyText, sources }) {
  return (
    <div className="container-fluid p-sm-2  bio-section mt-5 p-lg-5 ">
      <h2 className='fw-bolder p-3 text-success text-center'>{heading}</h2>
       <hr className='text-warning' />
      <p className='pt-2 text-center lh-lg'>{bodyText}</p>
      <div dangerouslySetInnerHTML={{ __html: sources }} />
    </div>
  );
}

export default BiographySections;
