import React, { useState } from 'react';
import classNames from 'classnames';
import ChatMessageInterface from 'interfaces/ChatMessageInterface';
import moment from 'moment';
import { replaceUserMention } from 'app/utils/text';
interface ChatMessageItemProps extends ChatMessageInterface {
  onClick?: (messageId: string | number) => any;
}

const ChatMessageItem: React.FC<ChatMessageItemProps> = ({
  message,
  date,
  user,
  isMe,
  id,
  onClick
}) => {
  function handleMessageClick() {
    onClick && onClick(id);
  }
  message = replaceUserMention(
    message,
    username =>
      `<a class="${classNames(
        'chat-message-item__message-link'
      )}" href="#">${username}</a>`
  );
  return (
    <div
      className={classNames('chat-message-item', {
        'chat-message-item--reversed': isMe
      })}
    >
      <img
        src={user.profileImageUrl}
        className={classNames('chat-message-item__avatar')}
      />
      <div
        onClick={handleMessageClick}
        className={classNames('chat-message-item__content')}
      >
        <div className={classNames('chat-message-item__caret')} />
        <div className={classNames('chat-message-item__content__header')}>
          <div
            className={classNames('chat-message-item__content__header__title')}
          >
            {user.username}
          </div>
          <div
            className={classNames('chat-message-item__content__header__date')}
          >
            {moment(date).format('HH:mm')}
          </div>
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: message }}
          className={classNames('chat-message-item__content__message')}
        />
      </div>
    </div>
  );
};

export default ChatMessageItem;
