import React, { Component } from 'react'

const Input = (props) => {
    

        return (
<<<<<<< HEAD
            <div>THIS IS THE INPUT COMPONENT</div>
            <form>
            <label>
              Pick Your Item:
              <input type="text" name="name" />
            </label>
            <input type="submit" value="Submit" />
          </form>
=======
            <div>
                <form id="input-item"  action="" onSubmit={props.getName}>
                    <input name="name" id="searcher" type="text" placeholder="Enter Food Here" />
                    <input type="submit" value="Search" />
                </form>
            </div>
>>>>>>> 6ace9ef984e60ffa0b1e444c25232f9e0fc7d12a
        )

}

export default Input
