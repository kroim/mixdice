import React from 'react';
import classNames from 'classnames';
import People from 'assets/svg/people.svg';

interface ChatHeaderProps {
  onlineUsers: number;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ onlineUsers }) => {
  return (
    <div className={classNames('chat-header')}>
      <div className={classNames('chat-header__item')}>
        <People className={classNames('chat-header__item__icon')} />
        <span className={classNames('chat-header__item__label')}>
          {onlineUsers}
        </span>
      </div>
    </div>
  );
};

export default ChatHeader;
