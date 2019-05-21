import React from 'react'
import styled from 'styled-components'

import { menuHeight } from '../../enums/styles'

const Container = styled.header`
  background-color: green;
  display: grid;
  height: ${menuHeight};
  justify-content: flex-end;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`

const TriggerButton = styled.button`
  max-width: 50px;
`

const Menu = () => {
  return (
    <>
      <Container>
        <TriggerButton
          onClick={() => console.log('triggerButton')}
        >Button</TriggerButton>
      </Container>
    </>
  )
}

export default Menu