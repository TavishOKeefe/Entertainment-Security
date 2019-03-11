import React from 'react';
import PropTypes from 'prop-types';

function ShowImage(props){

  return(
    <div>
      <style jsx>{`
        .box {
          display: hide;
          grid-template-columns: 200px 200px 200px;
          grid-template-rows: 200px 200px 200px
        }
        .box:hover {
          display: show;
          border-bottom: 2px solid #ccc;
          outline: 0;
        }
      `}</style>
      <div className="box">
        <img src={props.imageURL}/>
      </div>
    </div>
  );
}

ShowImage.propTypes = {
  imageURL: PropTypes.string
};

export default ShowImage;
