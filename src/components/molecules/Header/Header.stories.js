import React from 'react'
import Header  from './Header';

export default {
  title: 'molecules/Header',
  component: Header,
}

function Template(args) {
  return <Header {...args} />
}

const data = {}

export const HeaderComponent = Template.bind({})
HeaderComponent.args = {
  ...data,
}
