import React, { Component } from 'react';
import { Col, Container, Nav, Tab, Row } from 'react-bootstrap';

export default class About extends Component {
    render() {
        return (
           <Container>
               <Tab.Container id="ledt-tabs-example" defaultActiveKey="first" >
                    <Row>
                        <Col sm={3}>
                            <Nav variant='pills' className='flex-column mt-2'>
                                <Nav.Item>
                                    <Nav.Link eventKey="first">
                                        Design
                                    </Nav.Link>
                                    <Nav.Link eventKey="second">
                                        Team
                                    </Nav.Link>
                                    <Nav.Link eventKey="third">
                                        Programming
                                    </Nav.Link>
                                    <Nav.Link eventKey="fourth">
                                        Frameworks
                                    </Nav.Link>
                                    <Nav.Link eventKey="fifth">
                                        Libraries
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content className='mt-3'>
                                <Tab.Pane eventKey="first">
                                    <img src="https://media.istockphoto.com/photos/winter-hiking-picture-id531106307?k=20&m=531106307&s=612x612&w=0&h=IZRjS844stJeqDn1bBja4hsv2RTLPzAsSHxZqZluGZk="/>
                                    <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <img src="https://media.istockphoto.com/photos/ice-crystal-picture-id925624048?k=20&m=925624048&s=612x612&w=0&h=w3p_0xzsAONPPUWPxydZ3VlVT_VDOBS7QsNrNEj8zGE="/>
                                    <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <img src="https://media.istockphoto.com/photos/tilted-blue-version-ice-skates-with-reflection-picture-id511302560?k=20&m=511302560&s=612x612&w=0&h=eswxcZflBUEwgq-lAgERgkNUd8QGamN9NV5M7rHo5TA="/>
                                    <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth">
                                    <img src="https://media.istockphoto.com/photos/walking-the-mountains-picture-id649597850?k=20&m=649597850&s=612x612&w=0&h=EkjZ5iwG0rsV3RuYfEhHtQDLlE44NTv5m4ZhczLZHPY="/>
                                    <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fifth">
                                    <img src="https://media.istockphoto.com/photos/female-hiker-standing-in-the-snow-picture-id1220996921?k=20&m=1220996921&s=612x612&w=0&h=ftRnmOdG6b1ZJf7vtqm_ThWy5ZfNeTfbSCnDnqxDOss="/>
                                    <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa
                                    </p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
               </Tab.Container>
           </Container>
        );
    }
}

// export default About;