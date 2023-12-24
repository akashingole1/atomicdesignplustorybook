import React from 'react'
import Card from '../../molecules/Card/Card'

function CardList({items}) {

  return (
    <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}> 
        {items.length > 0 ? items.map((el, idx) => (
            <Card key={idx} title={el.title} btnText={el.btnText}/>
        )) : null}
    </div>
  )
}

export default CardList