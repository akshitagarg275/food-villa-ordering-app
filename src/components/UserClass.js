import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count:0,
            userInfo: {
                name: "Dummy name",
                location: "Default Location",
                avatar_url: "Dummy"
            }
        }
        console.log("constructor")
    }

    async componentDidMount() {
        console.log("Component did mount")
        const data = await fetch('https://api.github.com/users/akshitagarg275')
        const jsonData = await data.json()
        console.log(jsonData)
        this.setState({
            userInfo: jsonData
        })

    }
    render() {
        console.log('render')
        return  (
            <div className='user-card'>
                <h1>Count::{this.state.count}</h1>
                <img src={this.state.userInfo.avatar_url} />
                <h2>Name: {this.state.userInfo.name}</h2>
                <h3>Location: {this.state.userInfo.location}</h3>
                <h4>Contact: {this.state.userInfo.login}</h4>
                <button onClick={()=>{
                    this.setState({
                        count: this.state.count +1
                    })
                }}>Click me</button>
            </div>
        )
    }
}

export default UserClass