import React from 'react'

export default function LHL_FuncDemo(props){
    return(
        <div>
            <hr/>
            <h2>Function Component Demo</h2>
            <h3> Sử Dụng Thuộc Tính Từ props</h3>
            <p>userName: {props.userName}</p>
            <p>fullName: {props.fullName}</p>
            <p>age: {props.age}</p>
        </div>
    )
}