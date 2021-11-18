import React, { Component } from 'react';
import { Layout, Menu, Button, Select } from 'antd';
import './homepage.css';
import brand from '../asset/img/brand.svg';
import banner from '../asset/img/banner.png';
import banner1_bk from '../asset/img/banner1_bk.svg';
import icon_Intelligent from '../asset/img/icon_Intelligent.svg';
import icon_Creative from '../asset/img/icon_Creative.svg';
import icon_Competence from '../asset/img/icon_Competence.svg';
import icon_Satisfaction from '../asset/img/icon_Satisfaction.svg';
import enterprise from '../asset/img/enterprise.svg';
import software from '../asset/img/software.svg';
import users from '../asset/img/users.svg';
import banner2 from '../asset/img/banner2.png';
import banner2_bk from '../asset/img/banner2_bk.svg';
import data from '../asset/img/data.png';
import talk from '../asset/img/talk.png';
import lite from '../asset/img/lite.png';
import banner3 from '../asset/img/banner3.png';
import { useTranslation, Trans, Translation } from 'react-i18next'

import { Container, Nav, Navbar, Row, Col, Image } from 'react-bootstrap';

const { Option } = Select;
export default function HomePage() {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         language: 'English'
    //     };
    //     this.handleChange = this.handleChange.bind(this);
    // }
    let { t ,i18n} = useTranslation()
    const item = ['Products', 'Solutions', 'Learn', 'Support'];

    function handleChange(value) {
        console.log("value", value)
        i18n.changeLanguage(value);
    }

    console.log('iii', i18n.defaultValue)


    

    // render() {
        
        return (
        <div >
            <Navbar bg="light" expand="lg" className="header">
                <Container>
                    <Navbar.Brand href="#home">
                        <img className = "brand" src={brand} alt="brand"></img>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#product">{t('products')}</Nav.Link>
                            <Nav.Link href="#solution">{t('Solutions')}</Nav.Link>
                            <Nav.Link href="#learn">{t('Learn')}</Nav.Link>
                            <Nav.Link href="#support">{t('Support')}</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    

                    {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown> */}
                </Container>
                <Select defaultValue={"en"} onChange={handleChange}>
                    <Option value="zh">中文</Option>
                    <Option value="en">EN</Option>
                    
                </Select>
                
            </Navbar>
            <div className="section01">
                <Container>
                    <Row>
                    {/* sm  md  lg xl  xxl   */}
                        <Col xxl={{span: 6, order: 'first'}} xl={{span: 6, order: 'first'}} lg={{span: 6, order: 'first'}} md={{span: 6, order: 'first'}} sm={{span: 6, order: 'first'}} xs={{span: 12, order: 'first'}} className="section01-left">
                            <div className="jumbotron">
                                <h1 className="section01-left-title">Calliope</h1>
                                <p className="section01-left-subtitle">{t('Powering')}</p>
                                <p className="section01-left-description">{t('Automatically')}</p>
                                <p>
                                <a className="btn btn-lg btn-primary" href="#calliope-data" role="button">{t('Explore')}</a>
                                </p>
                            </div>
                        </Col>
                        <Col xxl={{span: 6, order: 'first'}} xl={{span: 6, order: 'first'}} lg={{span: 6, order: 'first'}} md={{span: 6, order: 'first'}} sm={{span: 6, order: 'first'}}  xs={{span: 12, order: 'last'}}>
                            <Image src={banner}  style={{width: '100%', marginTop: '80px'}}/>
                        </Col>
                    </Row>
                    
                </Container>
                <Row style={{marginRight: 0}}>
                    <Image src={banner1_bk} style={{padding: 0, marginRight: 0}}/>
                    {/* <p className="section01-bottom">C A L L I O P E </p> */}
                </Row>              
            </div>
            <div className="section02">
                <Container>
                    <Row >
                        <div className="slider">
                        <h1 className="slider-title">{t('More')}</h1>
                        <Row>
                            <Col className="card01" xxl={3} xl={3} lg={3} md={3} sm={6} xs={6}>
                                <img className = "card-icon" src={icon_Intelligent} alt="icon_Intelligent"></img>
                                <h2 className = "card-title">{t('Intelligent')}</h2>
                                <p className = "card-description">{t('Employs')}</p>
                            </Col>
                            <Col className="card01" xxl={3} xl={3} lg={3} md={3} sm={6} xs={6}>
                                <img className = "card-icon" src={icon_Creative} alt="icon_Creative"></img>
                                <h2 className = "card-title">{t('Creative')}</h2>
                                <p className = "card-description">{t('Provide')}</p>
                            </Col>
                            <Col className="card01" xxl={3} xl={3} lg={3} md={3} sm={6} xs={6}>
                                <img className = "card-icon" src={icon_Competence} alt="icon_Competence"></img>
                                <h2 className = "card-title">{t('Competence')}</h2>
                                <p className = "card-description">{t('Efficient')}</p>
                            </Col>
                            <Col className="card01" xxl={3} xl={3} lg={3} md={3} sm={6} xs={6}>
                                <img className = "card-icon" src={icon_Satisfaction} alt="icon_Satisfaction"></img>
                                <h2 className = "card-title">{t('Satisfaction')}</h2>
                                <p className = "card-description">{t('Professional')}</p>
                            </Col>
                        </Row> 
                        </div> 
                    </Row>
                    <Row className="section02-row02">
                        <Col xxl={4} xl={4} lg={4} md={4} sm={6} xs={6}>
                            <div className="card02">
                                <img className = "card02-icon" src={enterprise} alt="enterprise"></img>
                                <h2 className = "card02-title">{t('enterprise')}</h2>
                                <p className = "card02-description">{t('enterprise-detail')}</p>
                                <a class="btn btn-lg btn-primary section02-btn" href="../../components/#navbar" role="button">{t('enterprise-explore')}</a>
                            </div>
                        </Col>
                        <Col xxl={4} xl={4} lg={4} md={4} sm={6} xs={6}>
                            <div className="card02">
                                <img className = "card02-icon" src={software} alt="software"></img>
                                <h2 className = "card02-title">{t('software')}</h2>
                                <p className = "card02-description">{t('software-detail')}</p>
                                <a class="btn btn-lg btn-primary section02-btn" href="../../components/#navbar" role="button">{t('software-explore')}</a>
                            </div>
                        </Col>
                        <Col xxl={4} xl={4} lg={4} md={4} sm={6} xs={6}>
                            <div className="card02">
                                <img className = "card02-icon" src={users} alt="users"></img>
                                <h2 className = "card02-title">{t('users')}</h2>
                                <p className = "card02-description">{t('users-detail')}</p>
                                <a class="btn btn-lg btn-primary section02-btn" href="../../components/#navbar" role="button">{t('users-explore')}</a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="section03">
                <Container>
                    <Row>
                    {/* sm  md  lg xl  xxl   */}
                        <Col xxl={{span: 6, order: 'first'}} xl={{span: 6, order: 'first'}} lg={{span: 6, order: 'first'}} md={{span: 6, order: 'first'}} sm={{span: 6, order: 'first'}} xs={{span: 12, order: 'last'}} >
                            <div className="section03-left">
                                <Image className="banner2_bk" src={banner2_bk} />
                                <p className="section03-left-description">{t('suites')}</p>
                                <a className="section03-left-btn btn btn-lg btn-primary" href="../../components/#navbar" role="button">{t('try')}</a>
                            </div>
                        </Col>
                        <Col xxl={6} xl={6} lg={6} md={6} sm={6} xs={0}>
                            <Image src={banner2}  style={{width: '100%', marginTop: '80px', paddingRight: '3rem'}}/>
                        </Col>
                    </Row>  
                </Container>
            </div>
            <div className="section04" id="calliope-data">
                <Container>
                    <Row>
                        <Col xxl={{span: 5, order: 'first'}} xl={{span: 5, order: 'first'}} lg={{span: 5, order: 'first'}} md={{span: 5, order: 'first'}} sm={{span: 5, order: 'first'}} xs={{span: 12, order: 'last'}} >
                            <div className="section04-left">
                                <h1 className="section04-left-title">Calliope·Data</h1>
                                <p className="section04-left-description">{t('Calliope·Data-detail')}</p>
                                <p>
                                <a className="btn btn-lg btn-primary" href="https://datacalliope.com/" target="_blank" role="button">{t('Calliope·Data-try')}</a>
                                </p>
                            </div>
                        </Col>
                        <Col xxl={7} xl={7} lg={7} md={7} sm={7} xs={0}>
                            <Image src={data}  style={{width: '100%', marginTop: '80px'}}/>
                        </Col>

                    </Row>  
                </Container>
            </div>
            <div className="section05">
                <Container>
                    <Row>
                        <Col xxl={7} xl={7} lg={7} md={7} sm={7} xs={0}>
                            <Image src={lite}  style={{width: '100%', marginTop: '80px'}}/>
                        </Col>
                        <Col xxl={{span: 5, order: 'second'}} xl={{span: 5, order: 'second'}} lg={{span: 5, order: 'second'}} md={{span: 5, order: 'second'}} sm={{span: 5, order: 'second'}} xs={{span: 12, order: 'last'}} >
                            <div className="section04-left">
                                <h1 className="section04-left-title">Calliope·Lite</h1>
                                <p className="section04-left-description">{t('Calliope·Lite-detail')}</p>
                                <p>
                                <a className="btn btn-lg btn-primary" href="https://lite.datacalliope.com/#/" target="_blank" role="button">{t('Calliope·Lite-try')}</a>
                                </p>
                            </div>
                        </Col>

                    </Row>  
                </Container>
            </div>
            <div className="section06">
                <Container>
                    <Row>
                        <Col xxl={{span: 5, order: 'first'}} xl={{span: 5, order: 'first'}} lg={{span: 5, order: 'first'}} md={{span: 5, order: 'first'}} sm={{span: 12, order: 'first'}} xs={{span: 12, order: 'last'}} >
                            <div className="section04-left">
                                <h1 className="section04-left-title">Calliope·Talk</h1>
                                <p className="section04-left-description">{t('Calliope·Talk-detail')}</p>
                                <p>
                                <a className="btn btn-lg btn-primary" href="../../components/#navbar" role="button">{t('Calliope·Talk-try')}</a>
                                </p>
                            </div>
                        </Col>
                        <Col xxl={7} xl={7} lg={7} md={7} sm={0} xs={0}>
                            <Image src={talk}  style={{width: '100%', marginTop: '80px'}}/>
                        </Col>

                    </Row>  
                </Container>
            </div>
            <div className="section07">
                <Container>
                    <Row>
                        <Col xxl={7} xl={7} lg={7} md={7} sm={7} xs={0} style={{padding: '0 50px'}}>
                            <Image src={banner3}  style={{width: '100%', marginTop: '80px'}}/>
                        </Col>
                        <Col xxl={{span: 5, order: 'second'}} xl={{span: 5, order: 'second'}} lg={{span: 5, order: 'second'}} md={{span: 5, order: 'second'}} sm={{span: 5, order: 'second'}} xs={{span: 12, order: 'last'}} >
                            <div className="section04-left">
                                <h1 className="section04-left-title">{t('see')}</h1>
                                <p className="section04-left-description">{t('see-detail')}</p>
                                
                                <p>
                                <a className="btn btn-lg btn-primary" href="../../components/#navbar" role="button">{t('demo')}</a>
                                </p>
                                <p>
                                <a className="btn btn-lg btn-primary" href="../../components/#navbar" role="button">{t('video')}</a>
                                </p>
                            </div>
                        </Col>

                    </Row>  
                </Container>
            </div>
        </div>
        )
    // }
}