import React from 'react';
import { Col, Drawer, Form, Row, Image, Space, Descriptions, Tag, Divider } from 'antd';
import { ProCard, StatisticCard } from '@ant-design/pro-components';

interface Customer {
    name: string;
    email: string;
    phone: string;
    organization: string;
    date: string;
    lastUpdated: string;
    tags: number;
    image: string;
}

const Detail: React.FC<{
    visible: boolean;
    onClose: () => void;
    customerData: Customer | null;
}> = ({ visible, onClose, customerData }) => {

    const renderTags = (tags: number) => {
        let color: string;
        let text: string;

        if (tags === 1) {
            color = '#2fc44f';
            text = 'Fast Response';
        } else if (tags === 2) {
            color = '#f5aa42';
            text = 'Slow Response';
        } else if (tags === 3) {
            color = '#f5424b';
            text = 'No Response';
        } else {
            color = 'default';
            text = 'Unknown';
        }

        return <Tag color={color}>{text}</Tag>;
    };

    return (
        <Drawer
            title="Customer Preview"
            width={900}
            onClose={onClose}
            open={visible}
        >
            <Row gutter={[10, 10]}>
                {customerData ? (
                    <>
                        <Col xxl={24}>
                            <Space>
                                <Image
                                    src={customerData.image}
                                    width={120}
                                    style={{ borderRadius: '50%', border: '7px solid grey' }}
                                />
                                <h1><b>{customerData.name}</b></h1>
                                <p> {customerData.organization}</p>
                                <p> {customerData.lastUpdated}</p>
                            </Space>
                        </Col>
                        <Col xxl={24}>
                            <Row gutter={[5, 5]}>
                                <Col xs={12} xxl={6}>
                                    <StatisticCard
                                        style={{ boxShadow: '1px 1px 5px grey' }}
                                        statistic={{
                                            title: 'TICKETS',
                                            value: 17,
                                        }}
                                    >
                                    </StatisticCard>
                                </Col>
                                <Col xs={12} xxl={6}>
                                    <StatisticCard
                                        style={{ boxShadow: '1px 1px 5px grey' }}
                                        statistic={{
                                            title: 'OVERDUE TICKET',
                                            value: 5,
                                        }}
                                    >
                                    </StatisticCard>
                                </Col>
                                <Col xs={12} xxl={6}>
                                    <StatisticCard
                                        style={{ boxShadow: '1px 1px 5px grey' }}
                                        statistic={{
                                            title: 'AVG.RESPONSE TIME',
                                            value: 17,
                                        }}
                                    >
                                    </StatisticCard>
                                </Col>
                                <Col xs={12} xxl={6}>
                                    <StatisticCard
                                        style={{ boxShadow: '1px 1px 5px grey' }}
                                        statistic={{
                                            title: 'TOT. RESPONSE TIME',
                                            value: 17,
                                        }}
                                    >
                                    </StatisticCard>
                                </Col>
                                <Col xxl={12}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, nobis vero. Natus mollitia labore quo reiciendis enim dicta dolor officiis error eum? Accusantium cumque dicta laudantium sequi, sunt maxime excepturi.
                                </Col>
                                {/* <Col xs={24} xxl={24} style={{ marginTop: 15 }}>
                                    <Descriptions title='Customer Details' bordered column={1} size='small' layout='horizontal'>
                                        <Descriptions.Item label="Source">bwivuiwe...........</Descriptions.Item>
                                        <Divider></Divider>
                                        <Descriptions.Item label="Phone Number">{customerData.phone}</Descriptions.Item>
                                        <Descriptions.Item label="Email">{customerData.email}</Descriptions.Item>
                                        <Descriptions.Item label="Location">Jakarta, Indonesia</Descriptions.Item>
                                        <Descriptions.Item label="Time Zone">UTC+07:00</Descriptions.Item>
                                        <Descriptions.Item label="Response Time">{renderTags(customerData.tags)}</Descriptions.Item>
                                        <Descriptions.Item label="Location">{customerData.organization}</Descriptions.Item>
                                        <Descriptions.Item label="Description">Add discription</Descriptions.Item>
                                        <Descriptions.Item label="Asignee">Elwin</Descriptions.Item>
                                        <Descriptions.Item label="First Contact">{customerData.date}</Descriptions.Item>
                                    </Descriptions>
                                </Col> */}
                            </Row>
                        </Col>

                    </>
                ) : (
                    <p>No data available</p>
                )}
            </Row>
        </Drawer>
    );
};

export default Detail;
