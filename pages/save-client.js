import Link from 'next/link'
import { Container, Row, Col, Card } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components";
import AsideBar from '../components/AsideBar';
import HeadBar from '../components/HeadBar';
import TrCardWidget from '../components/shared/TrCardWidgetLeft';
import CardTransactionWidgetTable from '../components/shared/CardTransactionWidgetTable';
import useUser from '../lib/useUser';
import Router from 'next/router'
import FormSaveClient from '../components/shared/formSaveClient';
const Wrapper = styled.div`

/* ---------------------------------------------------
    SIDEBAR STYLE
----------------------------------------------------- */
.wrapper {
    display: flex;
    align-items: stretch;
}

.row
{
    margin-left:0px;
    margin-right:0px;
}
 
`;

export default function SaveClient() {
    const { user } = useUser()
    
    if(user?.isLoggedIn===false){
        Router.push('/connexion');

        return <p>Loading...</p>
    }
    // console.log(user?.isLoggedIn)

  return (
      <Wrapper>
        <div className="wrapper">
            <AsideBar  />
            <div id="content" className="generalAdminBody">

                <HeadBar />
                <div className="adminBody">
                    <Col lg={12}>
                        <FormSaveClient />
                    </Col>
                </div>
            </div>
        </div>
      </Wrapper>
  )
}