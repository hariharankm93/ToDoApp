import React from 'react';

class ListComponent extends React.Component{
    /* Toggle Strike on clicked todo item*/
    strike = (item) =>{
       this.props.strike(item);
    }

   render(){
    const list = this.props.data.map(a => <li key={a._id} onClick={()=>{this.strike(a)}} className={a.isChecked ? 'checked' : ''}>{ a.action}</li>)
    return(<ul>
         {list}
     </ul>)
   }
}

export default ListComponent;   