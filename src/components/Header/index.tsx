import React from 'react'
import { ContainerHeader, TitleName, ContainerFlex, Button } from './style'
import { Logo } from '../logo'

export function Header() {
  return (
    <ContainerHeader>
      <ContainerFlex>
        <Logo />
        <TitleName>{"< Rafael Sberse />"}</TitleName>
      </ContainerFlex>
      <ContainerFlex>
        <Button>
          Home
        </Button>
        <Button>
          About
        </Button>
        <Button>
          Projects
        </Button>
        <Button>
          Contact
        </Button>
      </ContainerFlex>
    </ContainerHeader>
  )
}