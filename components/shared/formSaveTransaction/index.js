import FormSaveTransactionStc from './formSaveTransaction.stc';
import { FaUserFriends } from "react-icons/fa";
import {Row,Col,Table, Alert} from 'reactstrap';
import Link from 'next/link';
import Image from 'next/image';
import { FaChevronRight } from "react-icons/fa";
import Bouton from '../Bouton/Bouton';
import {gql, useQuery,useMutation} from '@apollo/client';
import useForm from "../../../lib/useForm";

import Select from 'react-select';
import { useState } from 'react';
import { LISTE_TRANSACTION_BOX, LISTE_TRANSACTION_TOTAL } from '../CardCountTransactionWidget';
import { LISTE_CLIENT_BOX } from '../CardCountClientWidget';
import { LISTE_TRANSACTION } from '../CardTransactionWidgetTable';

const LISTE_CLIENT=gql`
 query 
{ 
	clients(sort:"id:desc")
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
        $modalite:String
        $otherFees:Int
        $date_save:String!
        $trenteFrais:Int
        $soixanteDixFrais:Int
        $quatreVingtFrais:Int
        $quatreVingtFraisDh:Int
        $fraisWafacash:Int
        $depot:Int
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
                    paid:$paid,
                    modalite:$modalite,
                    otherFees:$otherFees,
                    date_save:$date_save,
                    trenteFrais:$trenteFrais,
                    soixanteDixFrais:$soixanteDixFrais,
                    quatreVingtFrais:$quatreVingtFrais,
                    quatreVingtFraisDh:$quatreVingtFraisDh,
                    fraisWafacash:$fraisWafacash,
                    depot:$depot
                    
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
     
    var today  = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;
    console.log(today);

    const {inputs,handleChange,clearForm,resetForm}=useForm({
        sent:1,
        from:"XAF",
        received:1,
        to:"MAD",
        fees:1,
        client:1,
        paid:false,
        total:0,
        modalite:"ESPECES",
        otherFees:0,
        date_save:today,
        trenteFrais:0,
        soixanteDixFrais:0,
        quatreVingtFrais:0,
        quatreVingtFraisDh:0,
        fraisWafacash:0,
        depot:0
      });
      
    // const {data,error,loading}=useQuery(CLIENT_MUTATION);
    const response=useQuery(LISTE_CLIENT);
    
    const [create,{data,error,loading}]=useMutation(CREATE_TRANSACTION,{
        variables:inputs,
        refetchQueries:[{query:LISTE_TRANSACTION_BOX},{query:LISTE_TRANSACTION_TOTAL},{query:LISTE_CLIENT_BOX},{query:LISTE_TRANSACTION}]
    });


    const [selectedOption, setSelectedOption] = useState(null);

    let options=[];
    var i;
    for (i = 0; i < response.data?.clients.length; i++) {
        options.push({value:response.data?.clients[i].id,label:response.data?.clients[i].firstname+" "+response.data?.clients[i].name});
    }
   
    const test=async (e)=>{
        e.preventDefault();

        let f= document.getElementById("transactionFees").value;
        let t= document.getElementById("transactionTotal").value;
        let r= document.getElementById("transactionReceived").value;
        let m= document.getElementById("transactionModalite").value;
        let of= document.getElementById("transactionOtherFees").value;

        // donnees pour la solde
        
        let trenteFrais= document.getElementById("trenteFrais").value;
        let soixanteDixFrais= document.getElementById("soixanteDixFrais").value;
        let quatreVingtFrais= document.getElementById("quatreVingtFrais").value;
        let quatreVingtFraisDh= document.getElementById("quatreVingtFraisDh").value;
        let fraisWafacash= document.getElementById("fraisWafacash").value;
        let depot= document.getElementById("depotW").value;

        inputs.trenteFrais=parseInt(trenteFrais);
        inputs.soixanteDixFrais=parseInt(soixanteDixFrais);
        inputs.quatreVingtFrais=parseInt(quatreVingtFrais);
        inputs.quatreVingtFraisDh=parseInt(quatreVingtFraisDh);
        inputs.fraisWafacash=parseInt(fraisWafacash);
        inputs.depot=parseInt(depot);

        inputs.fees=parseInt(f);
        inputs.total=parseInt(t);
        inputs.received=parseInt(r);
        inputs.modalite=m;
        inputs.otherFees=parseInt(of);

        const res=await create();
        console.log(res);
        resetForm();

        
       console.log(inputs);
        
    }


   
    var response1="";
    if(loading){
        response1=<Image src="/img/load.gif" width="150" height="150" />;
    }
    if(error){
        response1=<Alert color="danger">Une erreur critique! Veuillez consulter votre administrateur</Alert>
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
            <h2 className="cardTitre">Enregistrement d'une transaction (<span className="appercuTaux" id="appercuTaux">.....</span>)</h2>
            <Row className="cardActiviteHead">
                <div className="response">
                   {response1}
                </div>
                <form
                 onSubmit={test}
                 >
                    <Row>
                        <Col lg={4}>
                            <div className="form-group">
                                <label>Devise d'envoi</label>
                                <select className='form-control inputTransaction' id="transactionFrom" name="from" onChange={handleChange}>
                                    <option value="XAF" selected>FR CFA</option>
                                    <option value="MAD">DIRHAM</option>
                                    <option value="ZAR">RAND</option>
                                </select> 
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="form-group">
                                <label> A envoyer  (<span className="appercuTaux" id="transactionSentDevise">.....</span>)</label>
                                <input type="number" min="1" 
                                value={inputs.sent} id="transactionSent" 
                                onChange={handleChange} name="sent" 
                                placeholder="Montant à envoyer" 
                                className="form-control inputTransaction" />
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="form-group">
                                <label>Devise de retrait</label>
                                <select className='form-control inputTransaction'
                                 id="transactionTo" name="to" onChange={handleChange}>
                                    <option value="MAD" selected>DIRHAM</option>
                                    <option value="XAF">FR CFA</option>
                                    <option value="ZAR">RAND</option>
                                </select>
                            </div>
                        </Col>

                        
                        <Col lg={4}>
                            <div className="form-group">
                                <label>Payé ?</label>
                                <select className='form-control inputTransaction' name="paid" onChange={handleChange}>
                                    <option value="">NON</option>
                                    <option value="true">OUI</option>
                                    
                                </select>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="form-group">
                                <label>Modalité de paiement </label>
                                <select className='form-control inputTransaction' id="transactionModalite" name="modalite" onChange={handleChange}>
                                    <option value="ESPECE">ESPECES</option>
                                    <option value="AM">AIRTEL MONEY</option>
                                </select>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="form-group">
                                <label>A recevoir (<span className="appercuTaux" id="transactionReceivedDevise">.....</span>)</label>
                                <input type="number" min="1"
                                required
                                 name="received" readOnly
                                  id="transactionReceived" 
                                  placeholder="A recevoir" value={inputs.received} 
                                  onChange={handleChange} className="form-control inputTransaction read" />
                            </div>
                        </Col>
                        
                        <Col lg={4}>
                            <div className="form-group">
                                <label>Frais(<span className="appercuTaux" id="transactionFeesDevise">.....</span>)</label>
                                <input type="number" 
                                id="transactionFees" readOnly 
                                name="fees" placeholder="Frais"  
                                onChange={handleChange} className="form-control inputTransaction read" />
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="form-group">
                                <label>Autre frais (<span className="appercuTaux" id="transactionOtherFeesDevise">.....</span>)</label>
                                <input type="number" 
                                id="transactionOtherFees" readOnly 
                                required
                                name="otherFees" placeholder="Frais" 
                                onChange={handleChange} className="form-control inputTransaction read" />
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="form-group">
                                <label>Total (<span className="appercuTaux" id="transactionTotalDevise">.....</span>)</label>
                                <input type="number" 
                                name="total"  
                                required
                                placeholder="Total" 
                                id="transactionTotal"  readOnly 
                                className="form-control inputTransaction read" />
                            </div>
                        </Col>
                        
                        <Col lg={6}>
                            <div className="form-group">
                                <label>Client</label>
                                <Select 
                                    className="select-react inputTransaction"
                                    defaultValue={selectedOption}
                                    onChange={selectClient}
                                    isSearchable 
                                    options={options}
                                    />

                            </div>
                        </Col>
                        
                        <Col lg={12}>
                            {/* les autres chmps necessaires pour le solde */}
                            <input type="hidden" 
                                id="trenteFrais" readOnly 
                                name="trenteFrais" placeholder="Frais" 
                                />
                            <input type="hidden" 
                                id="soixanteDixFrais" readOnly 
                                name="soixanteDixFrais" placeholder="Frais" 
                                />
                            <input type="hidden" 
                                id="quatreVingtFrais" readOnly 
                                name="quatreVingtFrais" placeholder="Frais" 
                                />
                            <input type="hidden" 
                                id="quatreVingtFraisDh" readOnly 
                                name="quatreVingtFraisDh" placeholder="Frais" 
                                />
                            <input type="hidden" 
                                id="fraisWafacash" readOnly 
                                name="fraisWafacash" placeholder="Frais" 
                                />
                            <input type="hidden" 
                                id="depotW" readOnly 
                                name="depotW" placeholder="Frais" 
                                />
                            {/* -------------fin--------------------------- */}
                            <Bouton taille="15px" type="submit" minwidth="150px" backgroundcolor="#2362bf" texte="Enregistrer" />
                        </Col>
                    </Row>
                </form>
            </Row>
            
        </FormSaveTransactionStc>
    )
}
export default FormSaveTransaction;