import React from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
type closeIconSpacingType = 'small';
interface MobilePopupProps {
  isVisible?: boolean;
  onClose?: () => any;
  closeIconSpacing?: closeIconSpacingType;
}

const MobilePopup: React.FC<MobilePopupProps> = ({
  isVisible,
  children,
  onClose,
  closeIconSpacing
}) => {
  function handleOnClose() {
    onClose && onClose();
  }
  return (
    <div
      className={classNames('mobile-popup', {
        'mobile-popup--visible': isVisible
      })}
    >
      <div
        onClick={handleOnClose}
        className={classNames('mobile-popup__close-icon', {
          'mobile-popup__close-icon--spacing-small':
            closeIconSpacing === 'small'
        })}
      >
        <FontAwesomeIcon icon={faTimes} color="white" />
      </div>
      <div className={classNames('mobile-popup__content')}>{children}</div>
    </div>
  );
};

export default MobilePopup;
