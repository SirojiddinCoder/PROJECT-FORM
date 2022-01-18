import styled from "styled-components";
import {ReactComponent as User} from './icon/user.svg';

export  const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color:#2A393E;
width:100%;
height: 100vh;
color: #fff;
`

export const Wrapper = styled.div`
width: 360px;
height: 420px;
border:  2px solid #445859;
margin: 10px; 
border-radius: 5px;
display: flex;
/* justify-content: center; */
flex-direction: column;
align-items: center;
padding: 35px;
box-sizing: border-box;


`
export const Description = styled.div`
color: #fff;
font-weight: 600;
font-size: 20px;
margin-top: 20px;

`

export const Title = styled.div`
color: #E7C961;
font-size: 28px;

`
export const InputWrapper = styled.div`
display: flex;
width: 100%;

`

export const Input = styled.input`
width: 100%;
height: 45px;
border-radius: 4px;
background-color: rgba(63, 95, 117, .7);
border: 1px solid #354545;
margin-top: 20px;
outline: none;
color: white;

::placeholder{
    padding-left: 15px;
    color: white;
    font-size: 14px;
}
padding-left: 15px;

`

export const UserIcon = styled(User)`
position: absolute;
width: 20px;
margin-top: -297px;
margin-left: 5px;

`
export const Button = styled.button`
width: 123px;
height: 38px;
background-color: #00908D;
color: white;
font-weight: 700;
font-size: 22px;
margin-top:${(props)=>props.select? "0px": "20px"};
margin-left: auto;
cursor: pointer;
border: 0;
outline: none;
border-radius: 4px;

`

export const Info = styled.div`
justify-content: center;
align-items: center;
display: flex;
width: 100%;
margin-top: 20px;


`
export const CheckBox = styled.input`
width: 30px;
height: 30px;
background-color:  rgba(63, 95, 117, .2);
border: 1px solid #354545;
margin-right: 5px;



`
export const Span = styled.span`
display: flex;
width: 111px;
justify-content: center;
align-items: center;

`