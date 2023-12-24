import React from 'react'
import Logo  from './Logo';

export default {
  title: 'atoms/Logo',
  component: Logo,
}

function Template(args) {
  return <Logo {...args} />
}

const data = {}

export const LogoComponent = Template.bind({})
LogoComponent.args = {
  ...data,
}
