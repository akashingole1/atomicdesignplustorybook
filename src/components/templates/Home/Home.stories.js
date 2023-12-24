import React from 'react'
import Home  from './Home';

export default {
  title: 'templates/Home',
  component: Home,
}

function Template(args) {
  return <Home {...args} />
}

const data = {
    cards: [
        {
            title: 'Like',
            btnText: 'Subscribe'
        },
        {
            title: 'Share',
            btnText: 'Subscribe'
        }
    ]
}

export const HomeComponent = Template.bind({})
HomeComponent.args = {
  ...data,
}
