import React from 'react';
import { Col } from "react-bootstrap";
// import Images from "../../Images"

export default function PortfolioCard(props) {
    return (
        <Col lg={3}>
            <li><a href={props.link}><img src={props.img} /></a></li>
          <p>{props.title}</p>
        </Col>
    )
}
