import React from 'react';
import PropTypes from 'prop-types';

function Screen(props){
  
  return(
    <div>
      <p>{props.clicked}</p>
      <p>{props.pattern}</p>
      <p>{props.key}</p>
    </div>
  );
}

Screen.propTypes = {
  clicked: PropTypes.string,
  pattern: PropTypes.number,
  key: PropTypes.string,
};

export default Screen;