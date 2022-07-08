import styled from "styled-components"
import { Link } from "react-router-dom"
import axios from "axios";
import {useNavigate} from 'react-router-dom';
import  { useState } from  "react"
import { ThreeDots } from "react-loader-spinner";

export default function SignUp(){
    
    const navigate = useNavigate();
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const [street, setStreet] = useState("")
    const [number, setNumber] = useState("")
    const [neighborhood, setNeighborhood] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")

    const [disableButton,setDisableButton] = useState(false)


    function SubmitSignUp(event){
        event.preventDefault();
        
        setDisableButton(true);
        
        const infoSignUp =
            {
                email,
                name,
                password,
                passwordConfirmation,
                street,
                number,
                neighborhood,
                city,
                state
            }
        

        const promise = axios.post("http://localhost:5000/sign-up", infoSignUp)
        
        promise
        .then(res =>{ 
            navigate("/sign-in");
        })
        .catch(err=> {alert("Erro, preencha corretamente os dados");
        setDisableButton(false);});

    }

    return(
        <ContainerAuth>
            <h1>ÁGUA DE TRIGO</h1>
            <Form onSubmit={SubmitSignUp} >
                
                <input type="text" disabled={disableButton} placeholder="nome" value={name} onChange={e => setName(e.target.value)} required/>
                <input type="email" disabled={disableButton} placeholder="email"  value={email} onChange={e => setEmail(e.target.value)} required/>
                <input type="text" disabled={disableButton} placeholder="rua" value={street} onChange={e => setStreet(e.target.value)} required/>
                <input type="text" disabled={disableButton} placeholder="número" value={number} onChange={e => setNumber(e.target.value)} required/>
                <input type="text" disabled={disableButton} placeholder="bairro" value={neighborhood} onChange={e => setNeighborhood(e.target.value)} required/>
                <input type="text" disabled={disableButton} placeholder="cidade" value={city} onChange={e => setCity(e.target.value)} required/>
                <input type="text" disabled={disableButton} placeholder="estado" value={state} onChange={e => setState(e.target.value)} required/>
                <input type="password" disabled={disableButton} placeholder="senha" value={password} onChange={e => setPassword(e.target.value)} required/>
                <input type="password" disabled={disableButton} placeholder="confirmação de senha" value={passwordConfirmation} onChange={e => setPasswordConfirmation(e.target.value)} required/>
                <Cadastrar type="submit" disabled={disableButton}>{disableButton ? <ThreeDots color="white"/> : "Cadastrar"}</Cadastrar>
            </Form >
            <Loguese>
                <Link to="/sign-in" style={{textDecoration: 'none'}}>
                    <p>Já tem uma conta?Faça login</p>
                </Link>
            </Loguese>
        </ContainerAuth>
   )
}

const ContainerAuth = styled.div`
    width: 100%;
    height: 100vh;   
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
    background-color: #D37545;

    h1{
    font-family: 'Shippori Antique';
    font-style: normal;
    font-weight: 700;
    font-size: 50px;
    line-height: 31px;

    color: #fff5e0;

    margin-bottom: 75px;

    }
`

const Form = styled.form`
    display:flex;
    flex-direction: column;
    width: 470px;
    background-color: #D37545;
    input{
        height:6vh;
        background: ${props => props.disabled ? "grey" : "#fff5e0" };
        color: ${props => props.disabled ? "#AFAFAF" : "grey" };
        font-family: 'Lexend Deca';
        font-style: italic; 
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        margin-bottom:8px;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        ::placeholder{
            font-size: 30px;
            color: #C0C0C0;}
        }
`
const Cadastrar = styled.button`
    border: none;     
        font-family: 'Shippori Antique';
        font-style: normal;
        font-weight: 700;
        font-size: 40px;
        line-height: 26px;
        text-align: center;
        color: #D37545;
        
        display: flex;        
        justify-content: center;
        align-items: center;
        padding: 18px 122px;
        gap: 10px;        
        width: 470px;
        height: 75px;
        background: #fff5e0;
        
        border-radius: 8px;
        opacity: ${props => props.disabled ? 0.4 : 1 };

        &:hover{
            cursor:pointer;
        }
`
const Loguese = styled.div`
    margin-top:35px;
    p{
        font-family: 'Shippori Antique';
        font-style: normal;
        font-weight: 700;
        font-size: 22px;
        line-height: 18px;

        color: #fff5e0;
    }
`
