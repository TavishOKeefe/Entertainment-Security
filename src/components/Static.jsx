import React from 'react';
import Screen from './Screen';
import Form from './Form';
import { v4 } from 'uuid';
import Webcam from 'react-webcam';
import ShowImage from './ShowImage';

class Static extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      masterButtonList: [
        {
          clicked: false,
          pattern: 0,
          id: v4()
        },
        {
          clicked: false,
          pattern: 0,
          id: v4()
        },
        {
          clicked: false,
          pattern: 0,
          id: v4()
        },
        {
          clicked: false,
          pattern: 0,
          id: v4()
        },
        {
          clicked: false,
          pattern: 0,
          id: v4()
        }
      ],

      successArray: [
        {
          trackPattern: 0,
        }
      ],

      formArray: [
        {
          numberOfClicks: 0,
        }
      ],

      formVisibleOnPage: false,
      imagesVisibleOnPage: false,
      masterImageList: []
    };
    this.onHandleClick = this.onHandleClick.bind(this);
    this.onFailureReset = this.onFailureReset.bind(this);
    this.capture = this.capture.bind(this);
  }

  onFailureReset(){
    let array = this.state.successArray.slice();
    array[0].trackPattern = 0;
    this.setState({successArray: array});
  }


  onHandleClick(id, image){
    let workWithThis = this.state.masterButtonList.slice();
    let array = this.state.successArray.slice();
    workWithThis.forEach((button) => {
      if (id === button.id && button.pattern === 0){
        this.onFailureReset();
        this.capture(image);
      } else if (id === button.id && button.pattern === 1 && array[0].trackPattern === 0){
        array[0].trackPattern += 1;
      } else if (id === button.id && button.pattern === 2 && array[0].trackPattern === 1){
        array[0].trackPattern += 1;
      } else if (id === button.id && button.pattern === 3 && array[0].trackPattern === 2){
        this.setState({imagesVisibleOnPage: true});
      } else if (id === button.id){
        this.onFailureReset();
        this.capture(image);
      }
    });
    this.setState({masterButtonList: workWithThis});
    this.setState({successArray: array});
  }

  onHandleFormClick(id){
    let workWithThis = this.state.masterButtonList.slice();
    let array = this.state.formArray.slice();
    workWithThis.forEach((button) => {
      if (id === button.id && button.clicked === false){
        button.clicked = true;
        array[0].numberOfClicks += 1;
        button.pattern += array[0].numberOfClicks;
      } else if (array[0].numberOfClicks === 3){
        this.setState({formVisibleOnPage: true});
      }
    });
    this.setState({masterButtonList: workWithThis});
    this.setState({formArray: array});
  }

  capture(props){
    let newImageList = this.state.masterImageList.slice();
    const imageSrc = props.getScreenshot();
    console.log(imageSrc);
    newImageList.push(imageSrc);
    this.setState({masterImageList: newImageList});
    console.log(newImageList);
  }

  render(){

    let _image = null;

    const videoConstraints = {
      width: 1280,
      height: 720,
      facingMode: 'user'
    };

    const hideVideo = {
      backgroundColor: '#ecf0f1',
      fontFamily: 'sans-serif',
      paddingTop: '50px',
      textAlign: 'center'
    };

    const showVideo = {
      display: 'block'
    };

    if (this.state.imagesVisibleOnPage === true){
      return (
        <div>
          <h1>Images</h1>
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
    } else if (this.state.formVisibleOnPage === false){
      return (
        <div>
          <h1>Set Your Button Clicks</h1>
          {this.state.masterButtonList.map((butt) =>
            <div key={butt.id}>
              <Form
                clicked={butt.clicked}
                pattern={butt.pattern}
                key={butt.id}
              />
              <button onClick={() => this.onHandleFormClick(butt.id)}>Click</button>
              <hr/>
            </div>
          )}
        </div>
      );
    } else {
      return(
        <div style={showVideo}>
          <h1>Screen Saver</h1>
          {this.state.masterButtonList.map((butt) =>
            <div key={butt.id}>
              <Screen
                clicked={butt.clicked}
                pattern={butt.pattern}
                key={butt.id}
              />
              <div style={hideVideo}>
                <Webcam
                  audio={false}
                  imageSmoothing={true}
                  screenshotQuality={.95}
                  ref={(input) => {_image = input;}}
                  screenshotFormat='image/jpeg'
                  videoConstraints={videoConstraints}
                />
              </div>
              <button onClick={() => this.onHandleClick(butt.id, _image)}>Click</button>
              <hr/>
            </div>
          )}
        </div>
      );
    }
  }
}

export default Static;
