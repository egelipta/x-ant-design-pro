import React from 'react';
import { ProChat } from '@ant-design/pro-chat';
import { useTheme } from 'antd-style';
import '../Ticket/Components/style.css'

const Conversation: React.FC = () => {
    const theme = useTheme();

    const delay = (text: string, ms = 5000) => {
        return new Promise((resolve) => setTimeout(() => resolve(text), ms));
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ width: '50%' }}>
                <div style={{ background: theme.colorBgLayout }}>
                    <ProChat
                        locale={'en-US'}
                        // displayMode='docs'
                        showTitle
                        userMeta={{
                            avatar: 'https://randomuser.me/api/portraits/men/78.jpg',
                            title: 'Anda',
                            className: 'my-pro-chat-user',
                        }}
                        assistantMeta={{
                            avatar: 'https://randomuser.me/api/portraits/men/8.jpg',
                            title: 'Reza Ganda',
                            className: 'my-pro-chat-assistant',
                        }}
                        style={{
                            height: '530px',
                            boxShadow: '0px 0px 5px',
                            borderRadius: '5px',
                            padding: '10px',
                            overflow: 'auto',
                            scrollbarWidth: 'none',  // Firefox
                            msOverflowStyle: 'none',  // IE and Edge
                        }}
                        helloMessage={'Ticket created...'}
                        request={async (messages) => {
                            const text = await delay(
                                `${messages.length}.Kapalo ayah ang!`,
                            );
                            return new Response(text as string);
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Conversation;
