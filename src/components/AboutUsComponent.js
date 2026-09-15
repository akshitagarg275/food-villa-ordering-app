import React from 'react'
import User from './User'
import UserClass from './UserClass'


class AboutUsComponent extends React.Component {
    constructor(props){
        super(props)
        console.log("Parent constructor")
    }

    componentDidMount() {
        console.log('Parent Component did Mount')

    }
    render() {
        console.log("Parent render")
         return (
    <div>
        <h2>AboutUsComponent</h2>
        <User name="Akshita Garg"/>
        <UserClass name="Akshita Garg"/>
        <UserClass name="Aayush"/>
    </div>
  )
    }
}

// const AboutUsComponent = () => {
//   return (
//     <div>
//         <h2>AboutUsComponent</h2>
//         <User name="Akshita Garg"/>
//         <UserClass name="Akshita Garg"/>
//     </div>
//   )
// }

export default AboutUsComponent