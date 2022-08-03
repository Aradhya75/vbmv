    import React from 'react'
    import Allpizza from "../pizza-data";
    import { Col, Container, Row } from 'react-bootstrap';
    import Pizza from '../components/Pizza'
    
    const Homescreen = () => {
      return (
        <>
         <Container>
            <Row>
                { Allpizza.map(pizza =>(
                    <Col md={4}>
                       <Pizza pizza={pizza}  />               
                    </Col>
                )) }
            </Row>
         </Container>
        </>
      )
    }
    
    export default Homescreen