import CardTransactionWidgetStc from './CardTransactionWidget.stc';
import { FaUserFriends } from "react-icons/fa";
import {Row,Col} from 'reactstrap';

import dynamic from 'next/dynamic'

// import Chart from "react-apexcharts";

const Chart = dynamic(
    () => import('react-apexcharts'),
    { ssr: false }
  )

  

const CardTransactionWidget =()=>{

    var options = {
        series: [{
          name: "Desktops",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
      }],
        chart: {
        height: 350,
        type: 'line',
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight'
      },
      title: {
        text: '',
        align: 'left'
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5
        },
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
      }
      };

    return(
        <CardTransactionWidgetStc>
            <h2 className="cardTitre">Transaction</h2>
            <Row className="cardTransactionHead">
                <Col md={4} className="cardTransactionColumn active">
                    <h4>Total transaction</h4>
                    <h2>$9000 0000 000</h2>
                </Col>
                <Col md={4} className="cardTransactionColumn">
                    <h4>Total transaction</h4>
                    <h2>$9000 0000 000</h2>
                </Col>
                <Col md={4} className="cardTransactionColumn">
                    <h4>Total transaction</h4>
                    <h2>$9000 0000 000</h2>
                </Col>
                
            </Row>
            <Row className="courbe">
                <Col lg={12}>
                   <Chart 
                    type="area"
                    series={options.series}
                    options={options}
                    width="100%"
                    />
                </Col>
            </Row>
        </CardTransactionWidgetStc>
    )
}
export default CardTransactionWidget;