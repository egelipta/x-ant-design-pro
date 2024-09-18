import React from 'react';
import { PageContainer } from '@ant-design/pro-components';
import { Avatar, List, Tabs } from 'antd';
import Conversation from './conversation';



const PageTwo: React.FC = () => {
    return (
        <PageContainer>
            <Tabs
                centered
                defaultActiveKey="1"
                items={[
                    {
                        label: 'Conversation',
                        key: '1',
                        children: <Conversation />,
                    },
                    {
                        label: 'Task',
                        key: '2',
                        children: 'ini Task',
                    },
                    {
                        label: 'Activity Logs',
                        key: '3',
                        children: 'ini Activity Logs',
                    },
                    {
                        label: 'Notes',
                        key: '4',
                        children: 'ini Notes',
                    },
                ]}
            />
        </PageContainer>
    );
};

export default PageTwo;
