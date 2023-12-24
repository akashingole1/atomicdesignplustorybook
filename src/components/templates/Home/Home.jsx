import React from 'react'
import Header from '../../molecules/Header/Header'
import CardList from '../../organisms/CardList/CardList'

function Home({cards}) {
  return (
    <div>
        <Header/>
        <CardList items={cards}/>
    </div>
  )
}

export default Home