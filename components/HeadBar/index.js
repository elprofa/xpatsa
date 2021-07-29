import React, { useState } from "react";
import { Row, Col } from "reactstrap";
import { FaRocketchat } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa";
import MonBouton from "../shared/Bouton/Bouton";
import "bootstrap/dist/css/bootstrap.min.css";
import HeadBarStc from "./HeadBar.stc";
import Image from "next/image";
import Link from "next/link";
import { BiMenu } from "react-icons/bi";
import CardCountClientWidget from "../shared/CardCountClientWidget";
import CardCountTransactionWidget from "../shared/CardCountTransactionWidget";
import DateFilter from "../shared/DateFilter";
import fetchJson from "../../lib/fetchJson";
import useUser from "../../lib/useUser";
import CardTotalAmoutTransaction from "../shared/CardTotalAmoutTransaction";
import { TestProvider } from "../../ContextAPI/TestContext";
import { useRouter } from "next/router";

const HeadBar = (props) => {
  const router = useRouter();

  const { pathname } = router;
  const { user, mutateUser } = useUser();

  const hideNavBar = () => {
    var element = document.getElementById("sidebar");

    element.classList.toggle("hidden");

    var cls = element.className;
    var search = cls.search("hidden");
  };

  var d1 = new Date();
  var dd = String(d1.getDate()).padStart(2, "0");
  var mm = String(d1.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = d1.getFullYear();
  d1 = yyyy + "-" + mm + "-" + dd;

  const [date1, setDate1] = useState(d1);
  const [type1, setType1] = useState(0);

  const filtre = {
    date: date1,
    setDate: setDate1,
    type: type1,
    setType: setType1,
  };

  return (
    <HeadBarStc className="navbar navbar-default">
      <TestProvider value={filtre}>
        <div className="container-fluid">
          <div className="navbar-header">
            <Row>
              <Col lg={5} md={6} className="divSearch">
                <span className="MenuHamburgerAdmin" onClick={hideNavBar}>
                  <BiMenu />
                </span>
                <span className="iconSearch">
                  <FaSearch />
                </span>
                <input
                  type="texte"
                  className="form-control"
                  placeholder="recherche ici ...."
                />
              </Col>
              <Col md={4} lg={2} className="divBoutonNew">
                {pathname == "/clients" ? (
                  <Link href="/save-client">
                    <a>
                      <MonBouton
                        taille="15px"
                        backgroundcolor="#2362bf"
                        texte="Nouveau client"
                      />
                    </a>
                  </Link>
                ) : (
                  <Link href="/save-transaction">
                    <a>
                      <MonBouton
                        taille="15px"
                        backgroundcolor="#2362bf"
                        texte="Nouvelle transaction"
                      />
                    </a>
                  </Link>
                )}
              </Col>
              <Col lg={3} md={4} className="divIconNotification">
                <a>
                  <span>
                    <FaRocketchat />
                    <i className="badge">2</i>
                  </span>
                </a>
                <a>
                  <span>
                    <FaRegBell />
                    <i className="badge">2</i>
                  </span>
                </a>
              </Col>
              <Col lg={2} md={4} className="divPeviewProfil">
                <div className="profilNameRole">
                  {!user?.isLoggedIn && (
                    <>
                      <h3>chargement ....</h3>
                      <span>chargement ....</span>
                    </>
                  )}
                  {user?.isLoggedIn && (
                    <>
                      <h3>{user?.xPatsaUsername}</h3>
                      <span>{user?.xPatsaRole}</span>
                    </>
                  )}
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg={3}>
                <CardCountClientWidget />
              </Col>
              <Col lg={3}>
                <CardCountTransactionWidget />
              </Col>
              <Col lg={3}>
                <CardTotalAmoutTransaction />
              </Col>
              <Col lg={3}>
                <DateFilter />
              </Col>
            </Row>
          </div>

          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="#">Page</a>
              </li>
              <li>
                <a href="#">Page</a>
              </li>
              <li>
                <a href="#">Page</a>
              </li>
              <li>
                <a href="#">Page</a>
              </li>
            </ul>
          </div>
        </div>
      </TestProvider>
    </HeadBarStc>
  );
};
export default HeadBar;
