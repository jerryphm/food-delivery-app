import React from 'react'

function Helmet({children}) {
   document.title = `Food ordering app - ${children}`
  return (
    <div>{children}</div>
  )
}

export default Helmet