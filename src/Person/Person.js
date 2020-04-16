import React from 'react'
const person = (props)=> {
return (
    <div>
        <p onClick={props.myclick}>大家好,我是{props.name}，我有{props.count}作品</p>
{/* <p>{props.children}</p> */}
<input type="text" onChange={props.changed} defaultValue={props.name}/>
    </div>
)
}
export default person;