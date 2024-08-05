import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import { Add, Remove } from "@mui/icons-material";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { useEffect, useState } from "react";
import { userRequest } from "../../requestMethods";
import { useNavigate } from "react-router-dom";
// import "dotenv/config";
// require('dotenv').config()

const KEY="pk_test_51PiYXFRt6yOhAUvMg1VCJt3yDnRq7Okz2dDobEF3wphn2pQUQaZ0IcgXB4Id2d8FdKrJKq6OL68V0USeCbhtp2kL00KlQ7ueMP";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 1;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;
const ProductDetails = styled.div`
  display: flex;
  flex: 2;
`;
const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border:0.5px solid lightgray;
  border-radius:10px ;
  padding: 20px;
  height:50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;
const SummaryItem = styled.div`
margin:30px 0px;
display: flex;
justify-content: space-between;
font-weight: ${props=>props.type === "total" && "500"};
font-size: ${props=>props.type === "total" && "24px"};
`;
const SummaryItemText = styled.div`

`;
const SummaryItemPrice = styled.div`

`;
const SummaryButton = styled.button`
  width:100%;
  padding:10px;
  background-color: black;
  color: white;
  font-weight: 600
`;

const Cart = () => {
  const cart =useSelector(state=>state.cart)
  const navigate =useNavigate()

    const [stripeToken,setStripeToken] = useState(null)

    const onToken=(token)=>{
            setStripeToken(token)
    }

    useEffect(() => {
      const  makeRequest = async ()=>{
        try {
          const res = await  userRequest.post("/checkout/payment",
            {
            tokenId:stripeToken.id,
            amount:cart.total*100,

          })
          console.log(res.data)
          navigate("/success",{data:res.data})
        } catch (err) {
            console.log(err)
        }
      }
      stripeToken && makeRequest();
    }, [stripeToken,navigate])

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>Your Bag</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopText>Shopping Bag(2)</TopText>
          <TopText>Your wishlist (0)</TopText>
          <TopButton type="filled">CHECKOUT</TopButton>
        </Top>
        <Bottom>
          <Info>
            {cart.products.map((product)=>(
              <Product>
              <ProductDetails>
                <Image src={product.img} />
                <Details>
                  <ProductName>
                    <b>Product:</b>{product.title}
                  </ProductName>
                  <ProductId>
                    <b>ID:</b>{product._id}
                  </ProductId>
                  <ProductColor color={product.color} />
                  <ProductSize>
                    <b>Size:</b>{product.size}
                  </ProductSize>
                </Details>
              </ProductDetails>
              <PriceDetails>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>{product.quantity}</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>Rs {product.price * product.quantity}</ProductPrice>
              </PriceDetails>
            </Product>
  ))}
            <Hr />
          </Info>
          <Summary>
            <SummaryTitle>Order Summary</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>SubTotal</SummaryItemText>
              <SummaryItemText>Rs {cart.total}</SummaryItemText>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemText>Rs 3.5</SummaryItemText>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemText>Rs -3.5</SummaryItemText>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText >Total</SummaryItemText>
              <SummaryItemText>Rs {cart.total}</SummaryItemText>
            </SummaryItem>
            <StripeCheckout 
            name='baroon' 
            image="https://photutorial.com/wp-content/uploads/2023/04/Featured-image-AI-image-generators-by-Midjourney.png"
            billingAddress
            shippingAddress
            description={`Your total is Rs ${cart.total}`}
            amount={cart.total*100}
            token={onToken}
            stripeKey={KEY}
            >
            <SummaryButton>CHECKOUT NOW</SummaryButton>
            </StripeCheckout>
            </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
