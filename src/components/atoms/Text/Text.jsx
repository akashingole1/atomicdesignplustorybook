import React from 'react'

function Text({label, type = 'heading'}) {
  if(type === 'subtitle') {
    return <span>{label}</span>
  }
  return (
    <h1>{label}</h1>
  )
}

export default Text