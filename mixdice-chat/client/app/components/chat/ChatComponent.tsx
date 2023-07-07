import React, { useState } from 'react';
import ChatMessageInterface from 'interfaces/ChatMessageInterface';
import ChatHeader from 'app/components/chat/components/ChatHeader';
import ChatContent from 'app/components/chat/components/ChatContent';
import ChatForm from 'app/components/chat/components/ChatForm';
import { user } from 'app/dummyData';
import uniqid from 'uniqid';
import moment from 'moment';

interface ChatComponentProps {
  conversation: ChatMessageInterface[];
  onlineUsers: number;
}

const ChatComponent: React.FC<ChatComponentProps> = ({
  conversation,
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
    <>
      <ChatHeader onlineUsers={onlineUsers} />
      <ChatContent
        onMessageClick={handleSetUsernameToForm}
        conversation={conversations}
      />
      <ChatForm
        appendUsername={usernameToForm}
        onSubmit={handleChatFormSubmit}
      />
    </>
  );
};

export default ChatComponent;
