import React from 'react'
import Card  from './Card';

export default {
  title: 'molecules/Card',
  component: Card,
}

function Template(args) {
  return <Card {...args} />
}

const data = {
  title: "Happy New Year",
  btnText: "Surprise"
}

export const CardComponent = Template.bind({})
CardComponent.args = {
  ...data,
}
