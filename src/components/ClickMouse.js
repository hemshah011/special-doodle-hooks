import React, { Component } from 'react'

class ClickMouse extends Component {
    constructor(props) {
        super(props)

        this.state = {
            x: 0,
            y: 0
        }
    }

    logMousePosition = (e) => {
        this.setState({ x: e.clientX, y: e.clientY })
    }

    componentDidMount() {
        window.addEventListener('mousemove', this.logMousePosition)
    }

    render() {
        return (
            <h1>
                X={this.state.x} Y={this.state.y}
            </h1>
        )
    }
}

export default ClickMouse
