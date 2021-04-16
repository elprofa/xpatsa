import { FaUserFriends } from "react-icons/fa";
import {Row,Col} from 'reactstrap';
import DeleteModalStc from './deleteModal.stc'
import dynamic from 'next/dynamic'
import { BsPencilSquare,BsEye,BsFillTrashFill } from "react-icons/bs";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import gql from "graphql-tag";
import useForm from "../../../lib/useForm";
import { useMutation } from "@apollo/client";
import {LISTE_TRANSACTION} from "../CardTransactionWidgetTable";
import { LISTE_TRANSACTION_BOX } from "../CardTotalAmoutTransaction";
import { LISTE_TRANSACTION_TOTAL } from "../CardCountTransactionWidget";
import { LISTE_CLIENT_BOX } from "../CardCountClientWidget";
// import Chart from "react-apexcharts";


const DELETE_TRANSACTION=gql`

mutation DELETE_TRANSACTION (
    $id:ID!
)
{ 
	deleteTransaction(input:{where:{id:$id}})
  {
    transaction
    {
        id
    }
  }
}
`;

const DeleteModal =(props)=>{
    
    const id_transaction=props.id_transaction;

    const {inputs,handleChange}=useForm({
        id:id_transaction,
      });
    const [suppr]=useMutation(DELETE_TRANSACTION,{
        variables:inputs,
        refetchQueries:[{query:LISTE_TRANSACTION},{query:LISTE_TRANSACTION_BOX},{query:LISTE_TRANSACTION_TOTAL},{query:LISTE_CLIENT_BOX}]
    });

    const deleteTransaction=()=>{
        console.log(id_transaction);
        confirmAlert({
            title: 'Suppression encours',
            message: 'Voulez-vous supprimer cette transaction ?',
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
        <DeleteModalStc onClick={deleteTransaction}>
            <a><BsFillTrashFill /></a>
        </DeleteModalStc>
    )
}
export default DeleteModal;