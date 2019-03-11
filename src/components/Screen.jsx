import React from 'react';
import PropTypes from 'prop-types';

function Screen(props){

  const imageConstraints = {
    maxWidth: 200,
    maxHeight: 200,
  };

  return(
    <div style={imageConstraints}>
    </div>
  );
}

Screen.propTypes = {
  pattern: PropTypes.number,
};

export default Screen;
