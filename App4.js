import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {

  state={
    posts:[],
    a:12
  }

  componentDidMount(){
    axios.get('www.example.com/api/get/1')
    .then(response=>{
      console.log(response.data)
      this.setState({posts:response.data})
    })
    .catch(err=>{
      console.log(err)
    })
  }

  render() {
    
    return (
      <div>
        {this.state.posts.map(p=> <span>{p.title}</span> )}
        {this.state.posts.map(p=> <span>{p.title}</span> )}

      </div>
    );
  }
}

export default App;