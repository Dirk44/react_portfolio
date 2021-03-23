import React from 'react';
import { Col } from "react-bootstrap";
// import Images from "../../Images"

export default function PortfolioCard(props) {
    // const styles = {
    //     marginRight: "5px",
    //     marginLeft: "5px"
    // }
    return (
        <Col md={4} style={{padding: "5px"}}>
            <a href={props.link}><img className="port-img" src={props.img} alt={props.title}/></a>
          <p>{props.title}</p>
        </Col>
    )
}
