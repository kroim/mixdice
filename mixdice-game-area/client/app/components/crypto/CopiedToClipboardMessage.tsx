import React from 'react';
import classNames from 'classnames';
import Check from 'assets/svg/check.svg';

interface CopiedToClipboardMessageProps {
  children?: string;
  title?: string;
  visible?: boolean;
}

const CopiedToClipboardMessage: React.FC<CopiedToClipboardMessageProps> = ({
  children,
  title = 'Copied to Clipboard',
  visible = true
}) => {
  if (!visible) return null;
  return (
    <div className={classNames('copied-to-clipboard-message')}>
      <div className={classNames('copied-to-clipboard-message__icon')}>
        <Check />
      </div>
      <div className={classNames('copied-to-clipboard-message__content')}>
        <div
          className={classNames('copied-to-clipboard-message__content__title')}
        >
          {title}
        </div>
        <div
          className={classNames(
            'copied-to-clipboard-message__content__message'
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default CopiedToClipboardMessage;
