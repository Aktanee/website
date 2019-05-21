import React from 'react'
import styled from 'styled-components'

import { menuHeight } from '../../enums/styles'

const title = `Fullstack Developer`

const name = `Antoine Renault`

// const Photo = `Triangular thingy`

const Container = styled.div`
  display: grid;
  grid-template-areas: 
    'logo name' 
    'logo title';
  min-height: 50vh;
  width: 100%;
  padding-top: ${menuHeight};
`

const LogoContainer = styled.div`
  background-color: red;
  grid-area: logo;
`

const Name = styled.h1`
  grid-area: name;
`

const JobTitle = styled.h2`
  grid-area: title;
`

const Title = () => {
  return (
    <Container>
      <LogoContainer></LogoContainer>
      <Name>
        {name}
      </Name>
      <JobTitle>
        {title}
      </JobTitle>
    </Container>
  )
}

export default Title