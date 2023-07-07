import React, { useRef, useEffect } from 'react';
import classNames from 'classnames';
import ChatMessageInterface from 'interfaces/ChatMessageInterface';
import ChatMessageItem from 'app/components/chat/components/ChatMessageItem';

interface ChatContentProps {
  conversation: ChatMessageInterface[];
  onMessageClick?: (messageId: string | number) => any;
}

const ChatContent: React.FC<ChatContentProps> = ({
  conversation,
  onMessageClick
}) => {
  const contentEl = useRef(null);
  useEffect(() => {
    const { current } = contentEl;
    current.scrollTop = current.scrollHeight - current.clientHeight;
  }, []);
  useEffect(() => {
    const { current } = contentEl;
    const maxScroll = current.scrollHeight - current.clientHeight;
    // todo scroll needs to be implemented once we have real data
    // if I am the one who added the message automatically scroll
    if (conversation.length && conversation[conversation.length - 1].isMe) {
      current.scrollTop = maxScroll;
    }
    // if (current.scrollTop === maxScroll) {
    //   console.log('no need');
    // }
  }, [conversation]);
  return (
    <div ref={contentEl} className={classNames('chat-content')}>
      {conversation.map(({ id, isMe, message, date, user }) => (
        <ChatMessageItem
          key={id}
          id={id}
          isMe={isMe}
          message={message}
          date={date}
          user={user}
          onClick={onMessageClick}
        />
      ))}
    </div>
  );
};

export default ChatContent;
