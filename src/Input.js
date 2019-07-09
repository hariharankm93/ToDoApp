import React from 'react';
import axios from 'axios';

class Input extends React.Component{
    constructor(props){
        super(props);
        this.state={
            listItem : '',
            isChecked : false
        
        };
    }

  
    onChange = (e) =>{
        this.setState({
            listItem : e.target.value
        })
    }

    submitData = () =>{  
        const data = {action : this.state.listItem,isChecked : this.state.isChecked};
       if(data.action && data.action.length > 0){
        axios.post('api/todos',data).then(res => {
            if(res.data){
                this.props.fun(res.data);
                this.props.getData();
               
            }
        }).catch(err => console.log(err))
       }
       else{
           console.log('Input field is empty')
       }
    }

    render(){
        return(<div className="input-container">
            <input type="text" onChange={this.onChange} value={this.state.listItem}/>
            <button onClick={this.submitData}>Add</button>
        </div>)
    }
}

export default Input;