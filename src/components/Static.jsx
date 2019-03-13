import React from 'react';
import Screen from './Screen';
import Form from './Form';
import { v4 } from 'uuid';
import Webcam from 'react-webcam';
import ShowImage from './ShowImage';
import marilyn from '../assets/images/marilyn.png';
import Header from './Header';
import FileSave from './FileSave';
import { Link } from 'react-router-dom';
import { addImage } from './../actions/index';

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
    let newMasterButtonList = this.state.masterButtonList.slice();
    let array = this.state.successArray.slice();
    newMasterButtonList.forEach((button) => {
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
    this.setState({masterButtonList: newMasterButtonList});
    this.setState({successArray: array});
  }

  onHandleFormClick(id){
    let newMasterButtonList = this.state.masterButtonList.slice();
    let array = this.state.formArray.slice();
    newMasterButtonList.forEach((button) => {
      if (id === button.id && button.clicked === false){
        button.clicked = true;
        array[0].numberOfClicks += 1;
        button.pattern += array[0].numberOfClicks;
      }
      if (array[0].numberOfClicks === 3){
        this.setState({formVisibleOnPage: true});
      }
    });
    this.setState({masterButtonList: newMasterButtonList});
    this.setState({formArray: array});
  }

  capture(props){
    let newImageList = this.state.masterImageList.slice();
    const imageSrc = props.getScreenshot();
    newImageList.push(imageSrc);
    addImage(imageSrc);
    this.setState({masterImageList: newImageList});
  }

  render(){

    let _image = null;

    const videoConstraints = {
      width: 1280,
      height: 720,
      facingMode: 'user'
    };

    const hideVideo = {
      opacity: 0
    };

    const showGrid = {
      display: 'grid',
      gridTemplateColumns: '250px 250px 250px 250px',
      gridTemplateRows: '300px 300px 300px 300px 300px 300px 300px 300px 300px 300px 300px 300px',
      gridAutoFlow: 'row',
      justifyContent: 'center',
      paddingTop: '25px'
    };

    const showMarilyn = {
      backgroundImage: 'url(' + marilyn + ')',
      overflow: 'hidden',
      justifyContent: 'center',
      backgroundRepeat: 'no-repeat'
    };

    const centerElements = {
      textAlign: 'center'
    };

    const logOut = {
      textAlign: 'left',
      marginLeft: '25px'
    };

    if (this.state.imagesVisibleOnPage === true){
      return (
        <div>
          <Header/>
          <div style={logOut}>
            <Link to='/'><h3>-Log Out-</h3></Link>
          </div>
          <div style={centerElements}>
            <h1>Files:</h1>
            <FileSave/>
            <h1>Images:</h1>
          </div>
          <div style={showGrid}>
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
        </div>
      );
    } else if (this.state.formVisibleOnPage === false){
      return (
        <div>
          <Header/>
          <div style={centerElements}>
            <h1>Set Your Button Clicks:</h1>
          </div>
          <div style={showGrid}>
            {this.state.masterButtonList.map((butt) =>
              <div key={butt.id}>
                <Form
                  clicked={butt.clicked}
                  pattern={butt.pattern}
                  key={butt.id}
                />
                <img src={marilyn} onClick={() => this.onHandleFormClick(butt.id)}/>
                <hr/>
              </div>
            )}
          </div>
        </div>
      );
    } else {
      return(
        <div>
          <Header/>
          <div style={showGrid}>
            {this.state.masterButtonList.map((butt) =>
              <div key={butt.id}>
                <Screen
                  clicked={butt.clicked}
                  pattern={butt.pattern}
                  key={butt.id}
                />
                <div style={showMarilyn} onClick={() => this.onHandleClick(butt.id, _image)}>
                  <div style={hideVideo}>
                    <Webcam
                      height={200}
                      width={200}
                      audio={false}
                      imageSmoothing={true}
                      screenshotQuality={.95}
                      ref={(input) => {_image = input;}}
                      screenshotFormat='image/jpeg'
                      videoConstraints={videoConstraints}
                    />
                  </div>
                </div>
                <hr/>
              </div>
            )}
          </div>
        </div>
      );
    }
  }
}

export default Static;
