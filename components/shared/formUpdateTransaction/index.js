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

 
const selectClient=(e)=>{
    setSelectedOption(e.value);
    inputs.client=parseInt(e.value);
}
//   console.log(response.data?.clients.length);
    return(
        <FormTransactionStc>
            <h2 className="cardTitre">Mise à jours de la transaction #{props.id_transaction} </h2>
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
                            <div className="form-group" >
                                <label>Devise</label>
                                <select className='form-control' name="from" onChange={handleChange}>
                                    <option value="XAF" selected={inputs.from=="XAF"?true:false}>FR CFA</option>
                                    <option value="MAD" selected={inputs.from=="MAD"?true:false}>DIRHAM</option>
                                    <option value="USD" selected={inputs.from=="USD"?true:false}>DOLLAR</option>
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
                                    <option value="MAD" selected={inputs.to=="MAD"?true:false}>DIRHAM</option>
                                    <option value="XAF" selected={inputs.to=="XAF"?true:false}>FR CFA</option>
                                    <option value="USD" selected={inputs.to=="USD"?true:false}>DOLLAR</option>
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
                                    <option value="" selected={inputs.paid==false?false:true}>NON</option>
                                    <option value="true" selected={inputs.paid==true?true:false}>OUI</option>
                                    
                                </select>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="form-group">
                                <label>Client ({ transact?.client?.firstname }  { transact?.client?.name})</label>
                                <Select 
                                    className="select-react"
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