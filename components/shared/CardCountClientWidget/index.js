import CardCountClientWidgetStc from './CardCountClientWidget.stc';
import { FaUserFriends } from "react-icons/fa";
import {Row,Col} from 'reactstrap';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import TestContext from '../../../ContextAPI/TestContext';
import { useContext } from 'react';

export const LISTE_CLIENT_BOX=gql`
query
{
  clients
  { 
  	id
    date_save
    transactions
    {
      id
     
    }
  }
}
`;

const CardCountClientWidget =(props)=>{

  const filtre = useContext(TestContext);


    const {data,error,loading}=useQuery(LISTE_CLIENT_BOX);

   const countClient=data?.clients?.length;

   let total=0;

   let body = [];
   var date1=filtre.date;

   if(data)
   {
    for (let index = 0; index < countClient; index++) {
       var date_save=data?.clients[index]?.date_save;
          // console.log(date_save)
       if(date_save!==null)
       {
          if(filtre.type===0)
          {
            if(date_save===date1)
            {
              // console.log("trouvé")
              if(data?.clients[index]?.transactions!="")
              {
                  // total++;
                  body.push(
                    {
                      id:data?.clients[index]?.id
                    }
                  )
              }

            }
          }
          else if(filtre.type===1)
          {
            var sub=date_save.split("-");
            var nd=sub[1]+"-"+sub[0]
            if(nd===date1)
            {
              // console.log("trouvé")
              if(data?.clients[index]?.transactions!="")
              {
                  // total++;
                  body.push(
                    {
                      id:data?.clients[index]?.id
                    }
                  )
              }

            }
          }
          else if(filtre.type===2)
          {
            var sub=date_save.split("-");
            var nd=sub[0]
            console.log(date1)
            if(nd==date1)
            {
              // console.log("trouvé")
              if(data?.clients[index]?.transactions!="")
              {
                  // total++;
                  body.push(
                    {
                      id:data?.clients[index]?.id
                    }
                  )
              }

            }
          }
          else
          {
           
            if(date_save==date1)
            {
              // console.log("trouvé")
              if(data?.clients[index]?.transactions!="")
              {
                  // total++;
                  body.push(
                    {
                      id:data?.clients[index]?.id
                    }
                  )
              }

            }
          }
       }
      
    }
  }
    return(
        <CardCountClientWidgetStc>
            <Row>
                <Col sm={4} className="col-4">
                    <span className="spanIcon"><FaUserFriends/></span>
                </Col>
                <Col sm={8} className="col-8">
                    <h4>Clients actifs</h4>
                    <h2>{body.length}</h2>
                    <p className="action">Sur <span action>{countClient}</span> au total </p>
                </Col>
            </Row>
        </CardCountClientWidgetStc>
    )
}
export default CardCountClientWidget;