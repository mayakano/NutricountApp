import React, { Component } from 'react'

class Input extends Component {
    render() {
        return (
            <div>THIS IS THE INPUT COMPONENT</div>
            <form>
            <label>
              Pick Your Item:
              <input type="text" name="name" />
            </label>
            <input type="submit" value="Submit" />
          </form>
        )
    }
}

export default Input
