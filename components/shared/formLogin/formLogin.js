import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Form } from "reactstrap";
import FormLoginStc from "./formLogin.stc";
import Titre from "../Titre/Titre";
import InputGroup from "../inputGroup";
import Bouton from "../Bouton/Bouton";
import gql from "graphql-tag";
import { useMutation, useQuery } from "@apollo/client";
import { parseCookies, setCookie, destroyCookie } from 'nookies';
import Router from 'next/router';
import useForm from "../../../lib/useForm";
import TestContext from '../../../ContextAPI/TestContext';
import PropTypes from 'prop-types'
import useUser from "../../../lib/useUser";
import { useState } from "react";
import fetchJson from '../../../lib/fetchJson'
import { withIronSession } from "next-iron-session";


const SIGNIN_MUTATION=gql`
mutation SIGNIN_MUTATION($identifier:String!,$password:String!)
{ 
	login(input:{identifier:$identifier,password:$password})
  { 
  	jwt
    user
    { 
    	id
      username
      email
      role
      { 
        name
      }
    }
  }
}
`;


const FormLogin = (props) => {
  const { texte, backgroundcolor, color, icon, errorMessage, onSubmit } = props;

  const {inputs,handleChange,clearForm,resetForm}=useForm({
    identifier:"",
    password:"",
  });

  const [login,{data,error,loading}] = useMutation(SIGNIN_MUTATION,{
    variables:inputs
  });

  const { mutateUser } = useUser({
    redirectTo: '/dashboard',
    redirectIfFound: true,
  })

  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()

    const res=await login();

    if(res.data){

      const body = {
        xPatsaId:res.data.login.user.id,
        xPatsaEmail: res.data.login.user.email,
        xPatsaUsername: res.data.login.user.username,
        xPatsaPassword: inputs.password,
        xPatsaToken:res.data.login.jwt,
        xPatsaRole:res.data.login.user.role.name
        
      }
      
      try {
        await mutateUser(
          fetchJson('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
          })
        )
      } catch (error) {
        console.error('An unexpected error happened:', error)
        setErrorMsg(error.data.message)
      }
    }
  }

  if(loading){ return <p>Loading encours</p> }
  if(error){ return <p>Error</p> }

  return (
    <FormLoginStc
    method="POST"
    onSubmit={handleSubmit}>
      <Titre texte="Se connecter " color="#007bff" />
      {errorMsg && <p className="error">{errorMsg}</p>}
      <Form>
        <InputGroup name="identifier" myClass="identifier" required valueInput={inputs.identifier} typeInput="texte" change={handleChange} textLabel="ADRESSE E-MAIL OU NUMERO DE TELEPHONE" />
        <InputGroup name="password" myClass="password" required valueInput={inputs.password} typeInput="password" change={handleChange} textLabel="MOT DE PASSE" />
        <Row>
          <Col id="left" lg={6}>
            <a href="#elprofa.com">Mot de passe oublié ?</a>
          </Col>
          <Col id="right" lg={6}>
            <Bouton texte="SE CONNECTER" type="submit" on backgroundcolor="#007bff" />
          </Col>
        </Row>
      </Form>
    </FormLoginStc>
  );
};

export default FormLogin;


FormLogin.propTypes = {
  errorMessage: PropTypes.string,
  onSubmit: PropTypes.func,
}

