import React from 'react';
import classNames from 'classnames';
import ChatMessageInterface from 'interfaces/ChatMessageInterface';
import ChatComponent from './ChatComponent';

interface ChatPanelProps {
  conversation: ChatMessageInterface[];
  onlineUsers: number;
  isVisible: boolean;
}

const ChatPanel: React.FC<ChatPanelProps> = ({ isVisible, ...props }) => (
  <div
    className={classNames('chat-panel', {
      'chat-panel--visible': isVisible
    })}
  >
    <ChatComponent {...props} />
  </div>
);

export default ChatPanel;
