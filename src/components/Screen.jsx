import React from 'react';
import PropTypes from 'prop-types';

function Screen(props){
  return(
    <div>
      <p>{props.clicked}</p>
      <p>{props.pattern}</p>
    </div>
  );
}

Screen.propTypes = {
  clicked: PropTypes.string,
  pattern: PropTypes.number
};

export default Screen;