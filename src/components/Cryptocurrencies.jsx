import React, { useEffect, useState } from 'react'
import millify from 'millify'
import {Link} from 'react-router-dom'
import {Card, Row, Col, Input} from 'antd'
import { Typography } from 'antd';

import { useGetCryptosQuery } from '../services/cryptoApi'
import Loading from './Loading';

const { Title } = Typography;

const Cryptocurrencies = ({simplified}) => {

    const count = simplified ? 10 : 100;
    const {data: cryptosList, isFetching} = useGetCryptosQuery(count);
    const [cryptos, setCryptosList] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {

        const filteredData = cryptosList?.data?.coins.filter((coin) => coin.name.toLowerCase().includes(searchTerm));

        setCryptosList(filteredData);

    }, [cryptosList, searchTerm]);


    if(isFetching) return <Loading />;

    return (
        <>
            {!simplified && (
                <div className="search-crypto">
                    <Input placeholder="Search Cryptocurrency" onChange={(e) => setSearchTerm(e.target.value)} />
                </div>
            )}
            <Row gutter={[32, 32]} className="crypto-card-container">
                {cryptos?.map((currency) => (
                    <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.id} >
                        <Link to={`/crypto/${currency.id}`}>
                            <Card className="card-name" title={<Title level={3}>{`${currency.rank}. ${currency.name}`}</Title>} hoverable
                                extra={<img className="crypto-image" src={currency.iconUrl} alt="" />} >
                                    <p className="card-details">Price (in USD): {millify(currency.price)}</p>
                                    <p className="card-details">MarketCap : {millify(currency.marketCap)}</p>
                                    <p className="card-details">Daily Change : {millify(currency.change)}</p>
                                    <p className="card-details">All Time High (in USD) : {millify(currency.allTimeHigh.price)}</p>
                                </Card>
                        </Link>
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default Cryptocurrencies
