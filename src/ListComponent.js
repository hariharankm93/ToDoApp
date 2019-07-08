import React from 'react';

const ListComponent = (props) =>{
    const list = props.data.map(a => <li key={a._id} onClick={()=>{props.delete(a._id)}}>{ a.action}</li>)
   return(<ul>
        {list}
    </ul>)
}

export default ListComponent;   