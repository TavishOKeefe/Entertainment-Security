import React from 'react';
import Screen from './Screen';
import Form from './Form';
import { v4 } from 'uuid';

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
    };
    this.onHandleClick = this.onHandleClick.bind(this);
    this.onFailureReset = this.onFailureReset.bind(this);
  }

  onFailureReset(){
    let array = this.state.successArray.slice();
    array[0].trackPattern = 1;
    this.setState({successArray: array});
  }


  onHandleClick(id){
    let workWithThis = this.state.masterButtonList.slice();
    let array = this.state.successArray.slice();
    workWithThis.forEach((button) => {
      if (id === button.id && button.pattern === 0){
        this.onFailureReset();
      } else if (id === button.id && button.pattern === 1 && array[0].trackPattern === 0){
        array[0].trackPattern += 1;
      } else if (id === button.id && button.pattern === 2 && array[0].trackPattern === 1){
        array[0].trackPattern += 1;
      } else if (id === button.id && button.pattern === 3 && array[0].trackPattern === 2){
        console.log('this is where success will go');
      } else if (id === button.id){
        this.onFailureReset();
      }
  });
this.setState({masterButtonList: workWithThis});
this.setState({successArray: array});
}

onHandleFormClick(id){
  let workWithThis = this.state.masterButtonList.slice();
  let array = this.state.formArray.slice();
  workWithThis.forEach((button) => {
    if (id === button.id){
      array[0].numberOfClicks += 1;
      button.pattern += array[0].numberOfClicks;
    } else if (array[0].numberOfClicks === 3){
      console.log('Your buttons have been set!')
    }
});
this.setState({masterButtonList: workWithThis});
this.setState({formArray: array});
}

  render(){
    return(
      <div>
      <h1>Screen</h1>
        {this.state.masterButtonList.map((butt) =>
          <div key={butt.id}>
            <Screen
              clicked={butt.clicked}
              pattern={butt.pattern}
              key={butt.id}
            />
            <button onClick={() => this.onHandleClick(butt.id)}>Click</button>
            <hr/>
          </div>
        )}
        <h1>Form</h1>
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
  }
}

export default Static;
