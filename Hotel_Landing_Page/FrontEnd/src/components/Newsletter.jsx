import { Send } from "@material-ui/icons"
import styled from "styled-components"
import { lMobile, mMobile, sMobile } from "../responsive"

const Container = styled.div`
  margin-top: 3rem;
  height: 60vh;
  width: 100%;
  ${'' /* background-color:  #717744; */}
  background: linear-gradient(rgba(55, 61, 32, 0.6), rgba(55, 61, 32, 0.6)),
    url("/images/third.jpg") no-repeat center center/cover;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
  ${'' /* margin-bottom: 10px; */}
  ${lMobile({height: "40vh"})}
`

const Title = styled.h1`
  font-size: 7rem;
  margin-bottom: 2rem;
`

const Desc = styled.div`
  font-size: 2.5rem;
  font-weight: 30rem;
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  ${sMobile({width: "75%"})};
`
const InputContainer = styled.div`
  width: 50%;
  height: 4rem;
  background-color: white;  
  display: flex;
  justify-content: space-between;
  border: .1rem solid lightgray;
  ${lMobile({width: "55%"})};
  ${mMobile({width: "60%"})};
  ${sMobile({width: "75%"})};
`

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 2rem;
`

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: #373d20;
  color: white;
  cursor: pointer;
  ${lMobile({flex: "2"})};
  ${mMobile({flex: "5"})};
  ${sMobile({flex: "7"})};
  &:hover{
    background-color: #717744;
    transition: all 0.3s linear;
  }
`

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely updates from your fovourite products.</Desc>
      <InputContainer>
        <Input placeholder="Your email"/>
        <Button>
            <Send overlap="rectangular"/>
        </Button>
      </InputContainer>
    </Container>
  )
}

export default Newsletter