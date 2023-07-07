import React, { useState, useEffect, useRef } from 'react';
import classNames from 'classnames';
import SendIcon from 'assets/svg/send.svg';

interface ChatFormProps {
  onSubmit: (message: string) => any;
  appendUsername: string;
}

const ChatForm: React.FC<ChatFormProps> = ({ onSubmit, appendUsername }) => {
  const [message, setMessage] = useState('');
  const inputEl = useRef(null);
  useEffect(() => {
    const { current } = inputEl;
    if (!appendUsername) return;
    current.value += ` @${appendUsername} `;
    handleOnChange({ target: current });
  }, [appendUsername]);
  function handleOnChange({ target: { value } }) {
    setMessage(value);
  }
  function handleSubmit() {
    if (message && message.trim()) {
      onSubmit(message);
      setMessage('');
    }
  }
  function onInputEnter(e) {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  }
  return (
    <div className={classNames('chat-form')}>
      <input
        type="text"
        ref={inputEl}
        className={classNames('chat-form__input')}
        onChange={handleOnChange}
        value={message}
        onKeyDown={onInputEnter}
        placeholder="Write a message..."
      />
      <div
        onClick={handleSubmit}
        className={classNames('chat-form__send-button')}
      >
        <SendIcon
          className={classNames('chat-form__send-button__icon', {
            'chat-form__send-button__icon--active': !!message
          })}
          viewBox="0 0 512 512"
        />
      </div>
    </div>
  );
};

export default ChatForm;
