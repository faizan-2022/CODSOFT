import React from 'react'
import { styled } from 'styled-components'

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    background: #262626;
    text-shadow: 0 0 1rem white;
    font-size: 2rem;
`;


const SeatAvailability = () => {
  return (
    <Container>
      Coming Soon
    </Container>
  )
}

export default SeatAvailability
