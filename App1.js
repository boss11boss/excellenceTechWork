import React, { Component } from 'react';

class App extends Component {

  
  render() {
    let a = [1,2,3,6,2,44,11,1,222,21]
    let b = []
    for (let index = 0; index < a.length; index++) {
         if(a[index] % 2 === 0){
            b.push(a[index])
            b.push(' ')
         }
         }
    return (
      <div>
         
        {a}
        <br/>
        {b}
      </div>
    );
  }
}

export default App;