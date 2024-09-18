import React, { useState } from 'react';
import { Drawer, Button, Col, Form, Input, Row, Select, Space, Radio, RadioChangeEvent, message, SelectProps, Dropdown, MenuProps } from 'antd';
import PageTwo from './page-two'
import { useNavigate } from 'react-router-dom';
import { DownOutlined } from '@ant-design/icons';

const Add: React.FC<{ visible: boolean; onClose: () => void }> = ({ visible, onClose }) => {
    const navigate = useNavigate();

    const onChange = (e: RadioChangeEvent) => {
        console.log(`radio checked:${e.target.value}`);
    };

    const onSave = () => {
        message.success('Yay... ticket has been successfully saved!');
        console.log('Save button clicked');
        onClose();
        navigate('/ticket/page-two');
    };

    const items: MenuProps['items'] = [
        {
            label: 'Submit and continue',
            key: '1',
        },
    ];

    return (
        <Drawer
            title="Add Ticket"
            width={550}
            onClose={onClose}
            open={visible}
            extra={
                <Space>
                    <Button onClick={onClose} style={{ marginRight: 8 }}>
                        Cancel
                    </Button>
                    <Dropdown.Button
                        type="primary"
                        icon={<DownOutlined />}
                        menu={{ items }}
                        onClick={() => onSave()}
                    >
                        Submit as new
                    </Dropdown.Button>
                    {/* <Button onClick={onSave} type="primary">
                    Save
                </Button> */}
                </Space>
            }
        >
            <Form layout="vertical">
                <Row gutter={16}>
                    <Col span={24}>
                        <Form.Item
                            name="ticket_name"
                            label="Ticket Name"
                            rules={[{ required: true, message: 'Please enter ticket name' }]}
                        >
                            <Input placeholder="Please enter ticket name" />
                        </Form.Item>
                    </Col>
                    <Col span={24}>
                        <Form.Item
                            name="priority"
                            label="Priority"
                            rules={[{ required: true, message: 'Please enter user name' }]}
                        >
                            <Space>
                                <Radio.Group onChange={onChange} defaultValue="" buttonStyle="solid">
                                    <Radio.Button value={1}>Low</Radio.Button>
                                    <Radio.Button value={2}>Medium</Radio.Button>
                                    <Radio.Button value={3}>High</Radio.Button>
                                </Radio.Group>
                            </Space>
                        </Form.Item>
                    </Col>
                    <Col span={24}>
                        <Form.Item
                            name="type"
                            label="Ticket Type"
                            rules={[{ required: true, message: 'Please select ticket type' }]}
                        >
                            <Select
                                showSearch
                                placeholder="Select a ticket type"
                                filterOption={(input, option) =>
                                    (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                }
                                options={[
                                    { value: 1, label: 'Incident' },
                                    { value: 2, label: 'Sugestion' },
                                    { value: 3, label: 'Question' },
                                    { value: 4, label: 'Problem' },
                                ]}
                            />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="requester"
                            label="Requester"
                            rules={[{ required: true, message: 'Please select ticket type' }]}
                        >
                            <Select
                                showSearch
                                placeholder="Select a requester"
                                filterOption={(input, option) =>
                                    (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                }
                                options={[
                                    { value: 1, label: 'Hanif' },
                                    { value: 2, label: 'Reza' },
                                    { value: 3, label: 'Septia' },
                                    { value: 4, label: 'Teguh' },
                                ]}
                            />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="assigne"
                            label="Assigne"
                            rules={[{ required: true, message: 'Please select assignee' }]}
                        >
                            <Select
                                showSearch
                                placeholder="Select an assignee"
                                filterOption={(input, option) =>
                                    (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                }
                                options={[
                                    { value: 1, label: 'Elwin' },
                                    { value: 2, label: 'Yo' },
                                    { value: 3, label: 'Rory' },
                                ]}
                            />
                        </Form.Item>
                    </Col>
                </Row>
                <Col span={24}>
                    <Form.Item
                        name="tags"
                        label="Tags"
                        rules={[{ required: true, message: 'Please select tags' }]}
                    >
                        <Select
                            mode="tags"
                            placeholder="Tags Mode"
                            options={[
                                { value: 1, label: 'Order' },
                                { value: 2, label: 'Incident' },
                                { value: 3, label: 'Missing' },
                                { value: 4, label: 'Help Customer' },
                                { value: 5, label: 'Support' },
                            ]}
                        />
                    </Form.Item>
                </Col>

                <Row gutter={16}>
                    <Col span={24}>
                        <Form.Item
                            name="description"
                            label="Description"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please enter the description',
                                },
                            ]}
                        >
                            <Input.TextArea rows={4} placeholder="Please enter the description" />
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </Drawer>
    );
};

export default Add;
