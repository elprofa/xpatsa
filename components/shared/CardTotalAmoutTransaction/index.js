import CardTotalAmoutTransactionStc from "./CardTotalAmoutTransaction.stc";
import { FaUserFriends } from "react-icons/fa";
import { Row, Col } from "reactstrap";
import gql from "graphql-tag";
import { useQuery } from "@apollo/client";
import { getResult } from "../utils/utils";
import { useState } from "react";
import TestContext from "../../../ContextAPI/TestContext";
import { useContext } from "react";

export const LISTE_TRANSACTION_BOX = gql`
  query {
    transactions {
      id
      total
      created_at
      from
      paid
    }
  }
`;

const CardTotalAmoutTransaction = (props) => {
  const filtre = useContext(TestContext);
  let total = 0;
  let total1 = 0;
  const [tot, setTotal] = useState(2);
  const { data, error, loading } = useQuery(LISTE_TRANSACTION_BOX);
  var date1 = filtre.date;

  if (data) {
    const countClient = data?.transactions?.length;
    for (let index = 0; index < countClient; index++) {
      var created_at = data?.transactions[index]?.created_at;
      var paid = data?.transactions[index]?.paid;
      if (created_at !== null && paid) {
        if (filtre.type === 0) {
          document.getElementById("displayTotalAmountTr").innerHTML = 0;
          if (created_at === date1) {
            var n = data?.transactions[index]?.total;
            var res = getResult(data?.transactions[index]?.from, "XAF", n);

            const promise = Promise.resolve(res);
            promise.then((valeur) => {
              if (valeur) {
                var prix = Math.floor(valeur);

                total = total + parseInt(prix);
                // setTotal(total);
                document.getElementById("displayTotalAmountTr").innerHTML =
                  total;
              }
            });
          }
        } else if (filtre.type === 1) {
          document.getElementById("displayTotalAmountTr").innerHTML = 0;
          var sub = created_at.split("-");
          var nd = sub[1] + "-" + sub[0];
          if (nd === date1) {
            var n = data?.transactions[index]?.total;
            var res = getResult(data?.transactions[index]?.from, "XAF", n);

            const promise = Promise.resolve(res);
            promise.then((valeur) => {
              if (valeur) {
                var prix = Math.floor(valeur);

                total = total + parseInt(prix);
                // setTotal(total);
                document.getElementById("displayTotalAmountTr").innerHTML =
                  total;
              }
            });
          }
        } else if (filtre.type === 2) {
          document.getElementById("displayTotalAmountTr").innerHTML = 0;
          var sub = created_at.split("-");
          var nd = sub[0];

          if (nd == date1) {
            var n = data?.transactions[index]?.total;
            var res = getResult(data?.transactions[index]?.from, "XAF", n);

            const promise = Promise.resolve(res);
            promise.then((valeur) => {
              if (valeur) {
                var prix = Math.floor(valeur);

                total = total + parseInt(prix);
                // setTotal(total);
                document.getElementById("displayTotalAmountTr").innerHTML =
                  total;
              }
            });
          }
        } else if (filtre.type === 3) {
          document.getElementById("displayTotalAmountTr").innerHTML = 0;
          console.log(created_at + " - " + date1);
          if (created_at === date1) {
            var n = data?.transactions[index]?.total;
            var res = getResult(data?.transactions[index]?.from, "XAF", n);

            const promise = Promise.resolve(res);
            console.log("trouvé");
            promise.then((valeur) => {
              if (valeur) {
                var prix = Math.floor(valeur);

                total = total + parseInt(prix);
                // setTotal(total);
                document.getElementById("displayTotalAmountTr").innerHTML =
                  total;
              }
            });
          }
        }

        // total=total+parseInt(n);
      }

      if (paid) {
        // afficher l'ensemble des totaux des transactions
        var n = data?.transactions[index]?.total;
        var res = getResult(data?.transactions[index]?.from, "XAF", n);

        const promise = Promise.resolve(res);
        promise.then((valeur) => {
          if (valeur) {
            var prix = Math.floor(valeur);
            // console.log(parseInt(prix))
            total1 = total1 + parseInt(prix);
            // setTotal(total);
            document.getElementById("displayTotalAmountTrTotal").innerHTML =
              total1;
          }
        });
      }
    }
  }

  return (
    <CardTotalAmoutTransactionStc>
      <Row>
        <Col sm={4} className="col-4">
          <span className="spanIcon">
            <FaUserFriends />
          </span>
        </Col>
        <Col sm={8} className="col-8">
          <h4>Total payé</h4>
          <h2>
            <span id="displayTotalAmountTr">0</span> XAF
          </h2>
          <p className="action">
            Sur{" "}
            <span action id="displayTotalAmountTrTotal">
              0
            </span>{" "}
            XAF de total
          </p>
        </Col>
      </Row>
    </CardTotalAmoutTransactionStc>
  );
};
export default CardTotalAmoutTransaction;
