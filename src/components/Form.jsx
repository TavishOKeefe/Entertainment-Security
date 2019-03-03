import React from 'react';
import PropTypes from 'prop-types';

function Form(props){
  return(
    <div>
    <p>{props.clicked}</p>
    <p>{props.pattern}</p>
  </div>
);
}

Form.propTypes = {
clicked: PropTypes.bool,
pattern: PropTypes.number
};

export default Form;
