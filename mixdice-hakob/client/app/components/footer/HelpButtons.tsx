import * as React from 'react';
import { Button } from 'reactstrap';
import Chat from 'assets/svg/chat.svg';
import Support from 'assets/svg/support.svg';
import classNames from 'classnames';

interface InputProps {
  onClickHelp(): any;
  onClickChat(): any;
}

export const Input: React.FC<InputProps> = ({ onClickHelp, onClickChat }) => {
  return (
    <>
      <Button
        color="primary"
        click={onClickHelp}
        className={classNames('help-button__support')}
      >
        <Support /> Support
      </Button>
      <Button
        color="primary"
        click={onClickChat}
        className={classNames('help-button__chat')}
      >
        <Chat /> Chat
      </Button>
    </>
  );
};

export default Input;
