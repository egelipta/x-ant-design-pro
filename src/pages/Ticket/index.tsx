import React, { useState } from 'react';
import { PageContainer, ProColumns, ProTable } from '@ant-design/pro-components';
import { data } from './Datas/data';
import { Button, Dropdown, message, Space, Tag, Image } from 'antd';
import Add from './Components/add-data';
import { EditOutlined, DeleteOutlined, EllipsisOutlined } from '@ant-design/icons';

const Ticket: React.FC = () => {
    const [drawerVisible, setDrawerVisible] = useState(false);

    const showDrawer = () => {
        setDrawerVisible(true);
    };

    const closeDrawer = () => {
        setDrawerVisible(false);
    };

    const renderPriority = (priority: number) => {
        let color: string;
        let text: string;

        if (priority === 1) {
            color = '#2fc44f';
            text = 'Low';
        } else if (priority === 2) {
            color = '#f5aa42';
            text = 'Medium';
        } else if (priority === 3) {
            color = '#f5424b';
            text = 'High';
        } else {
            color = 'default';
            text = 'Unknown';
        }

        return <Tag color={color}>{text}</Tag>;
    };

    const renderType = (type: number) => {
        let color: string;
        let text: string;

        if (type === 1) {
            // color = '#2fc44f';
            text = 'Question';
        } else if (type === 2) {
            // color = '#f5aa42';
            text = 'Sugestion';
        } else if (type === 3) {
            // color = '#f5424b';
            text = 'Question';
        } else {
            // color = 'default';
            text = 'Problem';
        }

        return <Tag>{text}</Tag>;
    };

    const columns: ProColumns[] = [
        {
            title: 'ID Ticket',
            dataIndex: 'code',
            copyable: true,
        },
        {
            title: 'Subject',
            dataIndex: 'subject',
        },
        {
            title: 'Priority',
            dataIndex: 'priority',
            render: (_, record) => renderPriority(record.priority),
        },
        {
            title: 'Type',
            dataIndex: 'type',
            render: (_, record) => renderType(record.type),
        },
        {
            title: 'Client',
            dataIndex: 'name',
            render: (_dom, record) => (
                <Space>
                    <Image
                        width={30}
                        src={record.image}
                        style={{ borderRadius: '50%' }}
                    />
                    <span>{record.name}</span>
                </Space>
            ),
        },
        {
            title: 'Request Date',
            dataIndex: 'date',
        },
        {
            title: '',
            key: 'option',
            valueType: 'option',
            width: 120,
            render: (_dom, record) => [
                <Dropdown
                    trigger={['click']}
                    menu={{
                        items: [
                            {
                                label: [<a onClick={() => { message.success(`${record.name} updated`) }}><EditOutlined /> Update</a>],
                                key: 'update',
                            },
                            {
                                type: 'divider',
                            },
                            {
                                label: [<a onClick={() => { message.error(`${record.name} deleted`) }}><DeleteOutlined /> Delete</a>],
                                key: 'delete',
                            }

                        ]
                    }}>
                    <a onClick={(e) => e.preventDefault()}>
                        <Space>
                            <EllipsisOutlined style={{ fontSize: 20 }} />
                        </Space>
                    </a>
                </Dropdown>
            ],
        },
    ];

    return (
        <PageContainer>
            <ProTable
                columns={columns}
                request={(params, sorter, filter) => {
                    console.log(params, sorter, filter);
                    return Promise.resolve({
                        data: data,
                        success: true,
                    });
                }}
                rowKey="id"
                pagination={{
                    showQuickJumper: true,
                    defaultPageSize: 10,
                }}
                defaultSize='small'
                toolBarRender={() => [
                    <Button key="primary" type="primary" onClick={showDrawer}>
                        Add Ticket
                    </Button>,
                ]}
            />
            <Add visible={drawerVisible} onClose={closeDrawer} />
        </PageContainer>
    );
};

export default Ticket;
