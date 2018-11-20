import React, { Component } from 'react'

class MoreInfo extends Component {

    render() {
        return (
            <p id="message">Tip: {this.props.message}</p>

        )
    }

}

export default MoreInfo;
