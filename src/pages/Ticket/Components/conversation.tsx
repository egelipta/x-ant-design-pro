import React, { useEffect, useState } from 'react';
import { ChatMessage, ProChat } from '@ant-design/pro-chat';
import { useTheme } from 'antd-style';
import './style.css';
import { dataChat } from '../Datas/data-chat';

// Define an extended ChatMessage type
interface ExtendedChatMessage extends ChatMessage<Record<string, any>> {
    title?: string;
    avatar?: string;
}

const Conversation: React.FC = () => {
    const theme = useTheme();
    const [chats, setChats] = useState<ExtendedChatMessage[]>(dataChat.initialChats);

    // Function to extract user and assistant meta info based on chats
    const getUserMeta = () => {
        const userChat = chats.find(chat => chat.role === 'user');
        return {
            avatar: userChat?.avatar,
            title: userChat?.title || 'User',
        };
    };

    const getAssistantMeta = () => {
        const assistantChat = chats.find(chat => chat.role === 'assistant');
        return {
            avatar: assistantChat?.avatar,
            title: assistantChat?.title || 'Assistant',
        };
    };

    const delay = (text: string, ms = 3000) => {
        return new Promise((resolve) => setTimeout(() => resolve(text), ms));
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ width: '50%' }}>
                <div style={{ background: theme.colorBgLayout }}>
                    <ProChat
                        locale={'en-US'}
                        showTitle
                        chats={chats}
                        onChatsChange={(newChats) => {
                            setChats(newChats);
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
                        userMeta={getUserMeta()}
                        assistantMeta={getAssistantMeta()}
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
