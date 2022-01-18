import React from 'react';
import {Wrapper,Description,Title,InputWrapper,Input,UserIcon,Button} from './style'

function Register() {
  return (
    <Wrapper>
  
  <Description>
         Don't have an account
     </Description>
     <Title>Register Now</Title>
     <InputWrapper>
     <UserIcon />
     <Input placeholder="Username" />
     </InputWrapper>
     <InputWrapper>
     <UserIcon />
     <Input placeholder="Password" />
     </InputWrapper>
    <Button>Log In</Button>
        </Wrapper>
  );
}

export default Register;
