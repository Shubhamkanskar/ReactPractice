import React, { useState } from 'react'

const ShowHide = () => {
    const [show ,setShow] = useState(true);

  return (
    <div>
      {
        show ? <h1>Hello my name is shubham</h1> : ""
      }
      <button onClick={()=>setShow(!show)}>show/hide</button>
    </div>
  )
}

export default ShowHide
