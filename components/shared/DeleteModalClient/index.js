import { FaUserFriends } from "react-icons/fa";
import {Row,Col} from 'reactstrap';
import DeleteModalClientStc from './DeleteModalClient.stc'
import dynamic from 'next/dynamic'
import { BsPencilSquare,BsEye,BsFillTrashFill } from "react-icons/bs";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import gql from "graphql-tag";
import useForm from "../../../lib/useForm";
import { useMutation } from "@apollo/client";
import { LISTE_CLIENT } from "../CardClientWidgetTable";
import { LISTE_CLIENT_BOX } from "../CardCountClientWidget";
// import Chart from "react-apexcharts";


const DELETE_CLIENT=gql`

mutation DELETE_CLIENT (
    $id:ID!
)
{ 
    deleteClient(input:{where:{id:$id}})
    {
        client
        {id}
    }
}
`;

const DeleteModalClient =(props)=>{
    
    const id_client=props.id_client;

    const {inputs,handleChange}=useForm({
        id:id_client,
      });
    const [suppr]=useMutation(DELETE_CLIENT,{
        variables:inputs,
        refetchQueries:[{query:LISTE_CLIENT},{query:LISTE_CLIENT_BOX}]
    });

    const deleteClient=()=>{
        confirmAlert({
            title: 'Suppression encours',
            message: 'Voulez-vous supprimer ce client ?',
            buttons: [
              {
                label: 'OUI, je veux',
                onClick: async () => {
                // inputs.id=;
                 await suppr();
                }
              },
              {
                label: 'Non, non',
                // onClick: () => alert('Click No')
              }
            ]
          })
    }

    return(
        <DeleteModalClientStc onClick={deleteClient}>
            <a><BsFillTrashFill /></a>
        </DeleteModalClientStc>
    )
}
export default DeleteModalClient;