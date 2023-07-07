import React, { PureComponent } from 'react';
import Modal from 'app/components/Modal';
import classNames from 'classnames';
import ProvablyFairTabs from './ProvablyFairTabs';
import ProvablyFairIcon from 'assets/svg/fair-big.svg';
import { Redirect } from 'react-router-dom';
import ProvablyFair from 'app/containers/provablyFair/ProvablyFair';

interface Props {
  clientSeed: string;
}
type State = Readonly<{
  modalOpened: boolean;
}>;
class ProvablyFairModal extends PureComponent<Props, State> {
  readonly state: State = {
    modalOpened: true
  };
  handleModalClose = () => this.setState({ modalOpened: false });
  render() {
    const { modalOpened } = this.state;
    const { clientSeed } = this.props;
    if (!modalOpened) {
      return <Redirect to="/" />;
    }
    return (
      <Modal
        className={classNames('provably-fair-modal modal--no-collapse')}
        icon={<ProvablyFairIcon />}
        title="ProvablyFair"
        isOpened={modalOpened}
        onClose={this.handleModalClose}
      >
        <ProvablyFair clientSeed={clientSeed} />
      </Modal>
    );
  }
}

export default ProvablyFairModal;
