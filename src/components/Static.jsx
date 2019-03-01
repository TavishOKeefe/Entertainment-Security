import React from 'react';
import Screen from './Screen';
import { v4 } from 'uuid';

class Static extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      masterButtonList: [
        {
          clicked: null,
          pattern: 0,
          id: v4()
        },
        {
          clicked: null,
          pattern: 1,
          id: v4()
        },
        {
          clicked: null,
          pattern: 2,
          id: v4()
        },
        {
          clicked: null,
          pattern: 3,
          id: v4()
        },
      ]
    };
    this.onHandleClick = this.onHandleClick.bind(this);
  }
  
  
  onHandleClick(id){
    const clickedButtons = [];
    console.log(clickedButtons.length);
    let workWithThis = this.state.masterButtonList.slice();
    workWithThis.forEach(function(button){
      if (clickedButtons.length === 3){
        return 'you win';
      }
      else if ((id === button.id) && (button.pattern === clickedButtons.length)){
        clickedButtons.push(id);
      } else {
        return 'you lose';
      }
  });
this.setState({masterButtonList: workWithThis});
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
  
  
  
  