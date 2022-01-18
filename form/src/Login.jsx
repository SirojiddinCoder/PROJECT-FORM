import React from 'react';
import {Wrapper,Description,Title,InputWrapper,Input,UserIcon,Info,Button,CheckBox,Span} from './style'

function Login() {
  return (
    <Wrapper>
  
     <Description>
         Already have an account
     </Description>
     <Title>Login in Here</Title>
     <InputWrapper>
     <UserIcon />
     <Input placeholder="Username" />
     </InputWrapper>
     <InputWrapper>
     <UserIcon />
     <Input placeholder="Password" />
     </InputWrapper>
     <Info>
       <Span>
       <CheckBox type="checkbox" /> 
         Keep me logged in
       </Span>
     <Button select>Log In</Button>

     </Info>
    </Wrapper>
  );
}

export default Login;
