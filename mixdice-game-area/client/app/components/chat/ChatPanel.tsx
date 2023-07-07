import React, { useState } from 'react';
import classNames from 'classnames';
import ChatMessageInterface from 'interfaces/ChatMessageInterface';
import ChatHeader from 'app/components/chat/components/ChatHeader';
import ChatContent from 'app/components/chat/components/ChatContent';
import ChatForm from 'app/components/chat/components/ChatForm';
import { user } from 'app/dummyData';
import uniqid from 'uniqid';
import moment from 'moment';

interface ChatPanelProps {
  conversation: ChatMessageInterface[];
  onlineUsers: number;
  isVisible: boolean;
}

const ChatPanel: React.FC<ChatPanelProps> = ({
  conversation,
  isVisible,
  onlineUsers
}) => {
  const [conversations, setConversations] = useState(conversation);
  const [usernameToForm, setUsernameToForm] = useState('');
  function handleSetUsernameToForm(messageId) {
    setUsernameToForm(
      conversations.find(({ id }) => id === messageId).user.username
    );
  }
  function handleChatFormSubmit(message) {
    //todo delete this
    console.log(conversation);
    setConversations([
      ...conversations,
      {
        id: uniqid(),
        message,
        date: moment().toDate(),
        user: user,
        isMe: true
      }
    ]);
  }
  return (
    <div
      className={classNames('chat-panel', { 'chat-panel--visible': isVisible })}
    >
      <ChatHeader onlineUsers={onlineUsers} />
      <ChatContent
        onMessageClick={handleSetUsernameToForm}
        conversation={conversations}
      />
      <ChatForm
        appendUsername={usernameToForm}
        onSubmit={handleChatFormSubmit}
      />
    </div>
  );
};

export default ChatPanel;
