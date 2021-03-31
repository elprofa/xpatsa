import FormSaveTransactionStc from './formSaveTransaction.stc';
import { FaUserFriends } from "react-icons/fa";
import {Row,Col,Table} from 'reactstrap';
import Link from 'next/link';
import Image from 'next/image';
import { FaChevronRight } from "react-icons/fa";
import Bouton from '../Bouton/Bouton';
import {gql, useQuery,useMutation} from '@apollo/client';
import useForm from "../../../lib/useForm";


const CREATE_TRANSACTION=gql`
mutation CREATE_TRANSACTION(
        $fees:Int!
        $total:Int!
        $received:Int!
        $sent:Int!
        $from:String!
        $to:String!
        $client:ID!
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
                    paid:false
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

    const [create,{data,error,loading}]=useMutation(CREATE_TRANSACTION,{
        variables:inputs
    });

    

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
    return(
        <FormSaveTransactionStc>
            <h2 className="cardTitre">Enregistrement d'une transactions</h2>
            <Row className="cardActiviteHead">
                <form onSubmit={test}>
                    <Row>
                        <Col lg={3}>
                            <div className="form-group">
                                <label> A envoyer</label>
                                <input type="number" value={inputs.sent} onChange={handleChange} name="sent" placeholder="Montant à envoyer" className="form-control" />
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className="form-group">
                                <label>Devise</label>
                                <input type="texte" name="from" placeholder="Devise" value={inputs.from} onChange={handleChange} className="form-control" />
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className="form-group">
                                <label>A recevoir</label>
                                <input type="number" name="received" placeholder="A recevoir" value={inputs.received} onChange={handleChange} className="form-control" />
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className="form-group">
                                <label>Devise</label>
                                <input type="texte" name="to" placeholder="Devise" value={inputs.to} onChange={handleChange} className="form-control" />
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
                                <input type="texte" name="paid" placeholder="Payé ?" value={inputs.paid} onChange={handleChange} className="form-control" />
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="form-group">
                                <label>Client</label>
                                <select className="form-control">
                                    <option value="23">Wedo profan</option>
                                </select>
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