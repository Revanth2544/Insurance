// insurance.js

import React from 'react';
import './insurance.css';
import { Card, Col, Row, Image, Carousel, Flex, Progress } from 'antd';
import { UploadOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { Button, Upload } from 'antd';
import { Link } from 'react-router-dom'

function Insurance() {
  const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };
  return (
    <>
      <Row gutter={14} style={{
        marginLeft: "400px",
        marginRight: "px",
        marginTop: "10px",
      }}>
        <Col span={8}>
          <Card title="Claim Form" bordered={false} style={{ border: '1px solid rgb(91 91 91)', fontFamily: "Montserrat" }} >
            <Upload
              action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
              listType="picture"
            >
              <Button icon={<UploadOutlined />} style={{ fontFamily: "Montserrat", fontSize: "16px" }}>Upload</Button>
            </Upload>
          </Card>
        </Col>
        <Col span={8}>
          <span>
            <Card title="Claim Documents" bordered={false} style={{ border: '1px solid rgb(91 91 91)', fontFamily: "Montserrat", fontSize: "16px" }}>
              <span>
                <Upload
                  action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                  listType="picture"
                >
                  <Button icon={<UploadOutlined />} style={{ fontFamily: "Montserrat", fontSize: "16px" }}>Upload</Button>
                </Upload>
              </span>
            </Card>
          </span>
        </Col>
      </Row >
      <br />

      <Card style={{ width: "80%", marginLeft: "150px", border: '1px solid rgb(91 91 91)', marginBottom: "20px" }}>
        <Card type="inner" title="Preview Of Document 01" style={{ fontFamily: "Montserrat", }}>
          <Carousel autoplay>
            <div>
              <Image
                width={150}
                src="../insurance.jpg"
                style={contentStyle}
              />
            </div>
          </Carousel>
        </Card>

      </Card>

      <Card type="inner" title="Click on the documents to view details" style={{ width: "80%", marginLeft: "150px", marginTop: "20px", border: '1px solid rgb(91 91 91)', fontFamily: "Montserrat", marginBottom:"10px"}}>
        <Flex gap="small" vertical style={{ width: "80%", marginLeft: "120px", justifyContent: 'space-between', marginTop: "10px" }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ marginRight: '16px', width: "27%", fontFamily: "poppins", fontSize: "16px" }}><b>Document 1:</b> Field 1 & 2 are missing</span>
          </div>
          <Progress percent={30} size="small" style={{ width: "50%", marginLeft: "37%", marginTop: "-30px" }} />

          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ marginRight: '16px', width: "33.9%", fontFamily: "poppins", fontSize: "16px" }}><b>Document 2:</b> All the fields are completely filled</span>
          </div>
          <Progress percent={50} size="small" status="active" style={{ width: "50%", marginTop: "-30px", marginLeft: "37%" }} />

          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ marginRight: '16px', width: "24.1%", fontFamily: "poppins", fontSize: "16px" }}><b>Document 3:</b> Amount not entered</span>
          </div>
          <Progress percent={70} size="small" status="active" style={{ width: "50%", marginTop: "-30px", marginLeft: "37%" }} />

          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ marginRight: '16px', width: "18%", fontFamily: "poppins", fontSize: "16px" }}><b>Documnet 4:</b> Completed</span>
          </div>
          <Progress percent={100} size="small" status="active" style={{ width: "50%", marginTop: "-30px", marginLeft: "37%", marginBottom: "10px" }} />

        </Flex>
        <Link to="/nextpage" style={{ marginLeft: "90%", marginTop: "20px", width: "20px", height: "20px" }}>
          <span>Next&nbsp;Page&nbsp;<ArrowRightOutlined /></span>
        </Link>
      </Card>
    </>
  );
}

export default Insurance;
