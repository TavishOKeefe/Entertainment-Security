import React from 'react';
import PropTypes from 'prop-types';

function ShowImage(props){
  return(
    <div>
      <img src={props.imageURL}/>
    </div>
  );
}

ShowImage.propTypes = {
  imageURL: PropTypes.string
};

export default ShowImage;
