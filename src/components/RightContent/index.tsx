import { BellOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import { SelectLang as UmiSelectLang } from '@umijs/max';
import { Avatar, Badge, Divider, Drawer, List } from 'antd';
import React, { useState } from 'react';

export type SiderTheme = 'light' | 'dark';

export const SelectLang = () => {
  return (
    <UmiSelectLang
      style={{
        padding: 4,
      }}
    />
  );
};

export const Question = () => {
  return (
    <div
      style={{
        display: 'flex',
        height: 26,
      }}
      onClick={() => {
        window.open('https://pro.ant.design/docs/getting-started');
      }}
    >
      <QuestionCircleOutlined />
    </div>
  );
};

export const Notif = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const closeDrawer = () => {
    setVisible(false);
  };

  const data = [
    {
      id: 1,
      title: 'Yo Sandy',
      status: 1,
      desc: 'Lorem ipsum dolor, sit amet'
    },
    {
      id: 2,
      title: 'Reza Ganda',
      status: 1,
      desc: 'Lorem ipsum dolor sit amet'
    },
    {
      id: 3,
      title: 'Muhammad Hanif',
      status: 1,
      desc: 'Lorem ipsum dolor sit.'
    },
    {
      id: 4,
      title: 'Elwin Gelipta',
      status: 0,
      desc: 'Lorem ipsum dolor sit, amet consectetur'
    },
  ];

  const jlhData = data.filter(item => item.status === 1).length;

  return (
    <>
      <div
        style={{
          marginRight: 10,
          display: 'flex',
          height: 26,
        }}
        onClick={showDrawer}
      >
        <Badge size="small" count={jlhData}>
          <BellOutlined style={{ fontSize: 20 }} />
        </Badge>
      </div>
      <Drawer
        width={500}
        title="Notifications"
        placement="right"
        onClose={closeDrawer}
        open={visible}
      >
        <List
          // itemLayout="horizontal"
          dataSource={data}
          renderItem={(item, index) => (
            <a href={`/dashboard/${item.title}`}>
              <List.Item
                extra={[
                  <i><small>2 minutes ago</small></i>
                ]}>
                <List.Item.Meta
                  // avatar={<Avatar src={`https://randomuser.me/api/portraits/men/${index}.jpg`} />}
                  avatar={[
                    <Avatar src={`https://randomuser.me/api/portraits/men/${index}.jpg`} />
                  ]}
                  title={[
                    item.status === 1 ? (
                      <Badge count='new' color='green' size='small' offset={[30, 7]}>
                        {item.title}
                      </Badge>
                    ) : (
                      <>
                        {item.title}
                      </>
                    )
                  ]}
                  description={item.desc}
                />
              </List.Item>
            </a>
          )}
        />
      </Drawer>
    </>
  );
};
