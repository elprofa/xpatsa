import CardTransactionClientStc from './CardTransactionClient.stc';
import { FaUserFriends } from "react-icons/fa";
import {Row,Col,Table} from 'reactstrap';
import Link from 'next/link';
import Image from 'next/image';
import { FaChevronRight } from "react-icons/fa";
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import { BsCheckCircle } from "react-icons/bs";
import { BsPencilSquare,BsEye } from "react-icons/bs";

import { useTable } from 'react-table'
import React, { Component, Fragment } from 'react';
import Datatable from 'react-bs-datatable';

import moment from 'moment';

const LISTE_TRANSACTION_CLIENT=gql`
    query 
    { 
        transactions 
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
            fees
            total
            paid
            
        }
    }
`;



const CardTransactionClient =(props)=>{

    const {data,error,loading}=useQuery(LISTE_TRANSACTION_CLIENT);

    const header = [
        { title: 'Client', prop: 'client', sortable: true,filterable: true },
        { title: 'A envoyer', prop: 'sent', sortable: true,filterable: true },
        { title: 'A recevoir', prop: 'received' },
        { title: 'Frais', prop: 'fees' },
        { title: 'Coût total', prop: 'total' },
        { title: 'Payé ?', prop: 'paid' },
        { title: 'Action ', prop: 'action' },
      ];

    // Randomize data of the table columns.
    // Note that the fields are all using the `prop` field of the headers.

        let body = [];
        
        console.log(body);
        

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

    console.log(data.transactions)
    return(
        <CardTransactionClientStc>
            <h2 className="cardTitre">Les transactions de #{props.id_client}</h2>
            <Row className="cardActiviteHead">
                <Col lg={12} className="dataTable">
                    <Datatable
                        tableHeaders={header}
                        tableBody={body}
                        rowsPerPage={5}
                        rowsPerPageOption={[5, 10, 15, 20]}
                        initialSort={{ prop: 'client', isAscending: true }}
                        onSort={onSortFunction}
                    />
                </Col>
            </Row>
            
        </CardTransactionClientStc>
    )
}
export default CardTransactionClient;