import React from 'react';
import classNames from 'classnames';
import uuid from 'uuid';
import { FormGroup, CustomInput } from 'reactstrap';

interface CheckboxProps {
  label?: string;
  onChange?: (object: object) => boolean;
  id?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  onChange,
  id = uuid()
}) => {
  function handleOnChange(e) {
    onChange && onChange(e.target.checked);
  }
  return (
    <FormGroup>
      <CustomInput
        onChange={handleOnChange}
        type="checkbox"
        id={id}
        label={label}
      />
    </FormGroup>
  );
};

export default Checkbox;
