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
import {useRouter} from 'next/router';
import useForm from "../../../lib/useForm";
import TestContext from '../../../ContextAPI/TestContext';



const SIGNIN_MUTATION=gql`
mutation SIGNIN_MUTATION($identifier:String!,$password:String!)
{ 
	login(input:{identifier:$identifier,password:$password})
  { 
  	jwt
    user
    { 
    	id
    }
  }
}
`;


const FormLogin = (props) => {
  const { texte, backgroundcolor, color, icon } = props;

  const MyCtx = useContext(TestContext);

  const {inputs,handleChange,clearForm,resetForm}=useForm({
    identifier:"",
    password:"",
  });

  const [login,{data,error,loading}] = useMutation(SIGNIN_MUTATION,{
    variables:inputs
  });
  const handleSubmit= async (e)=>{
      e.preventDefault();
      console.log(e);
      const res=await login();
      console.log(res);
      console.log('Elprofa vous félicite,connexion reussie avec succès!');

      // Set
      setCookie(null, 'jwt', res.data.login.jwt, {
        maxAge: 12 * 30 * 24 * 60 * 60,
        path: '/',
      });
      setCookie(null, 'strapi-user', res.data.login.user.id, {
        maxAge: 12 * 30 * 24 * 60 * 60,
        path: '/',
      });

      const cookies = parseCookies();

      MyCtx.navBarItem.NbSetItem6("Mon compte");
      MyCtx.navBarItem.NbSetLienItem6("/dashboard");
      MyCtx.navBarItem.NbSetItem7("X");
      MyCtx.navBarItem.NbSetLienItem7("");

      resetForm();
  }

  if(loading){ return <p>Loading encours</p> }
  if(error){ return <p>Error</p> }
  return (
    <FormLoginStc
    method="POST"
    onSubmit={handleSubmit}>
      <Titre texte="Se c onnecter " color="#007bff" />
      <Form>
        <InputGroup name="identifier" valueInput={inputs.identifier} typeInput="texte" change={handleChange} textLabel="ADRESSE E-MAIL OU NUMERO DE TELEPHONE" />
        <InputGroup name="password" valueInput={inputs.password} typeInput="password" change={handleChange} textLabel="MOT DE PASSE" />
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
