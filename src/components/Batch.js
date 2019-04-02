import React from 'react';

const Batch = (props) => {

  return (
    <div>
      <p>{ props.batchName }</p>
      <img src={props.dogImg} alt='pup'/>
    </div>
  )
}

export default Batch
