import React from 'react';
import { Col } from "react-bootstrap";


export default function PortfolioCard(props) {
  
    return (
        <Col md="4" style={{padding: "5px"}}>
            <a href={props.link}><img className="port-img" src={props.img} alt={props.title}/></a>
          <p>{props.title}</p>
        </Col>
    )
}
