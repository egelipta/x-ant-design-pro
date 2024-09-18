import React, { useState, useEffect, useRef } from 'react';
import { ProCard } from '@ant-design/pro-components';
import { Avatar, Button, Col, Flex, Form, List, Row, Select, Space, Tooltip } from 'antd';
import VirtualList from 'rc-virtual-list';
import TextArea from 'antd/es/input/TextArea';
import { PaperClipOutlined, SmileOutlined } from '@ant-design/icons';

const initialConversation = [
    {
        title: 'System',
        desc: 'Notification',
        content: 'Selamat datang! Ada yang bisa saya bantu?',
        time: new Date().toLocaleTimeString(),  // Waktu awal percakapan
    },
];

const Conversation: React.FC = () => {
    const ContainerHeight = 400;
    const [dataConversation, setDataConversation] = useState(initialConversation);
    const [message, setMessage] = useState('');
    const [platform, setPlatform] = useState('');
    const [sender, setSender] = useState('');
    const listRef = useRef(null);

    const handleSend = () => {
        if (!message || !platform || !sender) return;

        const newMessage = {
            title: sender,
            desc: platform,
            content: message,
            time: new Date().toLocaleTimeString(),  // Tambahkan waktu terkirim
        };

        setDataConversation((prevData) => [...prevData, newMessage]);
        setMessage(''); // Bersihkan input setelah mengirim
    };

    // Auto-scroll ke bawah setiap kali pesan baru diterima
    useEffect(() => {
        if (listRef.current) {
            // Scroll ke bagian paling bawah
            const listNode = listRef.current as any;
            listNode.scrollTo({
                top: listNode.scrollHeight,
                behavior: 'smooth',  // Tambahkan efek scroll yang mulus
            });
        }
    }, [dataConversation]);

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ width: '50%' }}>
                <List>
                    <VirtualList
                        data={dataConversation}
                        height={ContainerHeight}
                        itemHeight={10}
                        itemKey="title"
                        ref={listRef}
                    >
                        {(item, index) => (
                            <List.Item key={index}>
                                <List.Item.Meta
                                    avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=1`} />}
                                    title={
                                        <>
                                            <b>{item.title}</b> . <small>{item.time}</small> . via ({item.desc})
                                        </>
                                    }
                                    description={
                                        <div>
                                            <p>{item.content}</p>
                                            {/* <small>{item.time}</small> */}
                                        </div>
                                    }
                                />
                            </List.Item>
                        )}
                    </VirtualList>
                </List>
            </div>

            {/* ProCard sticky di bagian bawah */}
            <ProCard
                style={{
                    borderRadius: '10px',
                    position: 'fixed',
                    bottom: 20,
                    width: '50%',
                    boxShadow: '0 -2px 8px rgba(0, 0, 0, 0.1)',
                }}
            >
                <Form layout="vertical">
                    <Row gutter={16}>
                        <Col xs={24} md={12} xxl={6}>
                            <Form.Item name="platform" label="Via">
                                <Select
                                    showSearch
                                    placeholder="Pilih platform"
                                    optionFilterProp="label"
                                    value={platform}
                                    onChange={setPlatform}
                                    options={[
                                        { value: 'Whatsapp', label: 'Whatsapp' },
                                        { value: 'Email', label: 'Email' },
                                        { value: 'Telegram', label: 'Telegram' },
                                    ]}
                                />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12} xxl={6}>
                            <Form.Item name="name" label="From">
                                <Select
                                    showSearch
                                    placeholder="Pilih pengirim"
                                    optionFilterProp="label"
                                    value={sender}
                                    onChange={setSender}
                                    options={[
                                        { value: 'Hanif', label: 'Hanif' },
                                        { value: 'Reza', label: 'Reza' },
                                        { value: 'Waldo', label: 'Waldo' },
                                    ]}
                                />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={24} xxl={24} style={{ marginBottom: 16 }}>
                            <TextArea
                                rows={3}
                                placeholder="Tuliskan pesan Anda..."
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                        </Col>
                        <Col xs={24} md={12} xxl={12}>
                            <Space>
                                <Tooltip title="Lampiran">
                                    <Button shape="circle" icon={<PaperClipOutlined />} />
                                </Tooltip>
                                <Tooltip title="Emotikon">
                                    <Button shape="circle" icon={<SmileOutlined />} />
                                </Tooltip>
                            </Space>
                        </Col>
                        <Col xs={24} md={12} xxl={12}>
                            <Flex gap="small">
                                <Button block style={{ flex: 1 }}>
                                    End Chat
                                </Button>
                                <Button type="primary" block style={{ flex: 1 }} onClick={handleSend}>
                                    Send
                                </Button>
                            </Flex>

                        </Col>
                    </Row>
                </Form>
            </ProCard>
        </div>
    );
};

export default Conversation;
