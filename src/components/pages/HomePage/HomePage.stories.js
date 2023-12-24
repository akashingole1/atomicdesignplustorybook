import React from 'react'
import HomePage  from './HomePage';

export default {
  title: 'pages/HomePage',
  component: HomePage,
}

function Template(args) {
  return <HomePage {...args} />
}

const data = {
    items: [
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

export const HomePageComponent = Template.bind({})
HomePageComponent.args = {
  ...data,
}
