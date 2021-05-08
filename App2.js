import React, { Component } from 'react';

class App extends Component {
  render() {
    let a=[1,1,1,1,1,0,0,0,0,1,1,1,0,0,1,1,1,1,1,1,1]
    let count = 0
    let b = []
    for (let i = 0; i < a.length; i++) {
      if(a[i]===1){
        count= count+1
        b.push(count)
        b.push('   ')
      }
      else{
        count=0
      }
      
    }
    let max =b[0]
    for (let j = 0; j < b.length; j++) {
        
        if(max<b[j]){
          max=b[j]
        }
      
    }

    return (
      <div>
        {max}
      </div>
    );
  }
}

export default App;