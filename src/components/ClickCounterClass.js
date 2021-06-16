import React, { Component } from 'react'

class ClickCounterClass extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }

    incrementCount=()=>{
        this.setState({
            count:this.state.count+1
        })
    }

    componentDidMount(){
        document.title=`Clicked ${this.state.count} times`
    }

    componentDidUpdate(prevProps,prevState){
        document.title=`Clicked ${this.state.count} times`
    }
    
    render() {
        return (
            <>
                <button onClick={this.incrementCount}>Clicked {this.state.count} times</button>
            </>
        )
    }
}

export default ClickCounterClass
