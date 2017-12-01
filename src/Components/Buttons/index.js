import React from 'react';
import PropTypes from 'prop-types';
import './styles/index.less';

export default function Button(props) {
  return (
    <button className={`btn ${props.buttonType} ${props.buttonClass}`}>
      {props.title}
    </button>
  );
}

Button.defaultProps = {
  title: 'Button Text',
  buttonClass: '',
  buttonType: 'btn-primary',
};

Button.propTypes = {
  title: PropTypes.string,
  buttonClass: PropTypes.string,
  buttonType: PropTypes.string,
};
