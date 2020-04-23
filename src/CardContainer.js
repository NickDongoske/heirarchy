import React from 'react'
import CardContent from './CardContent.js'



function CardContainer(props){
  const makeData = props.data.map(card => <CardContent {...card}/>)
  return (
    <div>
      <h1>
        {props.data.title}
      </h1>
      {makeData}
    </div>
  )
}



export default CardContainer;