import React from 'react'
import { Button } from '../../atoms/Button/Button'
import { Heading } from '../../atoms/Text/Text.stories'
import './Card.css'

function Card({title, btnText}) {
  return (
    <div className='card'>
        <Heading label={title}/>
        <Button primary size="small" label={btnText} />
    </div>
  )
}

export default Card