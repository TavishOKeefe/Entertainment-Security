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
  }
  
  
  onHandleClick(id){
    let workWithThis = this.state.masterButtonList.slice();
    let array = this.state.successArray.slice();
    workWithThis.forEach(function(button){
      if (id === button.id && button.pattern === 0){
        console.log('this is where failure will go');
      } else if (id === button.id && button.pattern === 1 && array[0].magic === 1){
        array[0].magic += 1;
      } else if (id === button.id && button.pattern === 2 && array[0].magic === 2){
        array[0].magic += 1;
      } else if (id === button.id && button.pattern === 3 && array[0].magic === 3){
        console.log('this is where success will go');
      } else {
        console.log('this is where failure will go');
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
            <p>{butt.id}</p>
            <hr/>
          </div>
        )}
      </div>
    );
  }
}
  
export default Static;

// else if (id === button.id && button.pattern === 0) {
//   return "you lose";
// }
  
  
  
  