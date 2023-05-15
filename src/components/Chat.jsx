// components/Chat.js

import React from 'react';
import ChatSelection from './ChatSelection';
import ChatHeader from './ChatHeader';
import ChatDisplay from './ChatDisplay';
import ChatFooter from './ChatFooter';

const Chat = () => {
    return (
        <div className="flex h-full">
            <ChatSelection />
            <div className="flex flex-col h-full w-full">
                <ChatHeader />
                <ChatDisplay />
                <ChatFooter />
            </div>
        </div>
    );
};

export default Chat;
