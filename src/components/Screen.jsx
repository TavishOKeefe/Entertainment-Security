import React from 'react';
import PropTypes from 'prop-types';
import marilyn from '../assets/images/marilyn.png';

function Screen(props){

  const imageConstraints = {
    maxWidth: 200,
    maxHeight: 200,
  };

  return(
    <div style={imageConstraints}>
      <p>{props.pattern}</p>
    </div>
  );
}

Screen.propTypes = {
  pattern: PropTypes.number,
};

export default Screen;
