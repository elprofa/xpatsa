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

export const SINGLE_CLIENT1=gql`
    query SINGLE_CLIENT1($id:ID!)
    { 
        client(id:$id)
        {
            firstname
            
            transactions
            {
                id
                created_at
                fees
                total
                paid
            }
        }
        
    }
`;



const CardTransactionClient =(props)=>{

    const {data,error,loading}=useQuery(SINGLE_CLIENT1,{
        variables:{
            id:props.id_client
        }
    });

    const header = [
        { title: 'Operée le ', prop: 'created_at', sortable: true,filterable: true },
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
            
            for (i = 0; i < data?.client?.transactions?.length; i++) {
                body.push(
                    {
                        created_at:data?.client?.transactions[i].created_at,
                        fees:data?.client?.transactions[i].fees,
                        total:data?.client?.transactions[i].total,
                        paid:data?.client?.transactions[i]?.paid?<span className="yes"><BsCheckCircle /></span>:<span className="no">-</span>,
                        action:<div className="iconAction">
                            <span><Link href={"/transaction/update/"+data?.client?.transactions[i]?.id}><a><BsPencilSquare /></a></Link></span>
                            <span><Link href={"/transaction/"+data?.client?.transactions[i]?.id}><a><BsEye /></a></Link></span></div>
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

    console.log(data)
    return(
        <CardTransactionClientStc>
            <h2 className="cardTitre">Les transactions de #{data?.client?.firstname}</h2>
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