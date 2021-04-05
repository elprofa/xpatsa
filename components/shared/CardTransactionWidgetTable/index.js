import CardTransactionWidgetTableStc from './CardTransactionWidgetTable.stc';
import { FaUserFriends } from "react-icons/fa";
import {Row,Col,Table} from 'reactstrap';
import Link from 'next/link';
import Image from 'next/image';
import { FaChevronRight } from "react-icons/fa";
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import { BsCheckCircle } from "react-icons/bs";
import { BsPencilSquare } from "react-icons/bs";
import { useTable } from 'react-table'
import React, { Component, Fragment } from 'react';
import Datatable from 'react-bs-datatable';

import moment from 'moment';

const LISTE_TRANSACTION=gql`
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
            sent
            received
            fees
            total
            paid
            
        }
    }
`;



const CardTransactionWidgetTable =()=>{

    const {data,error,loading}=useQuery(LISTE_TRANSACTION);

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

        

        var i;
        if(data!=='undefined')
        {
            
            for (i = 0; i < data?.transactions?.length; i++) {
                body.push(
                    {
                        client:<a href="">{data.transactions[i]?.client?.firstname}</a>,
                        sent:data.transactions[i].sent,
                        received:data.transactions[i].received,
                        fees:data.transactions[i].fees,
                        total:data.transactions[i].total,
                        paid:data?.transactions[i]?.paid?<span className="yes"><BsCheckCircle /></span>:<span className="no">-</span>,
                        action:<span><Link href="/transaction"><a><BsPencilSquare /></a></Link></span>
                    }
                );
                
            }
        }

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
        <CardTransactionWidgetTableStc>
            <h2 className="cardTitre">Transactions</h2>
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
            
        </CardTransactionWidgetTableStc>
    )
}
export default CardTransactionWidgetTable;