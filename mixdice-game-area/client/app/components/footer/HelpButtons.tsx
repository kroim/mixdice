import React from 'react';
import { Button } from 'reactstrap';
import Chat from 'assets/svg/chat.svg';
import Support from 'assets/svg/support.svg';
import classNames from 'classnames';

interface InputProps {
  onClickHelp: () => any;
  onClickChat: () => any;
  isChatOpened: boolean;
}

export const Input: React.FC<InputProps> = ({
  onClickHelp,
  onClickChat,
  isChatOpened
}) => {
  return (
    <>
      <Button
        color="primary"
        onClick={onClickHelp}
        className={classNames('help-buttons__support', {
          'help-buttons__support--chat-opened': isChatOpened
        })}
      >
        <Support /> Support
      </Button>
      <Button
        color="primary"
        onClick={onClickChat}
        className={classNames('help-buttons__chat', {
          'help-buttons__chat--chat-opened': isChatOpened
        })}
      >
        <Chat /> Chat
      </Button>
    </>
  );
};

export default Input;
