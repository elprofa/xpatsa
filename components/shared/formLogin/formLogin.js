import React from "react";
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
import axios from 'axios';
import useForm from "../../../lib/useForm";



const FormLogin = (props) => {
  const router=useRouter();
  const { texte, backgroundcolor, color, icon } = props;

  const {inputs,handleChange,clearForm,resetForm}=useForm({
    username:"",
    password:"",
  });


  console.log(axios);

  const getJwt=(username,password)=>{

    // Request API.
    axios
    .post('https://www.xpatsa.online/auth/local', {
      identifier: username,
      password: password,
    })
    .then(response => {
      // Handle success.

      console.log('Elprofa vous félicite,connexion reussie avec succès!');
      // console.log('User profile', response.data.user);
      // console.log('User token', response.data.jwt);
      console.log(response);

      // Set
      setCookie(null, 'jwt', response.data.jwt, {
        maxAge: 12 * 30 * 24 * 60 * 60,
        path: '/',
      });
      setCookie(null, 'strapi-user', response.data.user.id, {
        maxAge: 12 * 30 * 24 * 60 * 60,
        path: '/',
      });

    })
    .catch(error => {
      // Handle error.
      //  console.log('Erreur inattendue:', error.response);
      // error1=error.response.data.message;
      console.log(error)
    });
  }

  const handleSubmit= async (e)=>{
      e.preventDefault();
      console.log(e);

      // console.log(inputs);
      //const res=await createProduct();
      const res=await getJwt(inputs.username,inputs.password);
      console.log(res);
      resetForm();
      router.push('/dashboard');
  }

  
  return (
    <FormLoginStc
    method="POST"
    onSubmit={handleSubmit}>
      <Titre texte="Se c onnecter " color="#007bff" />
      <Form>
        <InputGroup name="username" valueInput={inputs.username} typeInput="texte" change={handleChange} textLabel="ADRESSE E-MAIL OU NUMERO DE TELEPHONE" />
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
