import React, { Component } from 'react';

class App extends Component {
  render() {
    let a = [3,4,5,6,6,7,8,9]
    let count = 0
    let value=0
    for (let i = 0; i < a.length; i++) {
      for (let j = i; j < a.length; j++) {
        if(a[i]===a[j])
          {count = count+1}
        if(count === 2 )

          {
            value=a[j]
            break;
          }  
      }
      count=0
    }
    return (
      <div>
        {value}
      </div>
    );
  }
}

export default App;

