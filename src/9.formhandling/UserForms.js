import React,{Component} from 'react'

export class  UserForms extends Component  {
  constructor(){
     super()
     this.state={
            username:""
     }
  }
getFormData(event){
   console.log(event)
}

getUser
  render(){
      return(
        <div>
           <h1>User Form</h1>
           <form>
                <div>
                    <label>UserName</label>
                    <input type="text"
                           className='form-control w-50'
                           value={this.state.username}
                          // onChange{}
                           />
                </div>
                <br/>
                <div>
                    <button className='btn btn-primary' type='input'>get data</button>
                </div>
           </form>
           </div>
      )
  }
}

export default UserForms