import Link from 'next/link';
import Image from 'next/image';
import { Container, Row, Col } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import gql from 'graphql-tag';
import { useMutation, useQuery } from '@apollo/client';
import CardTransactionPhotoStc from './CardTransactionPhoto.stc';
import {BsEye } from "react-icons/bs";
import { useState } from 'react';
import axios from 'axios';
import useForm from '../../../lib/useForm';

const SINGLE_TRANSACTION=gql`
   query SINGLE_TRANSACTION($id:ID!)
    { 
        transaction(id:$id)
        { 
            id
            transaction_recus
            { 
                id
                recu
                { 
                    id
                    url
                    name
                }
            }
        }
    }
`;

const UPLOAD = gql`
  mutation UPLOAD($recu: Upload!) {
    upload(file: $recu) {
      id
    }
  }
`;

const CREATE_TRANSACTION_RECU=gql`
    mutation CREATE_TRANSACTION_RECU($recu:ID!,$transaction:ID!)
    { 
        createTransactionRecu(input:{data:{recu:$recu,transaction:$transaction}})
        { 
            transactionRecu
            { 
                id
                transaction
                {
                    id
                }
            }
        }
    }
`;

export default function CardTransactionPhoto(props) {
    // variable globale state
        //   on initialise l'id de media on le stock dans un state
            const [media,setMedia]=useState(0);    // ----------------------------------------------------

        // le fichier uploader se stock ici
            const [file,setFile]=useState("");
        // -----------------------------------------------
 

        // on cherche l'image du client 
        const exe=useQuery(SINGLE_TRANSACTION,{
            variables:{
                id:props.id_transaction
            }
        });

        const transaction=exe?.data?.transaction

    // -------------------------------------------------------------------------------------------------
      // initialisation de l'inputs
      const {inputs,handleChange,clearForm,resetForm}=useForm({
            transaction:props.id_transaction,
            recu:"",
            recuTransaction:""
        });
    //

    // initialisation des données du formulaire 
        const [upload,{data,error,loading}]=useMutation(UPLOAD,{
            variables:inputs,
        });
        const [createTransactionRecu,{data1,error1,loading1}]=useMutation(CREATE_TRANSACTION_RECU,{
            variables:inputs,
            refetchQueries:[{query:SINGLE_TRANSACTION,variables:{id:props.id_transaction}}]
        });
        
    // -----------------------------------------

    // se declenche lorsqu'on choisi un fichier
    const changeInput=(e)=>{
        setFile(e.target.files[0]);
        inputs.recu=e.target.files[0];
    }
    // ----------------------------------------

    // se declenche lorsqu'on valide le formulaire
    const onSubmitMedia=async (e)=>{
        e.preventDefault();
        const res=await upload();
        console.log(res);

        inputs.recu=res?.data?.upload?.id;
        const res1=await createTransactionRecu();
    }  
    // --------------------------------------------
    console.log(exe?.data?.transaction?.transaction_recus?.recu?.url)
    let lien=exe?.data?.transaction?.transaction_recus?.recu?<img src={"https://www.xpatsa.online/"+exe?.data?.transaction?.transaction_recus?.recu?.url}  />: ""
  return (
      <CardTransactionPhotoStc>
            <Row>
                <Col lg={12}>
                    <div className="cadrePhoto">
                       {lien}
                    </div>
                    <form onSubmit={onSubmitMedia} className="formChangeFile">
                        <Row className="">
                            <Col sm={8}>
                                <input type="file" onChange={changeInput} className="form-control"/>
                            </Col>
                            <Col sm={4}>
                                <button type="submit" className="btn form-control">Ok</button>
                            </Col>
                        </Row>
                    </form>
                </Col>
            </Row>
            
      </CardTransactionPhotoStc>
  )
}