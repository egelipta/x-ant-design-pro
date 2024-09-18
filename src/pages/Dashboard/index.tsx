import { PageContainer, ProCard, StatisticCard } from '@ant-design/pro-components';
import { Col, Progress, Row } from 'antd';
import React from 'react';
import Pie from './Components/pie';
import Column from './Components/column';
import PieHalf from './Components/pie-half'
import { dataStatistic } from './Datas/statistic';
import { DislikeOutlined, LikeOutlined, OneToOneOutlined } from '@ant-design/icons';
import { dataPositive, dataNeutral, dataNegative, dataResponses } from './Datas/dataCustomerStat';

const Dashboard: React.FC = () => {

    return (
        <PageContainer>
            <Row gutter={[5, 5]}>
                {dataStatistic.map((ds, index) => (
                    <Col key={index} xs={24} md={12} xxl={6}>
                        <StatisticCard
                            statistic={{
                                title: <b>{ds.title}</b>,
                                value: `${ds.value}`,
                                description: `${ds.description}`,
                            }}
                        >
                        </StatisticCard>

                    </Col>
                ))}
                <Col xs={24} md={12} xxl={15}>
                    <ProCard title={[
                        <b><i>Average Tickets Created</i></b>
                    ]}>
                        <Column />
                    </ProCard>
                </Col>
                <Col xs={24} md={12} xxl={9}>
                    <ProCard title={[
                        <b><i>Ticket By First Reply Time</i></b>
                    ]}>
                        <Pie />
                    </ProCard>
                </Col>
                <Col xxl={12}>
                    <ProCard title={[
                        <b><i>Ticket By Channels</i></b>
                    ]}>
                        <PieHalf />
                    </ProCard>
                </Col>
                <Col xxl={12}>
                    <ProCard title={[
                        <b><i>Customer Statification</i></b>
                    ]}>

                        <Row gutter={[5, 5]}>
                            <Col xs={24} md={12} xxl={12}>
                                <StatisticCard
                                    style={{ height: 120 }}
                                    bordered
                                    statistic={{
                                        title: `${dataResponses.title}`,
                                        value: `${dataResponses.value}` + ' ' + 'Customers'
                                    }}
                                />
                            </Col>
                            <Col xs={24} md={12} xxl={12}>
                                <StatisticCard
                                    style={{ height: 120 }}
                                    bordered
                                    statistic={{
                                        title: `${dataPositive.title}`,
                                        value: `${dataPositive.value}` + '' + '%',
                                        description: ([
                                            <Progress percent={dataPositive.value} status="active" strokeColor={{ from: '#108ee9', to: '#87d068' }} />

                                        ]),
                                        icon: <LikeOutlined style={{ fontSize: 60, color: '#87d068' }} />
                                    }}
                                />
                            </Col>
                            <Col xs={24} md={12} xxl={12}>
                                <StatisticCard
                                    style={{ height: 120 }}
                                    bordered
                                    statistic={{
                                        title: `${dataNeutral.title}`,
                                        value: `${dataNeutral.value}` + '' + '%',
                                        description: ([
                                            <Progress percent={dataNeutral.value} status="active" strokeColor={{ from: '#108ee9', to: '#87d068' }} />
                                        ]),
                                        icon: <OneToOneOutlined style={{ fontSize: 60, color: 'orange' }} />,
                                    }}
                                />
                            </Col>
                            <Col xs={24} md={12} xxl={12}>
                                <StatisticCard
                                    style={{ height: 120 }}
                                    bordered
                                    statistic={{
                                        title: `${dataNegative.title}`,
                                        value: `${dataNegative.value}` + '' + '%',
                                        description: ([
                                            <Progress percent={dataNegative.value} status="active" strokeColor={{ from: '#108ee9', to: '#87d068' }} />
                                        ]),
                                        icon: <DislikeOutlined style={{ fontSize: 60, color: '#d64540' }} />
                                    }}
                                />
                            </Col>
                        </Row>
                    </ProCard>
                </Col>
            </Row>
        </PageContainer>
    );
};

export default Dashboard;
