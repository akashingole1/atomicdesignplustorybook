import React from 'react'
import { HomeComponent } from '../../templates/Home/Home.stories'

function HomePage() {
    const data = [
            {
                title: 'Like',
                btnText: 'Subscribe'
            },
            {
                title: 'Share',
                btnText: 'Subscribe'
            },
            {
              title: 'Like',
              btnText: 'Subscribe'
          },
          {
              title: 'Share',
              btnText: 'Subscribe'
          },
          {
            title: 'Like',
            btnText: 'Subscribe'
        },
        {
            title: 'Share',
            btnText: 'Subscribe'
        },
        {
          title: 'Like',
          btnText: 'Subscribe'
      },
      {
          title: 'Share',
          btnText: 'Subscribe'
      },
      {
        title: 'Like',
        btnText: 'Subscribe'
    },
    {
        title: 'Share',
        btnText: 'Subscribe'
    },
    {
      title: 'Like',
      btnText: 'Subscribe'
    },
    {
      title: 'Share',
      btnText: 'Subscribe'
    },
    {
      title: 'Share',
      btnText: 'Subscribe'
    },
    {
      title: 'Like',
      btnText: 'Subscribe'
    },
    {
      title: 'Share',
      btnText: 'Subscribe'
    }
  ]
  return (
      <HomeComponent cards={data}/>
  )
}

export default HomePage