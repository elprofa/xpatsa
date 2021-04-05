import FormSaveTransactionStc from './formSaveTransaction.stc';
import { FaUserFriends } from "react-icons/fa";
import {Row,Col,Table} from 'reactstrap';
import Link from 'next/link';
import Image from 'next/image';
import { FaChevronRight } from "react-icons/fa";
import Bouton from '../Bouton/Bouton';
import {gql, useQuery,useMutation} from '@apollo/client';
import useForm from "../../../lib/useForm";

import Select from 'react-select';
import { useState } from 'react';


const LISTE_CLIENT=gql`
 query 
{ 
	clients
  { 
    id
  	name
    firstname
    pays
    telephone
  }
}
`;
const CREATE_TRANSACTION=gql`
mutation CREATE_TRANSACTION(
        $fees:Int!
        $total:Int!
        $received:Int!
        $sent:Int!
        $from:String!
        $to:String!
        $client:ID
        $paid:Boolean!
    )
    { 
        createTransaction(input:
            {
                data:
                {
                    fees:$fees,
                    total:$total,
                    received:$received,
                    sent:$sent,
                    from:$from,
                    to:$to,
                    client:$client,
                    paid:$paid
                }
            }
        )
        { 
            transaction
            {
            total
            }
        }
    }
 `;

 function FormSaveTransaction(){
    const {inputs,handleChange,clearForm,resetForm}=useForm({
        sent:0,
        from:"",
        received:0,
        to:"",
        fees:0,
        client:0,
        paid:false,
        total:0,
      });
      
    // const {data,error,loading}=useQuery(CLIENT_MUTATION);
    const response=useQuery(LISTE_CLIENT);
    
    const [create,{data,error,loading}]=useMutation(CREATE_TRANSACTION,{
        variables:inputs
    });


    const [selectedOption, setSelectedOption] = useState(null);

    let options=[];
    var i;
    for (i = 0; i < response.data?.clients.length; i++) {
        options.push({value:response.data?.clients[i].id,label:response.data?.clients[i].firstname+" "+response.data?.clients[i].name});
    }
   
    const test=async (e)=>{
        e.preventDefault();
        const res=await create();
        console.log(res);
        resetForm();
    }


   

    if(loading){
          return <p>En attente</p>
    }
    if(error){
        return <p>En Erreur</p>
    }

   
 // select client transaction form
//  const options = [
//     { value: 'strawberry', label: 'Strawberry' },
//     { value: 'vanilla', label: 'Vanilla' },
//   ];

 
const selectClient=(e)=>{
    setSelectedOption(e.value);
    inputs.client=parseInt(e.value);
}

//   console.log(response.data?.clients.length);
    return(
        <FormSaveTransactionStc>
            <h2 className="cardTitre">Enregistrement d'une transactions</h2>
            <Row className="cardActiviteHead">
                <form
                 onSubmit={test}
                 >
                    <Row>
                        <Col lg={3}>
                            <div className="form-group">
                                <label> A envoyer</label>
                                <input type="number" min="0" value={inputs.sent} onChange={handleChange} name="sent" placeholder="Montant à envoyer" className="form-control" />
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className="form-group">
                                <label>Devise</label>
                                <select className='form-control' name="from" onChange={handleChange}>
                                    <option value="XAF">FR CFA</option>
                                    <option value="MAD">DIRHAM</option>
                                    <option value="USD">DOLLAR</option>
                                </select>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className="form-group">
                                <label>A recevoir</label>
                                <input type="number" min="0" name="received" placeholder="A recevoir" value={inputs.received} onChange={handleChange} className="form-control" />
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className="form-group">
                                <label>Devise</label>
                                <select className='form-control' name="to" onChange={handleChange}>
                                    <option value="MAD">DIRHAM</option>
                                    <option value="XAF">FR CFA</option>

                                    <option value="USD">DOLLAR</option>
                                </select>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className="form-group">
                                <label>Frais</label>
                                <input type="number" name="fees" placeholder="Frais" value={inputs.fees} onChange={handleChange} className="form-control" />
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className="form-group">
                                <label>Total</label>
                                <input type="number" name="total" placeholder="Total" value={inputs.total} onChange={handleChange} className="form-control" />
                            </div>
                        </Col>
                        <Col lg={2}>
                            <div className="form-group">
                                <label>Payé ?</label>
                                <select className='form-control' name="paid" onChange={handleChange}>
                                    <option value="">NON</option>
                                    <option value="true">OUI</option>
                                    
                                </select>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="form-group">
                                <label>Client</label>
                                <Select 
                                    className="select-react"
                                    defaultValue={selectedOption}
                                    onChange={selectClient}
                                    isSearchable 
                                    options={options}
                                    />

                            </div>
                        </Col>
                        
                        <Col lg={12}>
                            <Bouton taille="15px" type="submit" minwidth="150px" backgroundcolor="#2362bf" texte="Enregistrer" />
                        </Col>
                    </Row>
                </form>
            </Row>
            
        </FormSaveTransactionStc>
    )
}
export default FormSaveTransaction;