import React from 'react';
import classNames from 'classnames';
import ChatComponent from 'app/components/chat/ChatComponent';
import { chatProps } from 'app/dummyData';
interface ChatProps {}
// todo replace with proper data/props
const Chat: React.FC<ChatProps> = () => (
  <ChatComponent
    conversation={chatProps.conversation}
    onlineUsers={chatProps.onlineUsers}
  />
);
export default Chat;
