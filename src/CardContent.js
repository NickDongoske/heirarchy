import React from 'react'




function CardContent(props){
  return (
    <h1 className="card">
          <h2>
           {props.title}
          </h2>
        </h1>
  )
}

export default CardContent;