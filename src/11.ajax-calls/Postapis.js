import React,{Component} from 'react'

export class postAPI extends Component {
  constructor(){
    super()

    this.state={
        posts:[]
    }
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode")
  }
       
  
    render (){
    <div>Postapis</div>
    }
}

export default postAPI