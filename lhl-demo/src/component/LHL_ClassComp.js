import React, { Component } from 'react'

export default class LHL_ClassComp extends Component {
    constructor(props){
        super(props);
        // tạo đối tượng dữ liệu
        this.state = {
            firstName:"Lê Hoàng",
            lastName:"Long",
            userName:"K22CNT3",
        }
    }
    //arrow function
    Member = (props) => {
        return(
            <div className='alert alert-success'>
                <h3>Thưa Ngài: {props.fullName} - Bạn: {props.age} Tuổi.</h3>
            </div>
        )
    }

    MemberList = ()=>{
        return(
           <> 
           <this.Member fullName="Lê Hoàng Việt" age="22"/>
           <this.Member fullName="Nguyễn Thị Thanh Thủy" age="44"/>
           </>
        )
    }
  render() {
    return (
      <div className='alert alert-danger'>
        <h2>Class Component Demo</h2>
        <hr/>
        <h3>Dữ liệu trong state</h3>
        <h4>Chào Chủ Nhân: {this.state.firstName} {this.state.lastName}</h4>
        <hr/>
        <h3>Dữ Liệu Từ props</h3>
        <p>Compony:{this.props.compony}</p>
        <p>Course:{this.props.course}</p>
        <hr/>
        <this.Member fullName="Lê Hoàng Long" age="20" />
        <hr/>
        {/* {this.MemberList} */}
        <this.MemberList/>
      </div>
    );
  }
}

