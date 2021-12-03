import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import etharium from '../../images/ethareum';
import marketCap from '../../images/market-cap';
import totalLocked from '../../images/total-locked';

export default function MainPolls() {
    return (
        <div>
            <Container className="ps-5 pt-2">
                <Row>
                    <Col md={8}>
                        <img className="img-fluid" src={etharium} alt="" />
                    </Col>
                    <Col className="text-white" md={4}>
                        
                        {/* Market cap card */}
                        <Card className="mb-3" style={{ width: '100%' , background:'#15213D' }}>
                            <div className='d-flex justify-content-around pt-3'>
                                <div>
                                    <Card.Title>Market Cap</Card.Title>
                                    <Card.Text>
                                        <div>
                                            <span>SCT Price</span>
                                            <br />
                                            <p>$750.00</p>
                                        </div>
                                        <div>
                                            <span>SCT holdings</span>
                                            <br />
                                            <p>$750.00</p>
                                        </div>
                                    </Card.Text>
                                </div>
                                <div>
                                    <img style={{width:'8rem',height:'170px'}} src={marketCap} alt="" />
                                </div>
                            </div>
                        </Card>

                        {/* Total Locked card */}
                        <Card className="" style={{ width: '100%' , background:'#15213D' }}>
                            <div className='d-flex justify-content-around pt-3'>
                                <div>
                                    <img style={{width:'8rem',height:'170px'}} src={totalLocked} alt="" />
                                </div>
                                <div>
                                    <Card.Title>Total Locked</Card.Title>
                                    <Card.Text>
                                        <div>
                                            <span>Circulating Supply</span>
                                            <br />
                                            <p>$750.00</p>
                                        </div>
                                        <div>
                                            <span>Total Reflection</span>
                                            <br />
                                            <p>$750.00</p>
                                        </div>
                                    </Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
