import styled from "styled-components";
import {mobile} from "../responsive";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/apiCalls";


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
      background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 30%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
  font-size: 18px;
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-top: 10px;
  &:hover{
    background-color: #095b63;
  }
  &:disabled{
    color: #eb1919;
    cursor: not-allowed;
  }
`;
const Link = styled.a`
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`;

const Error = styled.span`
  color: red;
`

const Login = () => {
  const [username ,setUsername] =useState("")
  const [password ,setPassword] =useState("")
  const dispatch = useDispatch()
  const {isFetching ,error} =useSelector((state)=>state.user); 

    console.log("is fetching and error",isFetching,error)
  const handleClick=(e)=>{
    e.preventDefault();
    console.log("e ",username,password)
    login(dispatch,{username,password})

  }

  return (
    <Container>
      <Wrapper>
        <Title>Create a Account</Title>
        <Form>
          <Input type="text" placeholder=" username" onChange={(e)=>setUsername(e.target.value)} />
          <Input type="text" placeholder="password" onChange={(e)=>setPassword(e.target.value)}/>
          <Button onClick={handleClick} disabled={isFetching}>LOGIN</Button>
          {error && <Error>Something went wrong...</Error>}
          <Link>Forget Password</Link>
          <Link>Create a new Account</Link>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Login