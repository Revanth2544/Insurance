// insurance.js

import React from 'react';
import './insurance.css';
import { Card, Col, Row, Image, Carousel, Flex, Progress } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { Button, Upload } from 'antd';

function InsuranceNextPage() {
    const contentStyle = {
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    };
    return (
        <>
           
            <br />
            <Row  style={{
                marginLeft: "266px",
            }}>
                <Col style={{ marginLeft: "-115px", marginRight:"42px" }}>
                    <Card
                        style={{
                            width: 600,
                            border: '1px solid rgb(91 91 91)'
                        }}
                    >
                        <Card type="inner" title="You have taken services of ABC hospital for the following illness" style={{ fontFamily: "Montserrat" }}>
                            <p style={{fontFamily:"poppins", fontSize:"18px"}}><b>k11 -</b> Atrophy of salivary gland</p>
                            <p style={{fontFamily:"poppins", fontSize:"18px"}}><b>k59 -</b> Constipation, unspecified</p>
                            <p style={{fontFamily:"poppins", fontSize:"18px"}}><b>R92 -</b> Abnormal and inconclusive findings on diagnostic imaging</p>
                        </Card>
                    </Card>
                </Col>
                <Col >
                    <Card
                        style={{
                            width: 570,
                            border: '1px solid rgb(91 91 91)'
                        }}
                    >
                        <Card type="inner" title="And the procedure that was performed by the health providers are" style={{ fontFamily: "Montserrat" }}>
                            <p style={{fontFamily:"poppins", fontSize:"18px"}}><b>90805 -</b> Individual psychotherapy approximately 20-30 minutes face to face, with medical evaluation and management services. </p>
                            <p style={{fontFamily:"poppins", fontSize:"18px"}}><b>90801 -</b> Psychiatric diagnostic interview examination</p>
                        </Card>
                    </Card>
                </Col>
            </Row>
            <br />
            <Card style={{
                marginLeft: "150px",
                width: "80%",
                border: '1px solid rgb(91 91 91)',
            }} >
                <Row style={{ display: "flex", justifyContent: "center" }}>
                    <Col span={6} style={{marginLeft:"10px"}}>
                        <Image src="../insurance.jpg" />
                    </Col>
                    <Col span={6} style={{marginLeft:"100px"}}>
                        <Image src="../insurance.jpg" />
                    </Col>
                </Row>
            </Card>
        </>
    );
}

export default InsuranceNextPage;