import Link from 'next/link'
import { Container, Row, Col, Card } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components";
import AsideBar from '../../components/AsideBar';
import HeadBar from '../../components/HeadBar';
import CardTransactionDetail from '../../components/shared/CardTransactionDetail';
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
export default function Transaction({query}) {
  return (
      <Wrapper>
        <div className="wrapper">
            <AsideBar  />
            <div id="content" className="generalAdminBody">

                <HeadBar />
                <div className="adminBody">
                    <CardTransactionDetail id_transaction={query.id} />
                </div>
            </div>
        </div>
      </Wrapper>
  )
}