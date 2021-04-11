import Link from 'next/link'
import { Container, Row, Col, Card } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components";
import AsideBar from '../../../components/AsideBar';
import HeadBar from '../../../components/HeadBar';
import FormUpdateClient from '../../../components/shared/formUpdateClient';
import useUser from '../../../lib/useUser';
import Router from 'next/router'

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

export default function UpdateClient(props) {
    const { user } = useUser()
    
    if(user?.isLoggedIn===false){
        Router.push('/connexion');

        return <p>Loading...</p>
    }
  return (
      <Wrapper>
        <div className="wrapper">
            <AsideBar  />
            <div id="content" className="generalAdminBody">

                <HeadBar />
                <div className="adminBody">
                    <Col lg={12}>
                        <FormUpdateClient id_client={props.query.id} />
                    </Col>
                </div>
            </div>
        </div>
      </Wrapper>
  )
}