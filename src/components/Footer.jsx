import { Facebook, GitHub, Instagram, LinkedIn, MailOutline, Phone, Room, Twitter } from "@mui/icons-material";
import styled from "styled-components"
import { mobile } from "../responsive";


const Container = styled.div`
display:flex;
padding-bottom: 10px;
${mobile({flexDirection: "column"})}

`;
const Left = styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
    padding:20px;
`;

const Logo = styled.h1`
    
 
`;
const Desc = styled.p`
    margin: 20px 0px;
`;
const SocialContainer = styled.div`
    display: flex;
`;
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius:50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #${(props)=>props.color};
    margin-left: 5px;

`

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({display:"none"})}

`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;


const Right =styled.div `
    flex: 1;
${mobile({backgroundColor: "#f9e3e3"})}

`;

const ContactItem= styled.div`
    margin-bottom: 28px;
    display: flex;
    align-items: center;
    
`;

const Payment  =styled.img`

`;


const Footer = () => {
  return (
    <Container>
        <Left>
        <Logo>WearMe</Logo>
        <Desc>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus iusto vitae aliquid odio facilis eaque nulla, quas quod magni inventore!</Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <LinkedIn />
          </SocialIcon>
        </SocialContainer>
        </Left>
        <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem><Room style={{marginRight:"10px"}}/> Singapore </ContactItem>
            <ContactItem><Phone style={{marginRight:"10px"}}/> +91 0000000000 </ContactItem>
            <ContactItem><MailOutline style={{marginRight:"10px"}}/> contact@baroon.dev </ContactItem>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
            
        </Right>
        
    </Container>
  )
}

export default Footer