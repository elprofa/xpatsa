import FormClientClientStc from './formUpdateClient.stc';
import { FaUserFriends } from "react-icons/fa";
import {Row,Col,Table} from 'reactstrap';
import Link from 'next/link';
import Image from 'next/image';
import { FaChevronRight } from "react-icons/fa";
import Bouton from '../Bouton/Bouton';
import {gql, useQuery,useMutation} from '@apollo/client';
import useForm from "../../../lib/useForm";
import Router from "next/router";

const SINGLE_CLIENT=gql`
   query SINGLE_CLIENT($id:ID!)
    { 
        client(id:$id)
        { 
            id
            firstname
            name
            telephone
            pays
            Ville
        }
    }
`;


const UPDATE_CLIENT=gql`

     mutation UPDATE_CLIENT(
         $id:ID!
         $firstname:String!
         $name:String!
         $pays:String!
         $telephone:String!
         $ville:String!
     ){ 

    updateClient(input:{
        where:{id:$id},
        data:{
            firstname:$firstname,
            name:$name,
            telephone:$telephone,
            pays:$pays,
            Ville:$ville
        }})
        { 
        client
        { 
            id
            firstname
            name
            telephone
            pays 
            Ville
        
        }
    }
}
 `;

 function FormClientClient(props){

    
    const exe=useQuery(SINGLE_CLIENT,{
        variables:{
            id:props.id_client
        }
    });

    const client=exe?.data?.client;


    const {inputs,handleChange,clearForm,resetForm}=useForm({
        id:props.id_client,
        firstname:client?.firstname,
        name:client?.name,
        pays:client?.pays,
        telephone:client?.telephone,
        ville:client?.Ville,
      });
      
    // const {data,error,loading}=useQuery(CLIENT_MUTATION);

    const [update,{data,error,loading}]=useMutation(UPDATE_CLIENT,{
        variables:inputs,
        refetchQueries:[{query:SINGLE_CLIENT,variables:{id:inputs.id}}]
    });

    const test=async (e)=>{
        e.preventDefault();
        const res=await update();
        resetForm();

        Router.push({
            pathname:`/client/${props.id_client}`
        })
    }

     
    var response1="";
    if(loading){
        response1=<Image src="/img/load.gif" width="150" height="150" />;
    }
    if(error){
        response1=<Alert color="danger">Une erreur critique! Veuillez consulter votre administrateur</Alert>
    }

    return(
        <FormClientClientStc>
            <h2 className="cardTitre">Mise à jour d'un client</h2>
            <Row className="cardActiviteHead">
                <div className="response">
                   {response1}
                </div>
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
                                <label>Téléphone</label>
                                <input type="texte" name="telephone" value={inputs.telephone} onChange={handleChange} placeholder="(+---) -- -- -- --" className="form-control" />
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
                                <label>Ville de residence</label>
                                <input type="texte" name="ville" placeholder="votre ville de residence" value={inputs.ville} onChange={handleChange} className="form-control" />
                            </div>
                        </Col>
                        <Col lg={12}>
                            <Bouton taille="15px" type="submit" minwidth="150px" backgroundcolor="#2362bf" texte="Mettre à jours" />
                        </Col>
                    </Row>
                </form>
            </Row>
            
        </FormClientClientStc>
    )
}
export default FormClientClient;