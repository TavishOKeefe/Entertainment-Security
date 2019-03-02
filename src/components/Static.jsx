import React from 'react';
import Screen from './Screen';
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
          pattern: 1,
          id: v4()
        },
        {
          clicked: false,
          pattern: 2,
          id: v4()
        },
        {
          clicked: false,
          pattern: 3,
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
          magic: 1,
        }
      ]
    };
    this.onHandleClick = this.onHandleClick.bind(this);
    this.onFailureReset = this.onFailureReset.bind(this);
  }
  
  onFailureReset(){
    let array = this.state.successArray.slice();
    console.log('also getting here');
    array[0].magic = 1;
    this.setState({successArray: array});
  }
  
  
  onHandleClick(id){
    let workWithThis = this.state.masterButtonList.slice();
    let array = this.state.successArray.slice();
    workWithThis.forEach((button) => {
      if (id === button.id && button.pattern === 0){
        this.onFailureReset();
        console.log('getting here');
      } else if (id === button.id && button.pattern === 1 && array[0].magic === 1){
        array[0].magic += 1;
      } else if (id === button.id && button.pattern === 2 && array[0].magic === 2){
        array[0].magic += 1;
      } else if (id === button.id && button.pattern === 3 && array[0].magic === 3){
        console.log('this is where success will go');
      } else {
        this.onFailureReset();
      }
  });
this.setState({masterButtonList: workWithThis});
this.setState({successArray: array});
}
  
  render(){
    return(
      <div>
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
      </div>
    );
  }
}
  
export default Static;
  
  
  
  