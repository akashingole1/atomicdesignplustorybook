import React from 'react'
import CardList  from './CardList';

export default {
  title: 'organisms/CardList',
  component: CardList,
}

function Template(args) {
  return <CardList {...args} />
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

export const CardListComponent = Template.bind({})
CardListComponent.args = {
  ...data,
}
