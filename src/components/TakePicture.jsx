import React from 'react';
import Webcam from 'react-webcam';
import ShowImage from './ShowImage';
import { addImage } from '../actions/index';

class TakePicture extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      masterImageList: [{}]
    };
    this.capture = this.capture.bind(this);
  }

  capture(props){
    let newImageList = this.state.masterImageList.slice();
    const imageSrc = props.getScreenshot();
    console.log(imageSrc);
    newImageList.push(imageSrc);
    this.setState({masterImageList: newImageList});
    console.log(newImageList);
  }

  render() {
    const videoConstraints = {
      width: 1280,
      height: 720,
      facingMode: 'user'
    };

    let _image = null;

    return (
      <div>
        <Webcam
          audio={false}
          height={350}
          ref={(input) => {_image = input;}}
          screenshotFormat='image/jpeg'
          width={350}
          videoConstraints={videoConstraints}
        />
        <button onClick={() => this.capture(_image)}>Capture photo</button>
        <h1>Form</h1>
        {this.state.masterImageList.map((image, i) =>
          <div key={i}>
            <ShowImage
              imageURL = {image}
              key={i}
            />
            <hr/>
          </div>
        )}
      </div>
    );
  }
}

export default TakePicture;
