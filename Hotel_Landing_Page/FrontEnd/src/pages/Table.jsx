import React from 'react';
import { Add, Remove } from "@material-ui/icons";
import Navbar from '../components/Navbar';
import { styled } from 'styled-components';
import Footer from '../components/Footer';
import {TableItems} from "../data";
import { laptop, tablet } from '../responsive';

const UpperContainer = styled.div`
    width: 100%;
    height: 20vh;
    background: linear-gradient(rgba(55, 61, 32, 0.6), rgba(55, 61, 32, 0.6)),
    url("/images/10.jpg") no-repeat center center/cover;
`;

const LowerContainer = styled.div`
  ${'' /* margin-top: 11rem; */}
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  ${'' /* width: 100vw; */}
  ${'' /* height: 100vh; */}
  padding: 0rem 1rem;
  ${tablet({flexDirection: "column"})}
`;

const Title = styled.h1`
  font-weight: 300;
  background: #373d20;
  font-size: 2.5rem;
  color: white;
  padding: 1.5rem 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  ${'' /* ${tablet({marginTop: "18.4rem"})} */}
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
`;

const TopButton = styled.button`
  ${'' /* padding: 10px; */}
  font-weight: 600;
  font-size: 1.5rem;
  cursor: pointer;
  background-color: #373d20;
  color: white;
  margin-left: 1rem;
  border: none;
  padding: 1.5rem 3rem;
  &:hover {
    background-color: #717744;
    transition: all 0.3s linear;
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: white;
`

const TopTexts = styled.div`
`;

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0rem 1rem;
`;

const Left = styled.div`
  ${'' /* height: 65vh; */}
  width: 65vw;
  display: flex;
  order: 1;
  flex-direction: column;
  ${'' /* justify-content: space-between; */}
  ${tablet({width: "100%", order: "2"})}
`;

const Info = styled.div`
  flex: 3;
  margin-bottom: 1.5rem;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 20rem;
  height: 15rem;
`;

const Details = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;
const ProductCategory = styled.span``;
const ProductPrice = styled.span``;

const ProductAttributesColor1 = styled.span`
  font-size: 2.5rem;
  font-weight: 600;
`;

const ProductAttributesColor2 = styled.span`
  font-size: 2rem;
  ${'' /* font-weight: 600; */}
  color: #373d20;
  ${'' /* margin-left: 10 px; */}
`

const PriceDetail = styled.span`
  ${'' /* flex: 1; */}
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  ${'' /* margin-bottom: 20px; */}
`;

const ProductAmount = styled.div`
  font-size: 2.4rem;
  margin: .5rem;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: .1rem;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  order: 2;
  ${'' /* align-items: center; */}
  height: 48vh;
  width: 25.75vw;
  border: .1px solid lightgray;
  border-radius: 1rem;
  padding: 1.5rem 4rem;
  margin-bottom: 2.5rem;
  ${laptop({height: "40vh"})}
  ${tablet({height: "31vh", width: "100%", order: "1"})}
`;

const SummaryTitle = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  font-size: 2rem;
`;

const SummaryItem = styled.div`
  margin: 2.5rem 0rem;
  display: flex;
  justify-content: space-between;
  font-weight: 500;
  font-size: 2rem;
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const OrderButton = styled.button`
  width: 100%;
  padding: 1rem;
  font-weight: 600;
  font-size: 1.5rem;
  cursor: pointer;
  background-color: #373d20;
  color: white;
  margin-left: 1rem;
  border: none;
  margin: auto;
  ${tablet({width: "30%"})}
  &:hover {
    background-color: #717744;
    transition: all 0.3s linear;
  }
`;

const Table = () => {
      return (
        <>
    <UpperContainer>
      <Navbar/>
    </UpperContainer>
    <LowerContainer>
    <Title>Your Table</Title>
            <Top>
              <TopButton> <Link href="/menu"> Go To Menu </Link> </TopButton>
            </Top>
        <Wrapper>


            <Left>
                  {TableItems.map((curElem)=>{
                    const {id,img,title,price,category} = curElem;
                    return(
              <Info key={id}>
                  <Product>
                  <ProductDetail>

                    <Image src={img}/>
                    <Details>
                      <ProductName><b> <ProductAttributesColor1> Item: </ProductAttributesColor1> </b> <ProductAttributesColor2> {title} </ProductAttributesColor2> </ProductName>

                      <ProductCategory><b> <ProductAttributesColor1> Category: </ProductAttributesColor1> </b> <ProductAttributesColor2> {category} </ProductAttributesColor2> </ProductCategory>

                      <ProductPrice><b> <ProductAttributesColor1> Price: </ProductAttributesColor1> </b> <ProductAttributesColor2> Rs {price} </ProductAttributesColor2> </ProductPrice>
                    </Details>

                  </ProductDetail>
                  
                  <PriceDetail>
                    <ProductAmountContainer>
                      <Add/>
                      <ProductAmount>1</ProductAmount>
                      <Remove/>
                    </ProductAmountContainer>
                  </PriceDetail>
                  
                </Product>
                <Hr/>
              </Info>
                    )
                  })
                  }
            </Left>

                  <Right>
                <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                <SummaryItem>
                  <SummaryItemText>Subtotal</SummaryItemText>
                  <SummaryItemText> <ProductAttributesColor2> Rs 50 </ProductAttributesColor2> </SummaryItemText>
                </SummaryItem>
                <SummaryItem>
                  <SummaryItemText>Item Discount</SummaryItemText>
                  <SummaryItemText> <ProductAttributesColor2> Rs - 0 </ProductAttributesColor2> </SummaryItemText>
                </SummaryItem>
                <Hr/>
                <SummaryItem>
                  <SummaryItemText>Total</SummaryItemText>
                  <SummaryItemText> <ProductAttributesColor2> Rs 50 </ProductAttributesColor2> </SummaryItemText>
                </SummaryItem>
                <OrderButton>ORDER NOW</OrderButton>
              </Right>

        </Wrapper>
        <Footer/>
        </LowerContainer>
        </>
  )
};

export default Table;
