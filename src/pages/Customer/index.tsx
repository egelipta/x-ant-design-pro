import React, { useState } from 'react';
import { PageContainer, ProCard, ProColumns, ProTable } from '@ant-design/pro-components';
import { dataCustomer } from './Datas/data'
import { Button, Dropdown, Image, MenuProps, message, Space, Tag } from 'antd';
import { DeleteOutlined, DownOutlined, EditOutlined, EllipsisOutlined, ProfileOutlined } from '@ant-design/icons';
import Detail from './Components/detail';

interface Customer {
    id: number;
    name: string;
    email: string;
    phone: string;
    organization: string;
    date: string;
    lastUpdated: string;
    tags: number;
    image: string;
}


const Customer: React.FC = () => {
    const [drawerVisible, setDrawerVisible] = useState(false);
    const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);

    const showDrawer = (customer: Customer) => {
        console.log("Selected Customer:", customer); // Log the customer data
        setSelectedCustomer(customer);
        setDrawerVisible(true);
    };


    const closeDrawer = () => {
        setDrawerVisible(false);
    };

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

    const columns: ProColumns[] = [
        {
            title: 'Name',
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
            sorter: (a, b) => a.name.localeCompare(b.name),
        },
        {
            title: 'Email',
            dataIndex: 'email',
            // sorter: (a, b) => a.email.localeCompare(b.email),
        },
        {
            title: 'Phone Number',
            dataIndex: 'phone',
            copyable: true,
        },
        {
            title: 'Date Created',
            dataIndex: 'date',
            sorter: (a, b) => a.date.localeCompare(b.date),
        },
        {
            title: 'Organization',
            dataIndex: 'organization',
        },
        {
            disable: true,
            title: 'Tags',
            dataIndex: 'tags',
            search: false,
            // renderFormItem: (_, { defaultRender }) => {
            //     return defaultRender(_);
            // },
            render: (_, record) => renderTags(record.tags),
        },
        {
            title: 'Last Updated',
            dataIndex: 'lastUpdated',
        },
        {
            title: '',
            key: 'option',
            valueType: 'option',
            width: 120,
            render: (_dom, d) => [
                <Dropdown
                    trigger={['click']}
                    menu={{
                        items: [
                            {
                                label: [<a onClick={() => showDrawer(d)}><ProfileOutlined /> Preview</a>],
                                key: 'detail',
                            },
                            {
                                type: 'divider',
                            },
                            {
                                label: [<a onClick={() => { message.success(`${d.name} updated`) }}><EditOutlined /> Update</a>],
                                key: 'update',
                            },
                            {
                                label: [<a onClick={() => { message.error(`${d.name} deleted`) }}><DeleteOutlined /> Delete</a>],
                                key: 'delete',
                            },

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
                        data: dataCustomer,
                        success: true,
                    });
                }}
                rowKey="id"
                pagination={{
                    showQuickJumper: true,
                    defaultPageSize: 10,
                }}
                defaultSize='small'
            // toolBarRender={() => [
            //     <Button key="primary" type="primary" onClick={showDrawer}>
            //         Add Ticket
            //     </Button>,
            // ]}
            />

            <Detail visible={drawerVisible} onClose={closeDrawer} customerData={selectedCustomer as Customer} />


        </PageContainer>

    );
};

export default Customer;
