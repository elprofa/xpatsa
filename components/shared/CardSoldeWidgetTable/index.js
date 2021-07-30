import CardSoldeWidgetTableStc from './CardSoldeWidgetTable.stc';
import { FaUserFriends } from "react-icons/fa";
import {Row,Col,Table} from 'reactstrap';
import Link from 'next/link';
import Image from 'next/image';
import { FaChevronRight } from "react-icons/fa";
import gql from 'graphql-tag';
import { useMutation, useQuery } from '@apollo/client';
import { BsCheckCircle } from "react-icons/bs";
import { BsPencilSquare,BsEye,BsFillTrashFill } from "react-icons/bs";

import { useTable } from 'react-table'
import React, { Component, Fragment } from 'react';
import Datatable from 'react-bs-datatable';

import moment from 'moment';
import useForm from '../../../lib/useForm';
import DeleteModal from '../deleteModal';


export const LISTE_TRANSACTION=gql`
    query 
    { 
        transactions (sort:"id:desc")
        { 
            client 
            {
                id
                firstname
                name
            }
            id
            sent
            received
            modalite
            total
            paid
            fees
            from
            to
            date_save
            trenteFrais
            soixanteDixFrais
            quatreVingtFrais
            quatreVingtFraisDh
            fraisWafacash
            depot
            
        }
    }
`;



const CardSoldeWidgetTable =()=>{




    const {data,error,loading}=useQuery(LISTE_TRANSACTION);

    const header = [
        { title: 'Montant envoyé', prop: 'montant_envoye', sortable: true,filterable: true },
        { title: 'Montant reçu', prop: 'montant_recu' },
        { title: 'Frais envoi', prop: 'frais' ,sortable: true,filterable: true},
        { title: '30% des frais', prop: 'frais3' },
        { title: '70% des frais', prop: 'frais7' },
        { title: '96% de frais', prop: 'frais9' },
        { title: 'Frais en Dh', prop: 'frais_dh' },
        { title: 'Moins f. wafacash', prop: 'wafacash' },
        { title: 'Depôt', prop: 'depot', sortable: true,filterable: true },
        { title: 'Action ', prop: 'action' },
      ];

    // Randomize data of the table columns.
    // Note that the fields are all using the `prop` field of the headers.

        let body = [];

        var i;
        if(data!=='undefined')
        {
            
            for (i = 0; i < data?.transactions?.length; i++) {
                var id=data?.transactions[i]?.id;
                body.push(
                     {
                        montant_envoye:data.transactions[i].sent+" "+data.transactions[i].from,
                        montant_recu:data.transactions[i].received+" "+data.transactions[i].to,
                        frais:data.transactions[i].fees+" "+data.transactions[i].from,
                        frais3:data.transactions[i].trenteFrais+" "+data.transactions[i].from,
                        frais7:data.transactions[i].soixanteDixFrais+" "+data.transactions[i].from,
                        frais9:data.transactions[i].quatreVingtFrais+" "+data.transactions[i].from,
                        frais_dh:data.transactions[i].quatreVingtFraisDh+" "+data.transactions[i].to,
                        wafacash:data.transactions[i].fraisWafacash+" "+data.transactions[i].to,
                        depot:data.transactions[i].depot+" "+data.transactions[i].from,
                        action:<div className="iconAction">
                            <span><Link href={"/transaction/"+data?.transactions[i]?.id}><a><BsEye /></a></Link></span>
                            </div>
                    }
                );
                
            }

            body.push(
                {
                   montant_envoye:0,
                   montant_recu:0,
                   frais:0,
                   frais3:0,
                   frais7:0,
                   frais9:0,
                   frais_dh:0,
                   wafacash:0,
                   depot:0,
                   action:""
               }
           );
        }        

      const onSortFunction = {
        date(columnValue) {
          // Convert the string date format to UTC timestamp
          // So the table could sort it by number instead of by string
          return moment(columnValue, 'Do MMMM YYYY').valueOf();
        }
      };

    if(loading){
        return <p>Loading</p>
    }
    if(error){
        return <p>Erreur</p>
    }

    return(
        <CardSoldeWidgetTableStc>
            <h2 className="cardTitre">Soldes </h2>
            <Row className="cardActiviteHead">
                <Col lg={12} className="dataTable">
                    <Datatable
                        tableHeaders={header}
                        tableBody={body}
                        initialSort={{ prop: 'client', isAscending: true },{ prop: 'date_save' }}
                        onSort={onSortFunction}
                    />
                </Col>
            </Row>
            
        </CardSoldeWidgetTableStc>
    )
}
export default CardSoldeWidgetTable;