import React from 'react'

function LifeLessonsSection({ heading, bodyText, sources }) {
    return (
        <div className="container p-4 text-align-justify life-lesson-section mt-5">
          <h3
            className="text-center text-warning fw-bolder"                               
            dangerouslySetInnerHTML={{ __html: heading }}
          />
          <hr className="" />
          <p
            className=""
            dangerouslySetInnerHTML={{ __html: bodyText }}
          />
          <div dangerouslySetInnerHTML={{ __html: sources }} />
        </div>
      );
}

export default LifeLessonsSection