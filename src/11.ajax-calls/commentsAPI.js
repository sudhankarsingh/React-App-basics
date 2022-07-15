import React, { Component } from 'react'

export class commentsAPI extends Component {
  
  constructor(){
 super()

 this.state={
    comments:[]
 }
  }
//  componentDidMount(){
//      axios("https://jsonplaceholder.typicode.com/comments")
//      .then(response=>this.setState({comments:response.data}));
//  }
   
   render() {
    return (
      <div>
        <table className='table'>

        </table>
      </div>
    )
  }
}

export default commentsAPI