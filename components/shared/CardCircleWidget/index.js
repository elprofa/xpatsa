import CardCircleWidgetStc from './CardCircleWidget.stc';
import { FaUserFriends } from "react-icons/fa";
import {Row,Col,Table} from 'reactstrap';
import Link from 'next/link';
import Image from 'next/image';

import dynamic from 'next/dynamic'

// import Chart from "react-apexcharts";

const Chart = dynamic(
    () => import('react-apexcharts'),
    { ssr: false }
  )

const CardCircleWidget =()=>{

    
    var options = {
        series: [44, 55, 41, 17, 15],
        chart: {
        type: 'donut',
      },
      dataLabels: {
        enabled: false,
      },
      legend:{
        show:false,
        position:'bottom'
      },
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
      };
      
    var series= [
        
        {

        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91]
        }
    ]

    return(
        <CardCircleWidgetStc> 
            <Row className="cardCircleBody">
            <Col lg={12}>
                <Chart 
                    type="donut"
                    series={options.series}
                    options={options}
                    width="100%"
                    />
            </Col>
            </Row>
            
        </CardCircleWidgetStc>
    )
}
export default CardCircleWidget;