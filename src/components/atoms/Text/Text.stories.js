import React from 'react'
import Text  from './Text';

export default {
  title: 'atoms/Text',
  component: Text,
}

function Template(args) {
  return <Text {...args} />
}

const data = {
    label: 'Akash Ingole',
    type: 'subtitle'
}
const headingdata = {
  label: 'Akash Ingole',
  type: 'heading'
}
export const Heading = Template.bind({})
Heading.args = {
  ...headingdata,
}

export const SubTitle = Template.bind({})
SubTitle.args = {
  ...data,
}
