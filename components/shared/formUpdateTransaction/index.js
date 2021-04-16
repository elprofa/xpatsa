import FormTransactionStc from './formUpdateTransaction.stc';
import { FaUserFriends } from "react-icons/fa";
import {Row,Col,Table} from 'reactstrap';
import Link from 'next/link';
import Image from 'next/image';
import { FaChevronRight } from "react-icons/fa";
import Bouton from '../Bouton/Bouton';
import {gql, useQuery,useMutation} from '@apollo/client';
import useForm from "../../../lib/useForm";
import Router from 'next/router';
import Select from 'react-select';
import { useState } from 'react';


const SINGLE_TRANSACTION=gql`
    query SINGLE_TRANSACTION($id:ID!)
    { 
        transaction(id:$id)
        {
            id
            created_at
            updated_at
            sent
            received
            from
            to
            fees
            total
            paid
            modalite
            otherFees
            client{ 
                id
                name
                firstname
                telephone
            }
        }
    }
`;


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


const UPDATE_TRANSACTION=gql`
mutation UPDATE_TRANSACTION (
    $id:ID!
    $fees:Int!
    $total:Int!
    $received:Int!
    $sent:Int!
    $from:String!
    $to:String!
    $client:ID
    $paid:Boolean!
    $modalite:String!
    $otherFees:Int
    ){ 
	updateTransaction(
        input:{
            where:{id:$id},
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
                modalite:$modalite
                otherFees:$otherFees
            }
        })
    { 
        transaction
        {
            id
        }
    }
}
 `;

 function FormUpdateTransaction(props){

    const exe=useQuery(SINGLE_TRANSACTION,{
        variables:{
            id:props.id_transaction
        }
    });

    const transact=exe?.data?.transaction;

    // const data1=exe.data.transaction;

    const {inputs,handleChange,clearForm,resetForm}=useForm({
        id:parseInt(props.id_transaction),
        sent:transact?.sent,
        from:transact?.from,
        received:transact?.received,
        to:transact?.to,
        fees:transact?.fees,
        client:transact?.client?.id,
        paid:transact?.paid,
        total:transact?.total,
        modalite:transact?.modalite,
        otherFees:transact?.otherFees,
      });

      let clt=transact?.client?.id?transact?.client?.name:'';
      console.log(clt);
      const [selectedOption, setSelectedOption] = useState(clt);

      // const {data,error,loading}=useQuery(CLIENT_MUTATION);
    const response=useQuery(LISTE_CLIENT);
    
    const [update,{data,error,loading}]=useMutation(UPDATE_TRANSACTION,{
        variables:inputs,
        refetchQueries:[{query:SINGLE_TRANSACTION,variables:{id:inputs.id}}]
    });
                                                                 

    let options=[];
    var i;
    for (i = 0; i < response.data?.clients.length; i++) {
        options.push({value:response.data?.clients[i].id,label:response.data?.clients[i].firstname+" "+response.data?.clients[i].name});
    }
   
    const test=async (e)=>{
        e.preventDefault();

        let f= document.getElementById("transactionFees1").value;
        let t= document.getElementById("transactionTotal1").value;
        let r= document.getElementById("transactionReceived1").value;
        let m= document.getElementById("transactionModalite1").value;
        let of= document.getElementById("transactionOtherFees1").value;
        if(f==""){
            f= inputs.fees;
        }
        if(t==""){
            t= inputs.total;
        }
        if(r==""){
            r= inputs.received;
        }
        if(m==""){
            m= inputs.modalite;
        }
        if(of==""){
            of= inputs.otherFees;
        }

        inputs.fees=parseInt(f);
        inputs.total=parseInt(t);
        inputs.received=parseInt(r);
        inputs.modalite=m;
        inputs.otherFees=parseInt(of);

        const res=await update();
        console.log(inputs);
        //resetForm();

        Router.push({
            pathname:`/transaction/${props.id_transaction}`
        })
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

console.log(inputs.modalite);
 
const selectClient=(e)=>{
    setSelectedOption(e.value);
    inputs.client=parseInt(e.value);
}
//   console.log(response.data?.clients.length);
    return(
        <FormTransactionStc>
            <h2 className="cardTitre">Mise à jours de la transaction #{props.id_transaction} (<span className="appercuTaux" id="appercuTaux1">.....</span>)</h2>
            <Row className="cardActiviteHead">
                <form
                 onSubmit={test}
                 >
                    <Row>
                    <Col lg={4}>
                            <div className="form-group" >
                                <label>Devise d'envoi</label>
                                <select className='form-control inputTransaction' id="transactionFrom1" name="from" onChange={handleChange}>
                                    <option value="XAF" selected={inputs.from=="XAF"?true:false}>FR CFA</option>
                                    <option value="MAD" selected={inputs.from=="MAD"?true:false}>DIRHAM</option>
                                    <option value="ZAR" selected={inputs.from=="USD"?true:false}>RAND</option>
                                </select>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="form-group">
                                <label> A envoyer (<span className="appercuTaux" id="transactionSentDevise1">.....</span>)</label>
                                <input type="number" min="0" 
                                value={inputs.sent} 
                                onChange={handleChange} 
                                name="sent" 
                                id="transactionSent1" 
                                placeholder="Montant à envoyer" 
                                className="form-control inputTransaction" />
                            </div> 
                        </Col>
                        <Col lg={4}>
                            <div className="form-group ">
                                <label>Devise de retrait</label>
                                <select className='form-control inputTransaction' id="transactionTo1" name="to" onChange={handleChange}>
                                    <option value="MAD" selected={inputs.to=="MAD"?true:false}>DIRHAM</option>
                                    <option value="XAF" selected={inputs.to=="XAF"?true:false}>FR CFA</option>
                                    <option value="USD" selected={inputs.to=="ZAR"?true:false}>RAND</option>
                                </select>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="form-group">
                                <label>Payé ?</label>
                                <select className='form-control inputTransaction' name="paid" onChange={handleChange}>
                                    <option value="" selected={inputs.paid==false?false:true}>NON</option>
                                    <option value="true" selected={inputs.paid==true?true:false}>OUI</option>
                                    
                                </select>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="form-group">
                                <label>Modalité de paiement </label>
                                <select className='form-control inputTransaction' id="transactionModalite1" name="modalite" onChange={handleChange}>
                                    <option value="ESPECE"  selected={inputs.modalite==="ESPECE"?true:false}>ESPECES</option>
                                    <option value="AM"  selected={inputs.modalite==="AM"?true:false}>AIRTEL MONEY</option>
                                </select>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="form-group">
                                <label>A recevoir (<span className="appercuTaux" id="transactionReceivedDevise1">.....</span>)</label>
                                <input type="number"
                                 min="0" 
                                 name="received"
                                 id="transactionReceived1" readOnly 
                                  placeholder={inputs.received}
                                    onChange={handleChange}
                                    className="form-control inputTransaction read" />
                            </div>
                        </Col>
                       
                        <Col lg={4}>
                            <div className="form-group">
                                <label>Frais (<span className="appercuTaux" id="transactionFeesDevise1">.....</span>)</label>
                                <input type="number"
                                 name="fees" placeholder={inputs.fees}
                                 id="transactionFees1" readOnly 
                                   onChange={handleChange}
                                   className="form-control inputTransaction read" />
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="form-group">
                                <label>Autre frais (<span className="appercuTaux" id="transactionOtherFeesDevise1">.....</span>)</label>
                                <input type="number" 
                                id="transactionOtherFees1" readOnly 
                                required
                                name="otherFees" placeholder={inputs.otherFees} 
                                onChange={handleChange} className="form-control inputTransaction read" />
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="form-group">
                                <label>Total (<span className="appercuTaux" id="transactionTotalDevise1">.....</span>)</label>
                                <input type="number" name="total" 
                                placeholder={inputs.total}
                                id="transactionTotal1" readOnly 
                                 onChange={handleChange} 
                                 className="form-control inputTransaction read" />
                            </div>
                        </Col>
                       
                        <Col lg={6}>
                            <div className="form-group">
                                <label>Client <span className="appercuClientTransactUpdate">({ transact?.client?.firstname }  { transact?.client?.name})</span></label>
                                <Select 
                                    className="select-react inputTransaction"
                                    defaultInputValue={selectedOption}
                                    onChange={selectClient}
                                    isSearchable 
                                    options={options}
                                    />

                            </div>
                        </Col>
                        
                        <Col lg={12}>
                            <Bouton taille="1rem" type="submit" minwidth="150px" backgroundcolor="#2362bf" texte="Mèttre à jours" />
                        </Col>
                    </Row>
                </form>
            </Row>
            
        </FormTransactionStc>
    )
}
export default FormUpdateTransaction;