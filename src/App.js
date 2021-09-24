import React from 'react'
import { Switch, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import { Navbar, Exchanges, Homepage, Cryptocurrencies, News, CryptoDetails } from './components';
import './App.css';
import Scroll from './components/Scroll';

const App = () => {
    return (
        <div className="app">
            <div className="navbar">
                <Navbar />
            </div>
            <div className="main">
                <Scroll />
                <Layout>
                    <div className="routes">
                        <Switch>
                            <Route exact path="/">
                                <Homepage />
                            </Route>
                            <Route exact path="/exchanges">
                                <Exchanges />
                            </Route>
                            <Route exact path="/cryptocurrencies">
                                <Cryptocurrencies />
                            </Route>
                            <Route exact path="/crypto/:coinId">
                                <CryptoDetails />
                            </Route>
                            <Route exact path="/news">
                                <News />
                            </Route>
                        </Switch>
                    </div>
                </Layout>

            <div className="footer">
                    <Typography.Title level={5} style={{color: 'white', textAlign: 'center', fontSize: '30px'}}>
                        CRYPTOVERSE <br /> 
                        A Web Application made by <a href="https://swastik-portfolio.netlify.app/" target="_blank" rel="noreferrer">Swastik </a><br />
                    </Typography.Title>
                    <Space size={30}>
                        <Link to="/">Home</Link>
                        <Link to="/cryptocurrencies">Cryptocurrencies</Link>
                        <Link to="/exchanges">Exchanges</Link>
                        <Link to="/news">News</Link>
                    </Space>
                    <a href="https://github.com/swastik58/cryptoverse" target="_blank" rel="noreferrer">GitHub Source Code</a>
                </div>
            </div>
        </div>
    )
}

export default App
