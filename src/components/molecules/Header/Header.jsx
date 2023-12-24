import React from 'react'
import { Button } from '../../atoms/Button/Button'
import Logo from '../../atoms/Logo/Logo'
import { Heading } from '../../atoms/Text/Text.stories'
import './Header.css'

function Header() {
  return (
    <div className='storybook-header'>
        <div>
        <Logo/>
        <Heading label="Akash"/>
        </div>
        <div>
        <Button size="small" label="Log in" />
        <Button primary size="small" label="Sign up" />
        </div>
    </div>
  )
}

export default Header