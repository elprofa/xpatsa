import FormSaveClientStc from './formSaveClient.stc';
import { FaUserFriends } from "react-icons/fa";
import {Row,Col,Table} from 'reactstrap';
import Link from 'next/link';
import Image from 'next/image';
import { FaChevronRight } from "react-icons/fa";
import Bouton from '../Bouton/Bouton';
import {gql, useQuery,useMutation} from '@apollo/client';
import useForm from "../../../lib/useForm";


const CREATE_CLIENT=gql`
     mutation CREATE_CLIENT(
         $firstname:String!
         $name:String!
         $pays:String!
         $telephone:String!
     ){ 
 	createClient(input:{data:{name:$name,firstname:$firstname,telephone:$telephone,pays:$pays}})
     {
         client
         { 
             name
         }
     }
     }
 `;

 function FormSaveClient(){
    const {inputs,handleChange,clearForm,resetForm}=useForm({
        firstname:"",
        name:"",
        pays:"",
        telephone:"",
      });
      
    // const {data,error,loading}=useQuery(CLIENT_MUTATION);

    const [create,{data,error,loading}]=useMutation(CREATE_CLIENT,{
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
        <FormSaveClientStc>
            <h2 className="cardTitre">Enregistrement d'un client</h2>
            <Row className="cardActiviteHead">
                <form onSubmit={test}>
                    <Row>
                        <Col lg={6}>
                            <div className="form-group">
                                <label>Prénom (s)</label>
                                <input type="texte" value={inputs.firstname} onChange={handleChange} name="firstname" placeholder="Prenom complet" className="form-control" />
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="form-group">
                                <label>Nom (s)</label>
                                <input type="texte" name="name" placeholder="Nom complet" value={inputs.name} onChange={handleChange} className="form-control" />
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="form-group">
                                <label>Pays de residence</label>
                                <input type="texte" name="pays" placeholder="votre pays de residence" value={inputs.pays} onChange={handleChange} className="form-control" />
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="form-group">
                                <label>Téléphone</label>
                                <input type="texte" name="telephone" value={inputs.telephone} onChange={handleChange} placeholder="(+---) -- -- -- --" className="form-control" />
                            </div>
                        </Col>
                        <Col lg={6}>
                            <Bouton taille="15px" type="submit" minwidth="150px" backgroundcolor="#2362bf" texte="Enregistrer" />
                        </Col>
                    </Row>
                </form>
            </Row>
            
        </FormSaveClientStc>
    )
}
export default FormSaveClient;